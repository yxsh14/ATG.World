import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import PostandLoc from './Components/PostandLoc';
import Select from './Components/Select';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Select />
      <PostandLoc />
    </div>
  );
}

export default App;
