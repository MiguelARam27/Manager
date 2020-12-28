import { Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Route path='/' component={Landing} />

      <Footer />
    </>
  );
}

export default App;
