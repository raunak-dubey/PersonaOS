import { useEffect, useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import Window from "../Window"
import './note.scss'

const Note = () => {

    const [markdown, setMarkdown] = useState<string | null>(null)

    useEffect(() => {
      fetch("/note.txt")
        .then(res => res.text())
        .then(text => setMarkdown(text))
    }, [])
    
  return (
    <Window title="notes"> 
        <div className="note-window">
            {markdown ? <SyntaxHighlighter language="typescript" style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p> Loading... </p>}
        </div>
    </Window>
  )
}

export default Note