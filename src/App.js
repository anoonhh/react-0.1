import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import { AppBar } from '@mui/material';
import Appbar from './components/Appbar';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import UseE from './components/UseE';
import Mapping from './components/Mapping';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Registration/> */}
      <Appbar/>
      {/* <StateBasics/> */}
      {/* <Counter/> */}
      {/* <UseE/> */}
      <Mapping/>
    </div>
  );
}

export default App;
