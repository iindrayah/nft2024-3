import { BrowserRouter, Route } from 'react-router-dom';
import './index.css'
import Home from './Components/Home/Home';


function App() {

  return (
    <BrowserRouter>
      <Route path='/' >
        <Home />
      </Route>
    </BrowserRouter>

  )
}

export default App
