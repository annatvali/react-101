import './index.css';
import Header from './components/layout/header/Header';
import Main from './components/layout/main/Main';
import Footer from './components/layout/footer/Footer';
import { nav } from './data/nav';

export default function App() {
  return (
    <>
      <Header nav={nav} />
      <Main />
      <Footer />
    </>
  );
}

