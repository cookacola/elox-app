"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import signIn from "@/firebase/signin";

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { error } = await signIn(email, password);

		if (error) {
			console.error(error);
			alert("Failed to log in with the provided email and password.");
		} else {
			router.push(`/profile/${uid}`);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-white">
			<div className="mb-8">
				<Image
					src="/eloxlogo.webp" // Path to your logo
					alt="Logo"
					width={100} // Adjust these values accordingly
					height={100}
				/>
			</div>
			<h2 className="mb-2 text-2xl font-bold text-blue-900">
				Log in to your account
			</h2>
			<span className="mb-4 text-gray-500">
				Dont have an account?{" "}
				<a href="/register" className="text-blue-500 underline">
					Sign Up
				</a>
			</span>
			<span className="mb-4 text-gray-500">Or with email and password</span>
			<form onSubmit={handleSubmit} className="flex flex-col">
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="p-2 mb-4 text-gray-700 border border-gray-300 rounded"
					placeholder="Email Address"
					required
				/>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="p-2 mb-4 text-gray-700 border border-gray-300 rounded"
					placeholder="Password"
					required
				/>
				<button
					type="submit"
					className="px-4 py-2 text-white bg-blue-700 rounded shadow"
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default LoginPage;
