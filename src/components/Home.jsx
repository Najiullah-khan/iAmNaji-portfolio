import React, { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import { motion } from "framer-motion";
import Background from './Background';
import Footer from './Footer';
import mypic from '../assets/mypic.png';

const Home = () => {

	const ref = useRef(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current < name.length) {
				ref.current++;
				setText((prevText) => prevText + name[ref.current - 1]);
			}
		}, 500);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='area relative z-0 bg-black w-screen h-screen'>
			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>

			<div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
				<div className='text-container pt-4 h-36  rounded-3xl'>
					<h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>
						Hi, I'm&nbsp;<span className='text-yellow-200 font-extrabold'>{text}</span>
					</h1>
					<p className='mt-3 text-xl'> Passionate about scalable web and mobile apps with React and React Native. </p> <p className='mt-3 text-xl'> Dedicated to advancing my skills with cutting-edge technologies. </p> <p className='mt-3 text-xl'> Focused on integrating AI to create innovative solutions. </p>
				</div>
			</div>

			{/* Add the image as a background on the right */}
			<div className="absolute w-auto bottom-0 right-0  h-auto z-[-1]">
				<img
					src={mypic}
					alt="Your Profile"
					className="h-full w-full object-cover opacity-100"
				/>
			</div>

			<Footer />
		</div>
	);
}

export default Home;
