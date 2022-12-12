import './App.css';
import { ContactUs, NavBar, MarketingFooter } from '../ui-components';


function App() {
  return (
    <div className='App'>
      <NavBar width={"100vw"}/>
      <br/>
      <div id='contact'><ContactUs/></div>
      <div id="footer"><MarketingFooter/></div>    
    </div>
  );
}

export default App;
