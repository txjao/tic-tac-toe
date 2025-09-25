import Logo from "./assets/logo.svg";
import { Button } from "./components/Button";
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  return (
    <div className="flex h-screen justify-start items-center flex-col gap-6">
      <img src={Logo} alt="Logo" className="h-48" />
      <div className="inline-flex justify-between w-96 mt-32">
        <Button onClick={() => {
        navigate("/game")
      }}>
        1 jogador
      </Button>
      <Button onClick={() => {
        navigate("/game")
      }}>
        2 jogador
      </Button>
      </div>
    </div>
  )
}

export default App
