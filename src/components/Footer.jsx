import React from 'react';
import {FaFacebook, FaGithub, FaTwitter, FaTwitch} from 'react-icons/fa';

const Footer = () => {

    return (
        <footer className='w-full bg-[#02044A] text-gray-300 py-8 px-2'>
            <div className='text-center max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
                    <div>
                        <h6 className='font-bold uppercase py-2'>Solutions</h6>
                        <ol>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Marketing</li>
                        </ol>
                    </div>
                    <div className='mb-10'>
                        <h6 className='font-bold uppercase py-2'>Solutions</h6>
                        <ol>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Marketing</li>
                        </ol>
                    </div>
                    <div>
                        <h6 className='font-bold uppercase py-2'>Solutions</h6>
                        <ol>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Marketing</li>
                        </ol>
                    </div>
                    <div className='mb-10'>
                        <h6 className='font-bold uppercase py-2'>Solutions</h6>
                        <ol>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Marketing</li>
                        </ol>
                    </div>

                <div className='col-span-2 pt-2 md:pt-2'>
                    <p className='font-bold uppercase mb-2'>Subscribe to Our Newsletter</p>
                    <p className='sm:mb-5 ss:mb-5 xs:mb-5'>The latest news, articles and resources send to your inbox
                        weekly.</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 rounded-md mb-2' type='email' placeholder='Enter email'/>
                        <button className='p-2 mb-2 bg-[00B86E] bg-green-600' type='button'>Subscribe</button>
                    </form>
                </div>

            </div>

            <div
                className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center'>
                <p>2022 CWTS, LLC, All rights reserved</p>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl gap-2'>
                    <FaFacebook/>
                    <FaGithub/>
                    <FaTwitter/>
                    <FaTwitch/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;