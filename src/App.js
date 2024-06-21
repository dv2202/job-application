
import './App.css';
import { ToastContainer } from 'react-toastify';
import JobApplicationForm from './components/JobApplicationForm';

function App() {
  return (
    <div>
      <JobApplicationForm/>
      <ToastContainer />
    </div>
  );
}

export default App;
