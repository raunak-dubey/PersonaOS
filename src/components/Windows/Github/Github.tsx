import { useEffect, useMemo, useState } from "react";
import Window from "../Window";
import './github.scss'
import axios from "axios";

type Repo = {
    id: number;
    name: string;
    description: string | null;
    stargazers_count: number;
    updated_at: string;
    language: string | null;
    html_url: string;
};

type SortType = "stars" | "updated";
const CACHE_KEY = "github_repos_cache_v1";

const Github = () => {
    const username = "raunak-dubey";
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState<SortType>("stars");

    useEffect(() => {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
            setRepos(JSON.parse(cached));
            setLoading(false);
            return;
        }

        const fetchRepos = async () => {
            try {
                const res = await axios.get<Repo[]>(
                    `https://api.github.com/users/${username}/repos`, {
                    headers: {
                        Accept: "application/vnd.github.v3+json",
                    },
                });

                sessionStorage.setItem(CACHE_KEY, JSON.stringify(res.data));
                setRepos(res.data);
            } catch (err) {
                console.error("Failed to fetch repos:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username]);

    const sortedRepos = useMemo(() => {
        const sorted = [...repos];

        if (sortBy === "stars") {
            sorted.sort((a, b) => b.stargazers_count - a.stargazers_count);
        } else {
            sorted.sort(
                (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
            );
        }

        return sorted;
    }, [repos, sortBy]);

    return (
        <Window title="Github">
            <div className="github-window">
                <div className="github-toolbar">
                    <button
                        className={sortBy === "stars" ? "active" : ""}
                        onClick={() => setSortBy("stars")}
                    >
                        Stars
                    </button>
                    <button
                        className={sortBy === "updated" ? "active" : ""}
                        onClick={() => setSortBy("updated")}
                    >
                        Updated
                    </button>
                </div>

                {loading ? (
                    <p className="loading">Loading repositories…</p>
                ) : (
                    < div className="repo-list">
                        {sortedRepos.map(repo => (
                            <div
                                key={repo.id}
                                className="repo-card"
                                onClick={() => window.open(repo.html_url, "_blank")}
                            >
                                <div className="repo-header">
                                    <span className="repo-name">{repo.name}</span>
                                    <span className="repo-visibility public">Public</span>
                                </div>

                                {repo.description && (
                                    <p className="repo-description">{repo.description}</p>
                                )}

                                <div className="repo-meta">
                                    {repo.language && (
                                        <span className="language">{repo.language}</span>
                                    )}
                                    <span className="stars">
                                        ★ {repo.stargazers_count}
                                    </span>
                                    <span className="updated">
                                        {new Date(repo.updated_at).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Window >
    )
}

export default Github