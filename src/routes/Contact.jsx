import './App.css';
import { ContactUs, NavBar } from '../ui-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faTwitter, faSnapchat, faInstagram } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <div className='App'>
      <NavBar width={"100vw"}/>
      <br/>
      <div id='contact'><ContactUs/></div>
      <section class="footer">
      <div class="social">
        <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
        <a href="#"><FontAwesomeIcon icon={faSnapchat}/> </a>
        <a href="#"><FontAwesomeIcon icon={faTwitter}/> </a>
        <a href="#"><FontAwesomeIcon icon={faFacebookF}/> </a>
      </div>

      <ul class="list">
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">Saved</a>
        </li>
        <li>
          <a href="#">Basket</a>
        </li>
      </ul>
      <p class="copyright">Group 8 @ 2022</p>
    </section>    
    </div>
  );
}

export default App;
