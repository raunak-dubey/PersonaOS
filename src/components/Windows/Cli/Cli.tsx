import { useRef } from 'react'
import Terminal from 'react-console-emulator'
import './cli.scss'
import Window from '../Window'

const Cli = () => {
    const terminalRef = useRef<Terminal>(null)

    const commands = {
        about: {
            description: 'Short bio about me',
            usage: 'about',
            fn: () => `Hi I'm Raunak. I'm a frontend developer who builds small, delightful apps and UIs.`
        },
        portfolio: {
            description: 'Show portfolio URL',
            usage: 'portfolio',
            fn: () => 'https://your-portfolio.example.com'
        },
        social: {
            description: 'Show social links',
            usage: 'social',
            fn: () => 'GitHub: https://github.com/raunak\nTwitter: https://twitter.com/raunak'
        },
        resume: {
            description: 'Show resume link',
            usage: 'resume',
            fn: () => 'Resume: https://your-portfolio.example.com/resume.pdf'
        },
    }

    const welcomeMessage = [
        'Welcome to PersonaOS Terminal! Available commands:',
        'about - Short bio',
        'portfolio - Portfolio URL',
        'social - Social links',
        'resume - Resume URL',
        'help - List commands',
        'clear - Clear terminal'
    ]

    return (
        <Window title="Terminal">
            <div className="cli-window">
                <Terminal
                    ref={terminalRef}
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'personaOS@raunak:~$'}
                />
            </div>
        </Window>
    )
}

export default Cli