import './app.scss'
import Dock from './components/Dock/Dock'
import Panel from './components/Panel/Panel'
import Cli from './components/Windows/Cli/Cli'
import Github from './components/Windows/Github/Github'
import Note from './components/Windows/Note/Note'
import Resume from './components/Windows/Resume/Resume'

const App = () => {
  return (
    <main>
      <Panel />
      <Dock />
      <Github/>
      <Note/>
      <Resume/>
      <Cli/>
    </main>
  )
}

export default App