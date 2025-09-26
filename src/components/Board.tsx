import { useEffect, useState } from "react";
import { Cell } from "./Cell";
import { usePieceContext } from "../contexts/PieceContext";
import { PieceEnum } from "../model/piece.enum";

type Player = boolean | null;
type BoardState = Player[];

export function Board() {
    const { pieceContext, setPieceContext } = usePieceContext()

    const [boardState, setBoardState] = useState<BoardState>(Array(9).fill(null))

    // X - true | O - false
    const [piece, setPiece] = useState(handlePiece())
    const [winner, setWinner] = useState<boolean>(false)


    function handlePiece(): boolean {
        return pieceContext === PieceEnum.CROSS ? true : false;
    }

    function handle(index: number) {
        if (boardState[index] !== null) {
            return;
        }

        const auxBoardState = [...boardState]

        if (boardState !== null) {
            auxBoardState[index] = piece;
        }

        setPieceContext()
        setPiece(!piece);
        setBoardState(auxBoardState);
    }

    function hasAWinner() {


        return winner ? true : false
    }

    const xWinGames = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ]
    const yWinGames = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]
    const crossWinGames = [
        [0, 4, 8],
        [2, 4, 6],
    ]

    useEffect(() => {
        console.log(boardState);
    }, [boardState]);

    const cellPieces = boardState.map(cellValue => {
        if (cellValue === null) return null;
        return cellValue ? PieceEnum.CROSS : PieceEnum.CIRCLE;
    });

    return (
        <div
            className="bg-white grid grid-cols-3 justify-items-center gap-4 border-black border-8 rounded-2xl p-7
        shadow-[-8px_6px_0_0_rgba(0,0,0)]"
        >
            {boardState.map((cell, i) => (<Cell key={i} piece={cellPieces[i]} onClick={() => handle(i)} teste={i} />))}
        </div>
    );
}