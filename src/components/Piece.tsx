import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";

interface PieceProps {
    piece: boolean | null;
}

export function Piece(props: PieceProps) {

    function handlePiece(): string {
        return props.piece ? cross : circle
    }

    return (
        <div className=" flex justify-center items-center h-32 w-32">
            {props.piece !== null && <img src={handlePiece()} alt={handlePiece()} />}
        </div>
    );
}