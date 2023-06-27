
interface ButtonProps {
    onClick: () => void;
}

export function Button(props: ButtonProps) {


    return (
        <button className="bg-cyan-200 h-12 w-auto px-1 border-4 border-black rounded-md  shadow-[-2px_3px_0_0_rgba(0,0,0)] cursor-pointer hover:bg-cyan-50 hover:transition-colors hover:relative bottom-0.5" onClick={props.onClick}>
                1 Jogador
        </button>
    );
}