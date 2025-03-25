import React from "react";
import heroBg from "../assets/images/Canoonbackground.png";

const Hero = () => {
	return (
		<section className="relative h-[80vh] flex items-center justify-center text-center text-white">
			{/* Background Image (You will insert your own image in the class below) */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage: `url(${heroBg})`, // Replace with your image path
				}}>
				{/* Dark Overlay */}
				<div className="absolute inset-0 bg-black/80"></div>

				{/* Ghana Flag Overlay (You will insert your own flag image) */}
				<div
					className="absolute inset-0 bg-center bg-no-repeat opacity-30"
					style={{
						backgroundImage: "url('/path-to-your-ghana-flag.png')", // Replace with your Ghana flag image
						backgroundSize: "50%", // Adjust flag size
						backgroundPosition: "center",
					}}></div>
			</div>

			{/* Hero Content */}
			<div className="relative z-10 max-w-3xl px-4">
				<p className="text-lg mt-2 text-gray-300">
					START YOUR JOURNEY HERE WITH US
				</p>
				<h1 className="text-5xl font-bold">EKA TOURS</h1>
				<p className="text-lg mt-2 italic text-gray-300">
					Feel The Ghanaian Experience
				</p>
			</div>
		</section>
	);
};

export default Hero;
