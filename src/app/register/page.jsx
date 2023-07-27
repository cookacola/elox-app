"use client";
import React from "react";
import signUp from "@/firebase/signup";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Page() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [propertyCode, setPropertyCode] = React.useState("");
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [errorMessage, setErrorMessage] = React.useState("");
	const router = useRouter();

	const handleForm = async (event) => {
		event.preventDefault();

		const { result: user, error } = await signUp(
			firstName,
			lastName,
			email,
			password,
			propertyCode
		);

		if (error) {
			setErrorMessage("Invalid Property Code");
			return console.log(error);
		}

		// else successful
		console.log(result);

		if (error) {
			return console.log(error);
		}
		return router.push([`/profile/${user.uid}`]);
	};

	return (
		<div className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<div className="flex justify-center mb-8">
					<Image
						src="/eloxlogo.webp" // Path to your logo
						alt="Logo"
						width={100} // Adjust these values accordingly
						height={100}
					/>
				</div>
				<div>
					<h1 className="mt-6 text-3xl font-extrabold text-center text-blue-900">
						Sign up
					</h1>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleForm}>
					<div>
						<label htmlFor="property-code" className="sr-only">
							Property Code
						</label>
						<input
							onChange={(e) => setPropertyCode(e.target.value)}
							required
							type="text"
							id="property-code"
							className="relative block w-full px-3 py-2 mb-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
							placeholder="Property Code"
						/>
					</div>
					<div>
						<div className="flex flex-row justify-between gap-2 mb-4">
							<label htmlFor="first-name" className="sr-only">
								First Name
							</label>
							<input
								onChange={(e) => setFirstName(e.target.value)}
								required
								type="text"
								id="first-name"
								className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								placeholder="First Name"
							/>
							<label htmlFor="last-name" className="sr-only">
								Last Name
							</label>
							<input
								onChange={(e) => setLastName(e.target.value)}
								required
								type="text"
								id="last-name"
								className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								placeholder="Last Name"
							/>
						</div>
						<label htmlFor="email" className="sr-only">
							Email address
						</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							required
							type="email"
							id="email"
							className="relative block w-full px-3 py-2 mb-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
							placeholder="example@mail.com"
						/>
					</div>
					<div>
						<label htmlFor="password" className="sr-only">
							Password
						</label>
						<input
							onChange={(e) => setPassword(e.target.value)}
							required
							type="password"
							id="password"
							className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
							placeholder="password"
						/>
					</div>

					{errorMessage && (
						<div className="alert alert-danger">{errorMessage}</div>
					)}

					<div>
						<button
							type="submit"
							className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Sign up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Page;
