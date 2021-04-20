import { Route, Switch } from 'react-router-dom';
import './App.css';
import Intro from './components/Intro';
import Home from './components/Home'


function App() {
  return (
    <>
       
        <Switch>
          <Route path='/' exact component={Intro}/>
          <Route path='/home' exact component={Home} />
        </Switch>
       
     
    </>
  );
}

export default App;
