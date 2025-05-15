import {Routes, Route, Link} from 'react-router-dom'
import Staff from './views/Staff'
import Landing from './views/Landing'

const App = () =>{
  return(
    <div>
      <Routes>
        <Route path='/staff' element={<Staff />} />
        <Route path='/' element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App