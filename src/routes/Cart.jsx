import './App.css';
import { FormCheckout, NavBar } from '../ui-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faTwitter, faSnapchat, faInstagram } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <div className='App'>
      <NavBar width={"100vw"}/>
      <br/>
      <div id='contact'><FormCheckout/></div>  
    </div>
  );
}

export default App;