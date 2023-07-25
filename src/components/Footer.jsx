"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="py-8 text-white bg-blue-900">
			<div className="container flex flex-wrap items-center justify-between px-6 mx-auto md:px-12">
				<div className="flex justify-center w-full mb-6 md:w-1/3 md:mb-0 md:justify-start">
					<h3 className="text-xl font-bold">Your Brand</h3>
				</div>
				<nav className="flex flex-wrap justify-center w-full md:w-2/3 md:justify-end">
					<Link
						href="/contact"
						className="block mt-4 text-blue-200 md:inline-block md:mt-0 md:ml-6 hover:text-white"
					>
						Contact
					</Link>
					<Link
						href="/contact"
						className="block mt-4 text-blue-200 md:inline-block md:mt-0 md:ml-6 hover:text-white"
					>
						Contact
					</Link>
					<Link
						href="/contact"
						className="block mt-4 text-blue-200 md:inline-block md:mt-0 md:ml-6 hover:text-white"
					>
						Contact
					</Link>
					<Link
						href="/contact"
						className="block mt-4 text-blue-200 md:inline-block md:mt-0 md:ml-6 hover:text-white"
					>
						Contact
					</Link>
				</nav>
				<div className="w-full mt-6 text-center md:w-1/3 md:mt-0 md:text-right">
					<p className="text-sm">
						&copy; {currentYear} Your Brand. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
