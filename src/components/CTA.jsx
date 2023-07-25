"use client";

import React from "react";
import Link from "next/link";

const CallToAction = () => {
	return (
		<div className="p-10 rounded-md">
			<h2 className="mb-5 text-3xl font-bold">Get started with us today!</h2>
			<p className="mb-5">
				Request a quote now and learn more about our custom security solutions
				for your business.
			</p>
			<div className="flex flex-wrap gap-6">
				<Link
					href="/quote"
					className="px-6 py-3 text-blue-900 bg-blue-200 rounded hover:bg-blue-300"
				>
					Request a Quote
				</Link>
				<Link
					href="/contact"
					className="px-6 py-3 text-blue-900 bg-blue-200 rounded hover:bg-blue-300"
				>
					Contact Sales
				</Link>
			</div>
		</div>
	);
};

export default CallToAction;
