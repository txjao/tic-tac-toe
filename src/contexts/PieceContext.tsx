/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from "react";
import { PieceEnum } from "../model/piece.enum";

type Piece = PieceEnum.CIRCLE | PieceEnum.CROSS;

export interface IPieceContext {
    pieceContext: Piece,
    setPieceContext: (piece: Piece) => void
}

export const PieceContext = createContext<IPieceContext>({
    pieceContext: PieceEnum.CROSS,
    setPieceContext: (piece: Piece) => { },
})

export function usePieceContext(){
    return useContext(PieceContext)
}

