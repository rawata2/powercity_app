import './App.css';
import { ProfileCard, NavBar, EditProfile } from '../ui-components';

function App() {
    return (
      <div className='App'>
        <NavBar width={"100vw"}/>
        <br/>
        <div id='contact'><ProfileCard/>
        <EditProfile/></div>  
      </div>
    );
  }
  
  export default App;