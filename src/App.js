import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import QrCode from './components/QrCode';

function App() {
  return (
    <>
      <Header></Header>
      <div className="section container">
        <QrCode />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
