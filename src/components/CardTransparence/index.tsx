import { HiArrowLongRight } from "react-icons/hi2";

function CardTransparence({ text, href }: { text: string; href: string }) {
    return (
        <div className="w-4/5 mx-auto flex justify-between border-black border-2 p-3 mb-4 text-lg">
            <p>{text}</p>
            <a
                className="flex justify-between w-32 bg-yellow-200 hover:bg-yellow-300 hover:cursor-pointer px-6 py-1 mr-4 rounded-xl items-center"
                href={href}
                target="_blank"
                aria-label="Baixar"
            >
                <p className="text-xs">BAIXAR</p>
                <span>
                    <HiArrowLongRight size={20} />
                </span>
            </a>
        </div>
    );
}

export default CardTransparence;

