"use client";

import React from "react";
import Image from "next/image";

function Partners({ companies }) {
	return (
		<div className="p-6">
			<h2 className="mb-4 text-xl font-bold text-center md:text-2xl">
				Our Partners
			</h2>
			<div className="flex flex-wrap justify-center">
				{companies.map((company, index) => (
					<div
						key={index}
						className="flex items-center justify-center w-1/2 p-4 sm:w-1/3 md:w-1/4 lg:w-1/6"
					>
						<Image
							className="object-contain h-16"
							src={company.src}
							alt={company.alt}
							width={100}
							height={100}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Partners;
