import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainScreen from './MainScreen';
import RegistrationSceen from './RegistrationSceen';

function App(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={MainScreen}/>
        <Route path="/register" exact={true} component={RegistrationSceen}/>
      </Switch>
    </BrowserRouter>
  )
}


export default App;

