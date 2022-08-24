import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Componentes/Header/Header';
import FirstScreen from './Componentes/FirstScreen/FirstScreen';
import SecondScreen from './Componentes/SecondScreen/SecondScreen';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/FirstScreen' element={<FirstScreen/>}/>
        <Route path='/SecondScreen' element={<SecondScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
