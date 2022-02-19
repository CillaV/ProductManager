import { Router } from '@reach/router';
import './App.css';
import OneProduct from './components/OneProduct';
import Main from './views/Main';


function App() {
  return (
    <div className="App">
      
      <Router>


        {/* The "/" path is our root. When we run npm start, this will be what displays at localhost:3000  */}
        <Main path="/" />

        <OneProduct path="/:id" />


      </Router>
    </div>
  );
}

export default App;
