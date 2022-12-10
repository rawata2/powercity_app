import './App.css';
import { TallCardCollection, NavBar, MarketingFooter } from './ui-components';

function App() {
  return (
    <div className='App'>
      <NavBar width={"100vw"}/>
      <TallCardCollection/>
      <div id="footer"><MarketingFooter/></div>
    </div>
  );
}

export default App;
