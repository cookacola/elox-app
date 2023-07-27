"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
import signOutUser from "@/firebase/signout";

function SignOutButton() {
	return <button onClick={() => signOutUser()}>Sign Out</button>;
}

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { user } = useAuthContext();
	return (
		<header className="text-white bg-blue-900">
			<nav className="container flex flex-wrap items-center justify-between p-5 mx-auto">
				<div className="text-2xl font-bold">Elox</div>
				<button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-6 h-6 text-white"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				<div
					className={`w-full lg:w-auto lg:flex ${
						isOpen ? "" : "hidden"
					} lg:block`}
				>
					<div className="space-y-2 lg:flex lg:items-center lg:space-x-4 lg:space-y-0">
						<Link
							href="/"
							className="block px-3 py-1 text-blue-200 hover:text-white"
						>
							Home
						</Link>
						<Link
							href="/about"
							className="block px-3 py-1 text-blue-200 hover:text-white"
						>
							About
						</Link>
						<Link
							href="/products"
							className="block px-3 py-1 text-blue-200 hover:text-white"
						>
							Products
						</Link>
						<Link
							href="/contact"
							className="block px-3 py-1 text-blue-200 hover:text-white"
						>
							Contact
						</Link>
						{user ? (
							<>
								<Link
									href={`/profile/${user.uid}`}
									className="inline-block px-4 py-2 text-white rounded cursor-pointer hover:bg-blue-700"
								>
									Profile
								</Link>
								<SignOutButton />
							</>
						) : (
							<Link
								href="/login"
								className="inline-block px-4 py-2 font-bold text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-700"
							>
								Login
							</Link>
						)}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
