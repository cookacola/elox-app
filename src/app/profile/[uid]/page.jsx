"use client";
import React, { useEffect, useState } from "react";
import getDocument from "@/firebase/firestore/getData";

function Profile({ params }) {
	const uid = params.uid;
	const [profileData, setProfileData] = useState(null);
	const [propertyData, setPropertyData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (uid) {
			const fetchData = async () => {
				const { result, error } = await getDocument("users", uid);

				if (error) {
					console.log("Error getting document:", error);
					return;
				}

				if (result.exists()) {
					setProfileData(result.data());
				} else {
					console.log("No such document!");
				}

				setLoading(false);
			};
			fetchData();
		}
	}, [uid]);

	if (loading) {
		return <div className="text-xl text-center">Loading...</div>;
	}

	if (!profileData) {
		return <div className="text-xl text-center">No such user!</div>;
	}

	return (
		<div className="flex items-center justify-center min-h-screen py-2 bg-gray-100">
			<div className="flex flex-col p-6 m-2 bg-white rounded-lg shadow-md w-80">
				<div className="flex items-center justify-center mb-5">
					<img
						className="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full"
						src={profileData.avatar}
						alt={profileData.firstName}
					/>
				</div>
				<h1 className="mb-4 text-2xl font-bold text-center text-indigo-500">
					Hello, {profileData.firstName} {profileData.lastName}
				</h1>
				<div className="mb-3">
					<span className="font-semibold">User ID:</span> {uid}
				</div>
				<div className="mb-3">
					<span className="font-semibold">Email:</span> {profileData.email}
				</div>
				<div className="mb-3">
					<span className="font-semibold">Property Code:</span>{" "}
					{profileData.code}
				</div>
				<button className="px-4 py-2 mt-5 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700">
					Update Profile
				</button>
			</div>
		</div>
	);
}

export default Profile;
