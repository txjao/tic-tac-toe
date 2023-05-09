import { Board } from "./components/Board";
import Logo from "./assets/logo.svg";

function App() {

  return (
    <div className="flex h-screen justify-start items-center flex-col gap-6">
      <img src={Logo} alt="Logo" className="h-24"/>
    <Board/>
    </div>
  )
}

export default App
