'use client'

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import ScrollTrigger from 'react-scroll-trigger';
import Logo from './Logo';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <ScrollTrigger onEnter={() => console.log('Footer in view')}>
      <motion.footer
        className='bg-gray-800 text-white py-10'
        variants={footerVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-8 px-6'>
          <div className='col-span-1 md:col-span-2 lg:col-span-1'>
            <div className='flex items-center mb-4'>
             <Logo />
         
            </div>
            <p className='text-sm'>
              Trustworthy futuristic investment for long-term well-being.
            </p>
          </div>
          <div className='col-span-1 md:col-span-2 lg:col-span-1'>
            <h3 className='text-lg font-semibold mb-3'>Contact Us</h3>
            <p className='text-sm mb-2'>Email: contact@investa.com</p>
            <p className='text-sm mb-2'>Phone: +123 456 7890</p>
            <p className='text-sm mb-2'>Address: 123 Main St, City</p>
            <p className='text-sm mb-2'>Postcode: 12345</p>
          </div>
          <div className='col-span-1 md:col-span-2 lg:col-span-1'>
            <h3 className='text-lg font-semibold mb-3'>Page Links</h3>
            <ul className='text-sm space-y-2'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Services</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
              <li>
                <a href='#'>Terms of Use</a>
              </li>
            </ul>
          </div>
          <div className='col-span-1 md:col-span-2 lg:col-span-1'>
            <h3 className='text-lg font-semibold mb-3'>Follow Us</h3>
            <div className='flex space-x-3'>
                     <FaFacebook className="text-2xl" />
            <FaTwitter className="text-2xl" />
            <FaLinkedin className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaYoutube className="text-2xl" />

              {/* Other social links */}
            </div>
          </div>
          <div className='col-span-2 lg:col-span-1'>
            <h3 className='text-lg font-semibold mb-3'>Join Our Newsletter</h3>
            <form className='flex space-x-0'>
              <input
                type='email'
                className='border rounded-l px-3 py-2 w-full focus:outline-none'
                placeholder='Your email'
              />
              <button
                type='submit'
                className='bg-blue-500 text-white rounded-r px-4 py-2 focus:outline-none'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className='container mx-auto mt-6 text-center'>
          <hr className='border-gray-300 mb-3' />
          <p className='text-gray-400'>
            &copy; {new Date().getFullYear()} Investa. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </ScrollTrigger>
  );
};

export default Footer;
