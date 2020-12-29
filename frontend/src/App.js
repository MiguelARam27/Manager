import { Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Route path='/login' component={Landing} exact />
      <Route path='/' component={Landing} exact />

      <Footer />
    </>
  );
}

export default App;
