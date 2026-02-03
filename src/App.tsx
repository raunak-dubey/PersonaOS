import './app.scss'
import Dock from './components/Dock/Dock'
import Panel from './components/Panel/Panel'
import Github from './components/Windows/Github/Github'
import Note from './components/Windows/Note/Note'

const App = () => {
  return (
    <main>
      <Panel />
      <Dock />
      <Github/>
      <Note/>
    </main>
  )
}

export default App