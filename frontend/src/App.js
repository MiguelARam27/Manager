import { Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ProfileEditScreen from './pages/ProfileEditScreen';

function App() {
  return (
    <>
      <Nav />
      <Route path='/login' component={Landing} exact />
      <Route path='/' component={Landing} exact />
      <Route path='/profile' component={ProfileEditScreen} exact />

      <Footer />
    </>
  );
}

export default App;
