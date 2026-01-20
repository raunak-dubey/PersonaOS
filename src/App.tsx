import './app.scss'
import Dock from './components/Dock/Dock'
import Panel from './components/Panel/Panel'

const App = () => {
  return (
    <main>
      <Panel />
      <Dock />
    </main>
  )
}

export default App