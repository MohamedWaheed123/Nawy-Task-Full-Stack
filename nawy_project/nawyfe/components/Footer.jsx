import React from 'react';
import { FaFacebook,FaInstagram,FaTwitter,FaMailBulk,FaPhone } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-indigo-500 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold">Nawy Real Estate</h4>
                        <p className="mt-1">Your trusted partner in finding the perfect home.</p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h5 className="text-md font-semibold">Contact Us</h5>
                     
                        <Link href="#" className="hover:text-indigo-300 flex items-center"> <FaMailBulk className='mr-2'/> info@nawy.com</Link>
                        <Link href="#" className="hover:text-indigo-300 flex items-center"> <FaPhone className='mr-2'/> +1 (234) 567-89</Link>
                    </div>
                    <div>
                        <h5 className="text-md font-semibold">Follow Us</h5>
                        <div className="flex space-x-4 mt-1">
                           <Link href="https://www.facebook.com/nawyrealestate" className="hover:text-indigo-300 flex items-center"> <FaFacebook className='mr-1'/> Facebook</Link>
                           <Link href="#" className="hover:text-indigo-300 flex items-center"> <FaTwitter className='mr-1'/> Twitter</Link>
                           <Link href="#" className="hover:text-indigo-300 flex items-center"> <FaInstagram className='mr-1'/> Instagrem</Link>
                       
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10">
                <p className="text-sm">© 2023 Nawy Real Estate. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;