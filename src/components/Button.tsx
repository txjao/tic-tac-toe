interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode; // Adicionando suporte para conteúdo dinâmico
}

export function Button({ onClick, children = "1 Jogador" }: ButtonProps) {
    return (
        <button 
            className="bg-cyan-200 h-20 w-40 px-4 border-4 border-black rounded-md 
                      shadow-[-2px_3px_0_0_rgba(0,0,0)] cursor-pointer 
                      text-xl
                      hover:shadow-none hover:translate-y-[3px] hover:translate-x-[-2px] 
                      hover:border-2 hover:duration-75 hover:transition-all " 
            onClick={onClick}
        >
            {children}
        </button>
    );
}