
import './App.css';
import { Header } from './components/header/Header';
import { Banner } from './components/banner/Banner';
import { DataProvider } from './components/bestseller/DataProvider';
import { BestSeller } from './components/bestseller/BestSeller';


 
function App() {
  return (
    <div className="App">
      
      <Header />
      <Banner />
      <DataProvider>
    
    <BestSeller/>

      </DataProvider>

    </div>
  );
}

export default App;
