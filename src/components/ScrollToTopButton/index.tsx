import { ButtonHTMLAttributes } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = ({
    ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            className="w-28 flex bg-gray-400 hover:bg-blue-600 justify-evenly items-center rounded-xl px-4"
            {...rest}
        >
            <p>Topo</p>
            <span>
                <IoIosArrowUp />
            </span>
        </button>
    );
};

export default ScrollToTopButton;

