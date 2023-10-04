'use client'
import './cardproject.css';
 
function CardProject({ color, area, projectName, description }: Projeto) {
    
    const handleFlip = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
        if(event.currentTarget.classList.contains("flip-card-help")) {
            event.currentTarget.classList.remove("flip-card-help")
            event.currentTarget.firstElementChild?.classList.remove("flip-card-inner-help")
            return;
        }
        event.currentTarget.classList.add("flip-card-help")
        event.currentTarget.firstElementChild?.classList.add("flip-card-inner-help") 
    }
    
    return (
        <div onClick={(event: React.UIEvent<HTMLDivElement, UIEvent>) => handleFlip(event)} className="flip-card md:w-[260px] md:h-[300px] w-[300px] h-[350px] sm:m-1 mb-2 cursor-pointer">
            <div className="flip-card-inner">
                <div className={`flip-card-front text-white ${color} gap-2 flex flex-col justify-center items-center sm:m-1 mb-2`}>
                    <h3 className="text-lg">{area}</h3>
                    <h3 className="font-bold text-2xl text-center md:w-[95%] w-[90%]">{projectName}</h3>
                </div>
                <div className={`flip-card-back text-white ${color} flex justify-center items-center`}>
                    <h3 className="text-base w-[90%]">{description}</h3>
                </div>
            </div>
        </div>
    );
}

{/* <section className={`w-[260px] h-[300px] text-white ${color} gap-2 flex flex-col justify-center items-center sm:m-1 mb-2`}>
<h3 className="text-lg">{area}</h3>
<h3 className="font-bold text-2xl text-center w-[95%]">{projectName}</h3>
</section>
 <section className={`w-[260px] h-[300px] text-white ${color} gap-2 flex flex-col justify-center items-center sm:m-1 mb-2`}>
    <h3 className="text-lg">{description}</h3>
</section> */}


export type Projeto = {
    area: string;
    projectName: string;
    color: string;
    description: string;
};

export default CardProject;