import { Piece } from "./Piece";

interface PieceProps {
    piece: boolean | null; // null é a celula vazia
    onClick: () => void
    teste: number
}

export function Cell(props: PieceProps) {
    return (
        <div
            id="1"
            className="flex justify-center items-center bg-cyan-100 h-40 w-40 border-4 border-black rounded-2xl 
                shadow-[-3px_6px_0_0_rgba(0,0,0)] cursor-pointer hover:bg-cyan-50 transition-colors"
            onClick={props.onClick}
        >
            <Piece piece={props.piece} />
            {props.teste}
        </div>
    );
}