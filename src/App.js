import Profile from './profile/Profile';
import telechargement from "./img/telechargement.jpg"
import './App.css';



function App() {
  const appName ="john";
  const appBio ="snow";
  const appProfession ="king"
  const handleName =(name)=>{
    alert (`bonjour ${name}`);
  }
  return (
    <div>
       <Profile name={appName} bio= {appBio} profession={appProfession} handleName ={()=>handleName(appName)}>
          <img src={telechargement}/>
        </Profile> 
       
    </div>
    
  );
}

export default App;
