import { Board } from "../components/Board";

export function GamePage() {
    return (
        <>
            <div className="flex justify-start items-center flex-col gap-6 mt-24">
                <Board />
            </div>
        </>
    );
}