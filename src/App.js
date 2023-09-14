import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AllRoutes from './routes/AllRoutes' 
import { ModalProvider } from './context/ModalContext';
import ModalComponent from './components/ModalComponent';

function App() {
  return (
    <ModalProvider>
      <div style={{minHeight:'100vh', margin:"0", padding:"0"}} >
        <div  style={{minHeight:'100vh',margin:"0", padding:"0"}} >
          <AllRoutes />
        </div>
      </div>
      <ModalComponent />
    </ModalProvider>
  );
}

export default App;