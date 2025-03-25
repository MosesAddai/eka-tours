import React from "react";

const Header = () => {
	return (
		<header className="flex items-center justify-between px-15 py-4 bg-white shadow-md">
			{/* Logo */}
			<div className="text-2xl font-bold text-blue-600">
				<span className="text-blue-500">EKA</span>{" "}
				<span className="text-gray-900">TOURS</span>
			</div>

			{/* Navigation Menu */}
			<nav className="hidden md:flex gap-10">
				<div className="space-x-10 text-gray-700 font-small font-semibold mt-2">
					<a href="#" className="hover:text-blue-500 transition">
						Home
					</a>
					<a href="#" className="hover:text-blue-500 transition">
						About Us
					</a>
					<a href="#" className="hover:text-blue-500 transition">
						Booking
					</a>
					<a href="#" className="hover:text-blue-500 transition">
						Services
					</a>
					<a href="#" className="hover:text-blue-500 transition">
						Contact Us
					</a>
				</div>
				<button className="bg-[#DF6951] hover:bg-blue-500 transition cursor-pointer text-white px-5 py-2 rounded-md shadow">
					Sign In
				</button>
			</nav>

			{/* Sign In Button */}
		</header>
	);
};

export default Header;
