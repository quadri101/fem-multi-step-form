import Sidebar from './components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <div className='App'>
      {/* my sidebar */}
      <Sidebar/>
      {/* Outlet Component for children of the App i.e. the steps */}
      <Outlet/>
    </div>
  )
}

export default App