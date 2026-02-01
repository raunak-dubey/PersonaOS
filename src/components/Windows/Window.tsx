import { Rnd } from "react-rnd"
import './window.scss'
import { type ReactNode } from 'react'

interface ArchWindowProps {
  title: string,
  children: ReactNode
}

const Window = ({title, children }: ArchWindowProps) => {
  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 800,
        height: 500
      }}
    >
      <div className="window">
        <nav className="nav">
          <div className="title"><p>{title}</p></div>
          <div className="dots">
            <div className="dot yellow"></div>
            <div className="dot green"></div>
            <div className="dot red"></div>
          </div>
        </nav>
        <div className="main-content">
          {children}
        </div>
      </div>
    </Rnd>
  )
}

export default Window