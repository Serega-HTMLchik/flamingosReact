import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import TestPageContainer from './components/TestPage/TestPageContainer';


function App(props) {
  return (
    <div className="App-wrapper">
      <div className='container'>
        <Header />
        <Routes>
          <Route path="/" element={<TestPageContainer />} />
          <Route path="/test" element={<TestPageContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
