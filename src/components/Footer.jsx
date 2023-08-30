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
        <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-8 px-12'>
          <div className='col-span-1 md:col-span-2 lg:col-span-1'>
            <div className='flex items-center mb-4'>
              <Logo className='text-gray-100 hover:text-white' />
            </div>
            <p className='text-sm text-gray-400'>
              &ldquo; Empowering Your Financial Future: Discover Prosperity with
              Investa&apos;s Secure and Innovative Investment Solutions. &rdquo;
            </p>
          </div>
          <div className='col-span-1 md:col-span-2 lg:col-span-1'>
            <h3 className='text-lg font-semibold mb-3 text-gray-200'>
              Contact Us
            </h3>
            <p className='text-sm mb-2 text-gray-400'>
              Email: contact@investa.com
            </p>
            <p className='text-sm mb-2 text-gray-400'>Phone: +123 456 7890</p>
            <p className='text-sm mb-2 text-gray-400'>
              Address: 123 Main St, City
            </p>
            <p className='text-sm mb-2 text-gray-400'>Postcode: 12345</p>
          </div>
          <div className='col-span-1 md:col-span-2 lg:col-span-1'>
            <h3 className='text-lg font-semibold mb-3'>Page Links</h3>
            <ul className='text-sm space-y-2'>
              <li className='text-gray-400'>
                <a href='#'>Home</a>
              </li>
              <li className='text-gray-400'>
                <a href='#'>About Us</a>
              </li>
              <li className='text-gray-400'>
                <a href='#'>Services</a>
              </li>
              <li className='text-gray-400'>
                <a href='#'>Contact</a>
              </li>
              <li className='text-gray-400'>
                <a href='#'>Privacy Policy</a>
              </li>
              <li className='text-gray-400'>
                <a href='#'>Terms of Use</a>
              </li>
            </ul>
          </div>
          <div className='col-span-1 md:col-span-2 lg:col-span-1'>
            <h3 className='text-lg font-semibold mb-3'>Follow Us</h3>
            <div className='flex space-x-3 text-gray-400'>
              <FaFacebook className='text-2xl' />
              <FaTwitter className='text-2xl' />
              <FaLinkedin className='text-2xl' />
              <FaInstagram className='text-2xl' />
              <FaYoutube className='text-2xl' />

              {/* Other social links */}
            </div>
          </div>
          <div className='col-span-2 lg:col-span-1'>
            <h3 className='text-lg font-semibold mb-3'>Join Our Newsletter</h3>
            <form className='flex space-x-0'>
              <input
                type='email'
                className='border rounded-l px-3 py-2 w-full focus:outline-none text-gray-500'
                placeholder='Your email'
              />
              <button
                type='submit'
                className='bg-blue-600 text-white rounded-r px-4 py-2 focus:outline-none'
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
  )
};

export default Footer;
