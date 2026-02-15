import Window from "../Window"
import './resume.scss'

const Resume = () => {

    return (
        <Window title="resume">
            <div className="resume-window">
                <embed src="/resume.pdf"></embed>
            </div>
        </Window>
    )
}

export default Resume