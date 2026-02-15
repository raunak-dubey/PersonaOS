declare module 'react-console-emulator' {
  import * as React from 'react'

  export interface Command {
    description?: string
    usage?: string
    fn: (...args: string[]) => string | Promise<string>
  }

  export interface TerminalProps {
    commands?: Record<string, Command>
    welcomeMessage?: string | string[]
    promptLabel?: string
    autoFocus?: boolean
  }

  export default class Terminal extends React.Component<TerminalProps> {}
}
