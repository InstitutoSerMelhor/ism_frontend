"use client";
import React, { RefObject, useRef } from "react";
import NavBar from "@/components/NavBar";
import CardTransparence from "@/components/CardTransparence";
import { IoIosArrowUp } from "react-icons/io";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ButtonTransparence from "@/components/ButtonTransparence";

const Transparence = () => {
    const titleRef = useRef<HTMLDivElement>(null);
    const activitiesRef = useRef<HTMLDivElement>(null);
    const balanceRef = useRef<HTMLDivElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    function scrollToRef(refName: RefObject<HTMLDivElement>) {
        refName.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div>
            <NavBar beTransparent={false} />
            <div ref={titleRef} className="bg-gray-400 mb-4">
                <h2 className="text-[#2637F7] text-center font-bold text-4xl py-3">
                    Transparência
                </h2>
            </div>
            <div className="[&>*:nth-child(odd)]:[#e5e7eb] [&>*:nth-child(even)]:bg-gray-200">
                <section ref={activitiesRef}>
                    <div className="w-4/5 flex justify-between mx-auto mb-4">
                        <ButtonTransparence
                            title="Relatório de Atividades"
                            onClick={() => scrollToRef(activitiesRef)}
                        />
                        <ButtonTransparence
                            title="Balanços Patrimoniais"
                            onClick={() => scrollToRef(balanceRef)}
                        />
                        <ButtonTransparence
                            title="Estatuto Social"
                            onClick={() => scrollToRef(socialRef)}
                        />
                        <ButtonTransparence
                            title="Projetos"
                            onClick={() => scrollToRef(projectsRef)}
                        />
                    </div>
                    <p className="w-4/5 bg-gray-400 mx-auto text-center text-xl py-1 rounded-t-xl mb-4">
                        Relatório de Atividades
                    </p>
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                </section>
                <section ref={balanceRef}>
                    <div className="w-4/5 mx-auto py-2 flex justify-end">
                        <ScrollToTopButton
                            onClick={() => scrollToRef(titleRef)}
                        />
                    </div>
                    <p className="w-4/5 bg-gray-400 mx-auto text-center text-xl py-1 rounded-t-xl mb-4">
                        Balanços Patrimoniais
                    </p>
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                </section>
                <section ref={socialRef}>
                    <div className="w-4/5 mx-auto py-2 flex justify-end">
                        <ScrollToTopButton
                            onClick={() => scrollToRef(titleRef)}
                        />
                    </div>
                    <p className="w-4/5 bg-gray-400 mx-auto text-center text-xl py-1 rounded-t-xl mb-4">
                        Estatuto Social
                    </p>
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                </section>
                <section ref={projectsRef}>
                    <div className="w-4/5 mx-auto py-2 flex justify-end">
                        <ScrollToTopButton
                            onClick={() => scrollToRef(titleRef)}
                        />
                    </div>
                    <p className="w-4/5 bg-gray-400 mx-auto text-center text-xl py-1 rounded-t-xl mb-4">
                        Projetos
                    </p>
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                    <CardTransparence text="Lorem Ipsum" href="test" />
                </section>
            </div>
        </div>
    );
};

export default Transparence;

