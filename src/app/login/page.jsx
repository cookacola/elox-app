"use client";

import React, { useState } from "react";
import firebase from "../../../firebase"; // Path to your firebase config file

function LoginPage() {
	const [hotelId, setHotelId] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// Replace this part with the actual backend service that validates the HotelID
			// and returns the associated email and password.
			const response = await fetch(`/api/validateHotelId?hotelId=${hotelId}`);
			const { email, password } = await response.json();

			await firebase.auth().signInWithEmailAndPassword(email, password);
			alert("Logged in successfully!");
		} catch (error) {
			console.error(error);
			alert("Failed to log in with the provided Hotel ID.");
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-blue-900">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-sm p-6 m-4 bg-blue-800 rounded"
			>
				<div className="mb-4">
					<label className="block mb-2 text-sm font-bold text-blue-200">
						Hotel ID:
					</label>
					<input
						type="text"
						value={hotelId}
						onChange={(e) => setHotelId(e.target.value)}
						className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						type="submit"
						className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
					>
						Log in
					</button>
				</div>
			</form>
		</div>
	);
}

export default LoginPage;
