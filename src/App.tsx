import Logo from "./assets/logo.svg";
import circle from "./assets/circle.svg";
import cross from "./assets/cross.svg";

import { useState } from "react";
import { Button } from "./components/Button";
import { useNavigate } from "react-router-dom";
import { usePieceContext } from "./contexts/PieceContext";
import { PieceEnum } from "./model/piece.enum";

function App() {
  const [selectedOnePlayer, setSelectedOnePlayer] = useState(false);
  const [selectedTwoPlayer, setSelectedTwoPlayer] = useState(false);

  const { setPieceContext } = usePieceContext()

  const navigate = useNavigate();

  const btnDiv = "inline-flex gap-2";

  return (
    <div className="flex h-screen justify-start items-center flex-col gap-6">
      <img src={Logo} alt="Logo" className="h-48" />
      <div className="flex flex-col items-center gap-2 w-96 mt-32">
        <div className={btnDiv}>
          <Button
            onClick={() => {
              setSelectedTwoPlayer(false);
              setSelectedOnePlayer(true);
            }}
          >
            1 jogador
          </Button>
          <Button
            onClick={() => {
              setSelectedOnePlayer(false)
              setSelectedTwoPlayer(true);
            }}
          >
            2 jogador
          </Button>
        </div>

        <div
          id="one-player"
          className={`
            overflow-hidden
            transition-all duration-500 ease-in-out
            ${selectedOnePlayer ? "max-h-60 mt-6 opacity-100 py-2" : "max-h-0 mt-0 opacity-0 py-0"}
          `}
        >
          <div className={`
            flex flex-col items-center gap-4
            transition-transform duration-500 ease-in-out
            ${selectedOnePlayer ? "translate-y-0" : "-translate-y-full"}
          `}>
            <span>One player mode selected!</span>
            <span>What simbol you want to play with:</span>

            <div className={btnDiv}>
              <Button
                size="md"
                onClick={() => {
                  setPieceContext(PieceEnum.CROSS)
                  navigate("/game");
                }}
              >
                <img src={cross} alt="Cross" className="h-8" />
              </Button>

              <Button
                size="md"
                onClick={() => {
                  navigate("/game");
                  setPieceContext(PieceEnum.CIRCLE)
                }}
              >
                <img src={circle} alt="Circle" className="h-8" />
              </Button>
            </div>
          </div>
        </div>
        <div
          id="two-player"
          className={`
            overflow-hidden
            transition-all duration-500 ease-in-out
            ${selectedTwoPlayer ? "max-h-60 mt-6 opacity-100 py-2" : "max-h-0 mt-0 opacity-0 py-0"}
          `}
        >
          <div className={`
            flex flex-col items-center gap-4
            transition-transform duration-500 ease-in-out
            ${selectedTwoPlayer ? "translate-y-0" : "-translate-y-full"}
          `}>
            <span>Two players mode selected!</span>
            <span>What simbol you want to play fisrt:</span>

            <div className={btnDiv}>
              <Button
                size="md"
                onClick={() => {
                  setPieceContext(PieceEnum.CROSS)
                  navigate("/game");
                }}
              >
                <img src={cross} alt="Cross" className="h-8" />
              </Button>

              <Button
                size="md"
                onClick={() => {
                  navigate("/game");
                  setPieceContext(PieceEnum.CIRCLE)
                }}
              >
                <img src={circle} alt="Circle" className="h-8" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;