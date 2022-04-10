import Profile from './profile/Profile';
import telechargement from "./img/telechargement.jpg"
import './App.css';



function App() {
  const appName ="Kasraoui Anouar";
  const appBio ="full stuck";
  const appProfession ="developer "
  const handleName =(name)=>{
    alert (`bonjour ${name}`);
  }
  return (
    <div>
       <Profile name={appName} bio= {appBio} profession={appProfession} handleName ={()=>handleName(appName)}>
          <img style={{width:'250px', borderRadius:'90 px ',marginTop:'50px',marginLeft:'50px'}} src={telechargement}/>
        </Profile> 
       
    </div>
    
  );
}

export default App;
