import './App.css';
import { Header } from './Componants/Header';
import { Navbar } from './Componants/Nav';
import { Firstpage } from './Componants/Firstpage';
import { Footer } from './Componants/footer';
import { Brand } from './Componants/Brands';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Firstpage/>
      <Brand/>
     <Footer/>
    </div>
  );
}

export default App;