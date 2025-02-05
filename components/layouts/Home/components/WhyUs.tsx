import { FaUserTie } from "react-icons/fa";
import React from "react";
import { CardContent } from "./utils/HomeConstants";

const WhyUs: React.FC = () => {
    return (
        <section className="flex flex-col justify-center items-center w-full -mt-12 container">
            <h1 className="text-4xl font-bold text-green-600 capitalize">
                Kenapa memilih kami?
            </h1>

            <div className="flex flex-row gap-5 mt-14 select-none cursor-default">
                {CardContent.map((card, index) => (
                    <>
                        <Card key={`card-${card.title}-${index}`}>
                            <CardIcon>
                                <card.icon className="text-5xl text-green-600 group-hover:text-white transition-all duration-300" />
                            </CardIcon>
                            <h1 className="text-2xl font-semibold">
                                {card.title}
                            </h1>
                            <p className="text-center hyphens-auto">
                                {card.description}
                            </p>
                        </Card>
                    </>
                ))}
            </div>
        </section>
    );
};

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col gap-6 justify-start items-center border-2 border-green-600 p-5 rounded-lg w-[350px] text-center group">
            {children}
        </div>
    );
};

const CardIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex justify-center items-center border-[2px] border-green-600 rounded-full w-20 h-20 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
            {children}
        </div>
    );
};

export default WhyUs;
