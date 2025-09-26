import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import { PieceEnum } from "../model/piece.enum";

interface PieceProps {
    piece: string | null;
}

export function Piece(props: PieceProps) {
    
    function handlePiece(): string {
        switch (props.piece) {
            case PieceEnum.CIRCLE:
                return circle;
            case PieceEnum.CROSS:
                return cross;
            default:
                return ""
        }
    }

    return (
        <div className=" flex justify-center items-center h-32 w-32">
            {props.piece !== null && <img src={handlePiece()} alt={handlePiece()} />}
        </div>
    );
}