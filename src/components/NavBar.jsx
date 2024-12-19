import { useState, useContext } from 'react';
import { brandContext } from '../context/brandContext';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { brandName } = useContext(brandContext)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">

                <a href="#" className="text-2xl font-bold text-indigo-500">
                    {brandName}
                </a>

                <div className="hidden md:flex space-x-6">
                    <a href="#features" className="hover:text-indigo-400">
                        Features
                    </a>
                    <a href="#pricing" className="hover:text-indigo-400">
                        Pricing
                    </a>
                    <a href="#about" className="hover:text-indigo-400">
                        About
                    </a>
                    <a
                        href="#contact"
                        className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-800">
                    <a
                        href="#features"
                        className="block px-4 py-2 hover:bg-gray-700 hover:text-indigo-400"
                    >
                        Features
                    </a>
                    <a
                        href="#pricing"
                        className="block px-4 py-2 hover:bg-gray-700 hover:text-indigo-400"
                    >
                        Pricing
                    </a>
                    <a
                        href="#about"
                        className="block px-4 py-2 hover:bg-gray-700 hover:text-indigo-400"
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="block px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-center text-white rounded-lg"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
