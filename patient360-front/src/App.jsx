import {Routes, Route, Link} from 'react-router-dom'
import Staff from './apps/Staff'
import Landing from './apps/Landing'
import PersonnelMonitor from './apps/personnelMonitor/main'

const App = () =>{
  return(
    <div>
      <Routes>
        <Route path='/staff' element={<Staff />} />
        <Route path='/hpm' element={<PersonnelMonitor />}/>
        <Route path='/' element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App