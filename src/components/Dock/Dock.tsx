import './dock.scss'

const Dock = () => {
    return (
        <footer className="dock">
            <div className="icon github" onClick={() => window.open("https://www.github.com/raunak-dubey", "_blank")}>
                <i className="ri-github-fill"></i>
            </div>
            <div className="icon mail" onClick={() => window.open("mailto:raunak18@zohomail.in", "_blank")}>
               <i className="ri-mail-fill"></i>
            </div>
            <div className="icon spotify">
                <i className="ri-spotify-fill"></i>
            </div>
            <div
                onClick={() => window.open("https://www.linkedin.com/in/raunak-dubey-10946338b/", "_blank")}
                className="icon link"
            >
                <i className="ri-linkedin-box-fill"></i>
            </div>
            <div className="icon cli">
                <i className="ri-terminal-fill"></i>
            </div>
        </footer>
    );
};

export default Dock;
