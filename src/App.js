import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Body />
    </div>
  );
}

export default App;