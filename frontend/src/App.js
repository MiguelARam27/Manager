import { Route, Switch, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ProfileEditScreen from './pages/ProfileEditScreen';
import { useHistory } from 'react-router-dom';
function App() {
  const location = useLocation();
  const history = useHistory();
  return (
    <>
      <Nav />
      <Switch location={location} key={location.pathname} history={history}>
        <Route path='/login' component={Landing} exact />
        <Route path='/' component={Landing} exact />
        <Route path='/profile' component={ProfileEditScreen} exact />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
