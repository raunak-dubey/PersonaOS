import './app.scss'
import Dock from './components/Dock/Dock'
import Panel from './components/Panel/Panel'
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
    </main>
  )
}

export default App