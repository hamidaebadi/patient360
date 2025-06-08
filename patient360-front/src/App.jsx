import { Routes, Route, Link } from 'react-router-dom'
import Staff from './apps/Staff'
import Landing from './apps/Landing'
import PatientMonitor from './apps/patientMonitor/main'
import PatientListView from './apps/patientMonitor/PatientListView'
import HealthTrends from './apps/patientMonitor/HealthTrends'
import PatientDetailView from './apps/patientMonitor/components/PatientDetailView'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/staff' element={<Staff />} />
        <Route path='/patient_monitor' element={<PatientMonitor />}>
          <Route path='patient_list' element={<PatientListView />} />
          <Route path='patient_list/patient_detail' element={<PatientDetailView />} />
          <Route path='health_trends' element={<HealthTrends />} />
        </Route >
        <Route path='/' element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App