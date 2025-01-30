"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import HeroBg from "@/app/image/hero.jpg";
import RumiLandLogo from "@/components/icon/RumiLandLogo";

const Hero = () => {
    return (
        <div className="absolute inset-0 z-0">
            <div className="relative w-full h-screen flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={HeroBg} // Pastikan gambar ada di folder /public
                        alt="Hero Background"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority
                    />
                    {/* Overlay untuk efek gelap */}
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                {/* Hero Content */}
                <div className="text-center text-white px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        <span
                            className="text-green-600 uppercase tracking-widest"
                            style={{
                                textShadow: "2px 2px 2px rgba(255, 255, 255, 0.4)",
                            }}
                        >
                            Rumi Land
                        </span>
                        {/* <RumiLandLogo /> */}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-3xl mt-6 font-medium"
                        style={{
                            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.4)",
                        }}
                    >
                        <Typewriter
                            words={[
                                "Menghadirkan keindahan alam ke setiap sudut",
                                "Menyediakan layanan jasa untuk",
                                "Pembuatan taman",
                                "Pembuatan kolam renang",
                                "Pemotongan rumput",
                                "Pengangkutan puing",
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={30}
                            delaySpeed={2000}
                        />
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
