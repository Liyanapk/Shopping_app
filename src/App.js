
import './App.css';
import { Header } from './components/header/Header';
import { Banner } from './components/banner/Banner';
import { DataProvider } from './layout/DataProvider';
import { BestSeller } from './components/bestseller/BestSeller';
import { TopSelection } from './components/topselselcetion/TopSelection';
import { BestValue } from './components/bestvalue/BestValue';
import { Footer } from './components/footer/Footer';


 
function App() {
  return (
    <div className="App">
      
      <Header />
      <Banner />

      <DataProvider>
      {/* <BestSeller/> */}
      <TopSelection/>
      <BestValue/>
      </DataProvider>
      <Footer/>
      
    </div>
  );
}

export default App;
