interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    size?: "lg" | "md";
}

export function Button({ onClick, children, size = "lg" }: ButtonProps) {

    function handleSize() {
        switch (size) {
            case "lg":
                return "w-40"
            case "md":
                return "w-24"
        }
    }

    return (
        <button
            className={`
                      ${handleSize()}
                      inline-flex justify-center items-center
                    bg-cyan-200 h-20 px-4 border-4 border-black rounded-md 
                      shadow-[-2px_3px_0_0_rgba(0,0,0)] cursor-pointer 
                      text-xl
                      hover:shadow-none hover:translate-y-[3px] hover:translate-x-[-2px] 
                      hover:border-2 hover:duration-75 hover:transition-all `}
            onClick={onClick}
        >
            {children}
        </button>
    );
}