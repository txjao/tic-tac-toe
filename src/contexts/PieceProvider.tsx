import { useState } from "react";
import { IPieceContext, PieceContext } from "./PieceContext";
import { PieceEnum } from "../model/piece.enum";

interface PieceContextProps {
    children: React.ReactNode
}

export function PieceProvider(pros: PieceContextProps) {
    const [pieceState, setPieceState] = useState(PieceEnum.CROSS);

    function handleSetPiece(piece: PieceEnum){
        setPieceState(piece);
    }

    const contextValue: IPieceContext = {
        pieceContext: pieceState,
        setPieceContext: handleSetPiece,
    }

    return (
        <PieceContext.Provider value={contextValue}>
            {pros.children}
        </PieceContext.Provider>
    )
}