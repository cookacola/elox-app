"use client";

import React from "react";
import Image from "next/image";

function Banner({ imageUrl, altText, description }) {
	return (
		<div className="flex flex-wrap p-6 text-white bg-blue-900 md:flex-nowrap">
			<div className="flex items-center justify-center w-full md:w-1/2">
				<Image
					className="object-cover w-3/4 rounded h-3/4"
					src={imageUrl}
					alt={altText}
					width={500}
					height={200}
				/>
			</div>
			<div className="flex items-center justify-center w-full p-4 text-center md:w-1/2 md:justify-start md:text-left">
				<p className="text-lg md:text-xl">{description}</p>
			</div>
		</div>
	);
}

export default Banner;
