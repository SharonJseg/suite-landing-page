import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Header />
        <Main />
        <Footer />
      </>
    </Router>
  );
}

export default App;
