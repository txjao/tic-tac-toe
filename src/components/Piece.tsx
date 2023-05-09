import { useEffect, useState } from "react";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";

interface PieceProps {
    piece: string;
}

export function Piece(props: PieceProps){
    //Player - X = false,Player - 2 = O
    const [piece, setPiece] = useState("false");
    
    useEffect(() => {
        setPiece(props.piece);
    }, [piece]);

    return(
        <div className=" flex justify-center items-center h-32 w-32">
            <img src={piece == "cross" ? cross : circle} alt={piece == "cross" ? "cross" : "circle"} />
        </div>
    );
}