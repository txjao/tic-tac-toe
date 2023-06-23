import { Board } from "./components/Board";
import Logo from "./assets/logo.svg";
import { Button } from "./components/Button";
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  return (
    <div className="flex h-screen justify-start items-center flex-col gap-6">
      <img src={Logo} alt="Logo" className="h-48"/>
        <Button onClick={()=>{
            navigate("/singleplayer")
        }}></Button>
    </div>
  )
}

export default App
