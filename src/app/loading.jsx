import React from "react";

export default function LoadingPage() {
	return (
		<div className="flex items-center justify-center min-h-screen text-2xl text-blue-500">
			<div className="w-64 h-64 ease-linear border-8 border-t-8 border-gray-200 rounded-full animate-spin loader"></div>
		</div>
	);
}
