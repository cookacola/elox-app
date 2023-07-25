"use client";

import React, { useState } from "react";

function ContactPage() {
	const [supportName, setSupportName] = useState("");
	const [supportEmail, setSupportEmail] = useState("");
	const [supportMessage, setSupportMessage] = useState("");

	const [quoteName, setQuoteName] = useState("");
	const [quoteEmail, setQuoteEmail] = useState("");
	const [quoteDetails, setQuoteDetails] = useState("");

	const handleSupportSubmit = async (e) => {
		e.preventDefault();
		// Add the logic to submit the support form
	};

	const handleQuoteSubmit = async (e) => {
		e.preventDefault();
		// Add the logic to submit the quote form
	};

	return (
		<div className="flex flex-wrap items-center justify-center min-h-screen bg-gray-200">
			<form
				onSubmit={handleSupportSubmit}
				className="w-full max-w-sm p-6 m-4 bg-white rounded shadow-md"
			>
				<h2 className="mb-4 text-lg font-bold text-blue-900">
					Request Support
				</h2>
				{/* ... support form fields ... */}
			</form>

			<form
				onSubmit={handleQuoteSubmit}
				className="w-full max-w-sm p-6 m-4 bg-white rounded shadow-md"
			>
				<h2 className="mb-4 text-lg font-bold text-blue-900">Get a Quote</h2>
				{/* ... quote form fields ... */}
			</form>
		</div>
	);
}

export default ContactPage;
