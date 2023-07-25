"use client";

import React from "react";

const Support = () => {
	return (
		<div className="px-8 py-12 rounded-lg shadow-lg">
			<h2 className="mb-4 text-3xl font-semibold">Need Help?</h2>
			<p className="mb-6 text-lg">
				Our dedicated support team is here to help you 24/7. If you have any
				problems or questions, don not hesitate to contact us.
			</p>
			<div className="flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="w-8 h-8 mr-2 text-blue-200"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M14 9.5V5a2 2 0 00-2-2v0a2 2 0 00-2 2v4.5m6 2V11m-6 0v0a2 2 0 014 0v0m-4 0v4.5a2 2 0 002 2v0a2 2 0 002-2V11m-4 0h4"
					/>
				</svg>
				<span className="text-xl font-bold">+1 800 123 4567</span>
			</div>
			<p className="mt-6 text-lg">
				You can also email us at support@yourcompany.com or use the chat feature
				on our website for real-time assistance.
			</p>
		</div>
	);
};

export default Support;
