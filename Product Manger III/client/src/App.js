import { Router } from '@reach/router';
import './App.css';
import OneProduct from './components/OneProduct';
import Main from './views/Main';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      
      <Router>


        {/* The "/" path is our root. When we run npm start, this will be what displays at localhost:3000  */}
        <Main path="/" />

        <OneProduct path="/:id" />

        <EditProduct path="/edit/:id" />


      </Router>
    </div>
  );
}

export default App;
