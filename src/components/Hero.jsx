import { useContext } from "react";
import { brandContext } from "../context/brandContext";
const Hero = () => {

    const { brandName, colors } = useContext(brandContext)

    return (
        <section className="relative bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Build Your Future with {colors} <span className="text-indigo-500">{brandName}</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-300">
                        Unlock the potential of modern web development with our easy-to-use platform.
                    </p>
                    <div className="mt-8 flex justify-center md:justify-start space-x-4">
                        <a
                            href="#"
                            className="px-6 py-3 text-lg font-semibold bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-md"
                        >
                            Get Started
                        </a>
                        <a
                            href="#"
                            className="px-6 py-3 text-lg font-semibold bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-1/2 mt-12 md:mt-0">
                    <img
                        src="https://via.placeholder.com/500x400"
                        alt="Hero Illustration"
                        className="mx-auto"
                    />
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-indigo-500 to-pink-500 pointer-events-none"></div>
        </section>
    );
};

export default Hero;
