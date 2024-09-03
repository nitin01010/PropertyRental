import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">About Us</h2>
                        <p className="text-gray-400 ">
                            We offer the best property rental solutions. Our team is <br /> dedicated to helping you find your <br /> dream home with ease and efficiency.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                        <ul className="text-gray-400">
                            <li><a href="#home" className="  hover:text-white">Home</a></li>
                            <li><a href="#properties" className="  hover:text-white">Properties</a></li>
                            <li><a href="#about" className="  hover:text-white">About Us</a></li>
                            <li><a href="#contact" className="  hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                        <p className="text-gray-400 mb-2">123 Rental Street, City, Country</p>
                        <p className="text-gray-400 mb-2">Email: <a href="mailto:info@rentalproperty.com" className="hover:text-white">info@rentalproperty.com</a></p>
                        <p className="text-gray-400">Phone: <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a></p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-gray-400 text-sm">© 2024 Property Rental. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer