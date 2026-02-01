import './app.scss'
import Dock from './components/Dock/Dock'
import Panel from './components/Panel/Panel'
import Github from './components/Windows/Github/Github'

const App = () => {
  return (
    <main>
      <Panel />
      <Dock />
      <Github/>
    </main>
  )
}

export default App