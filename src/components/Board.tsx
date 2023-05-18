import { useEffect, useState } from "react";
import { Piece } from "./Piece";

interface BoardType {
    boardGame: [boolean];
}

interface BoardProps {
    player: boolean;
}

export function Board(props: BoardProps) {
    //Player - 1 = false,Player - 2 = true
    const [player, setPlayer] = useState(props.player);
    const [board, setBoard] = useState<BoardType[]>([]);

    return (
        <div className="bg-white grid grid-cols-3 grid-rows-3 justify-center justify-items-center h-[40rem] w-[40rem] border-black border-8 rounded-2xl p-7
        shadow-[-8px_6px_0_0_rgba(0,0,0)]">
            <div id="1" className="flex justify-center items-center bg-cyan-100 h-40 w-40 border-4 border-black rounded-2xl 
                    shadow-[-3px_6px_0_0_rgba(0,0,0)] cursor-pointer
                        hover:bg-cyan-50 transition-colors"
                onClick={() => {
                    console.log("1");
                }}
            >
                <Piece piece={!player ? "cross" : "circle"} />
            </div >
            <div id="1" className="flex justify-center items-center bg-cyan-100 h-40 w-40 border-4 border-black rounded-2xl 
                    shadow-[-3px_6px_0_0_rgba(0,0,0)] cursor-pointer
                        hover:bg-cyan-50 transition-colors"
                onClick={() => {
                    console.log("1");
                }}
            >
                <Piece piece={player ? "cross" : "circle"} />
            </div >

            <div id="1" className="flex justify-center items-center bg-cyan-100 h-40 w-40 border-4 border-black rounded-2xl 
                    shadow-[-3px_6px_0_0_rgba(0,0,0)] cursor-pointer
                        hover:bg-cyan-50 transition-colors"
                onClick={() => {
                    console.log("1");
                }}
            >
                <Piece piece={player ? "cross" : "circle"} />
            </div >
            <div id="1" className="flex justify-center items-center bg-cyan-100 h-40 w-40 border-4 border-black rounded-2xl 
                    shadow-[-3px_6px_0_0_rgba(0,0,0)] cursor-pointer
                        hover:bg-cyan-50 transition-colors"
                onClick={() => {
                    console.log("1");
                }}
            >
                <Piece piece={!player ? "cross" : "circle"} />
            </div >
            <div id="1" className="flex justify-center items-center bg-cyan-100 h-40 w-40 border-4 border-black rounded-2xl 
                    shadow-[-3px_6px_0_0_rgba(0,0,0)] cursor-pointer
                        hover:bg-cyan-50 transition-colors"
                onClick={() => {
                    console.log("1");
                }}
            >
                <Piece piece={player ? "cross" : "circle"} />
            </div >
            <div id="1" className="flex justify-center items-center bg-cyan-100 h-40 w-40 border-4 border-black rounded-2xl 
                    shadow-[-3px_6px_0_0_rgba(0,0,0)] cursor-pointer
                        hover:bg-cyan-50 transition-colors"
                onClick={() => {
                    console.log("1");
                }}
            >
                <Piece piece={!player ? "cross" : "circle"} />
            </div >
            <div id="1" className="flex justify-center items-center bg-cyan-100 h-40 w-40 border-4 border-black rounded-2xl 
                    shadow-[-3px_6px_0_0_rgba(0,0,0)] cursor-pointer
                        hover:bg-cyan-50 transition-colors"
                onClick={() => {
                    console.log("1");
                }}
            >
                <Piece piece={player ? "cross" : "circle"} />
            </div >
            <div id="1" className="flex justify-center items-center bg-cyan-100 h-40 w-40 border-4 border-black rounded-2xl 
                    shadow-[-3px_6px_0_0_rgba(0,0,0)] cursor-pointer
                        hover:bg-cyan-50 transition-colors"
                onClick={() => {
                    console.log("1");
                }}
            >
                <Piece piece={!player ? "cross" : "circle"} />
            </div >
            <div id="1" className="flex justify-center items-center bg-cyan-100 h-40 w-40 border-4 border-black rounded-2xl 
                    shadow-[-3px_6px_0_0_rgba(0,0,0)] cursor-pointer
                        hover:bg-cyan-50 transition-colors"
                onClick={() => {
                    console.log("1");
                }}
            >
                <Piece piece={!player ? "cross" : "circle"} />
            </div >
        </div >
    );
}