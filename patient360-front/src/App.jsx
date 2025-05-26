import { Routes, Route, Link } from 'react-router-dom'
import Staff from './apps/Staff'
import Landing from './apps/Landing'
import PatientMonitor from './apps/patientMonitor/main'
import ActivePatient from './apps/patientMonitor/ActivePatient'
import HealthTrends from './apps/patientMonitor/HealthTrends'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/staff' element={<Staff />} />
        <Route path='/patient_monitor' element={<PatientMonitor />}>
          <Route path='active_patients' element={<ActivePatient />} />
          <Route path='health_trends' element={<HealthTrends />} />
        </Route >
        <Route path='/' element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App