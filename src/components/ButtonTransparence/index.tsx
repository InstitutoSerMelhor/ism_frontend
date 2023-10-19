import { ButtonHTMLAttributes } from "react";

interface ButtonTransparenceProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

const ButtonTransparence = ({ title, ...rest }: ButtonTransparenceProps) => {
    return (
        <button
            className="bg-gray-600 hover:bg-blue-700 w-52 text-white rounded-lg px-4 py-2 transition duration-900 ease-in-out"
            type="button"
            {...rest}
        >
            {title}
        </button>
    );
};

export default ButtonTransparence;

