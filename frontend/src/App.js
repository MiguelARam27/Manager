import { Route, Switch, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ManagerProfileEditScreen from './pages/ManagerProfileEditScreen';
import { useHistory } from 'react-router-dom';
import EmployeeScreen from './pages/EmployeeScreen';
function App() {
  const location = useLocation();
  const history = useHistory();
  return (
    <>
      <Nav />
      <Switch location={location} key={location.pathname} history={history}>
        <Route path='/login' component={Landing} exact />
        <Route path='/' component={Landing} exact />
        <Route path='/employees' component={EmployeeScreen} exact />
        <Route
          path='/managerProfile'
          component={ManagerProfileEditScreen}
          exact
        />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
