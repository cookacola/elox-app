"use client";

import React from "react";
import Image from "next/image";

function Banner({ imageUrl, altText, description }) {
	return (
		<div class="bg-blue-900 text-white py-16 px-8">
			<div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
				<div class="w-full md:w-1/2">
					<h2 class="text-4xl mb-2">Bluetooth Locks</h2>
					<h1 class="text-5xl mb-4">
						For the next generation of intelligent security devices.
					</h1>
					<p class="mb-4">
						Elevate security and guest satisfaction with our cutting-edge
						Bluetooth locks. Bid farewell to traditional keys and grant guests
						access to their rooms from the comfort of their smartphones. Our
						technology not only strengthens security but also ensures a smooth,
						contactless check-in/check-out process.
					</p>
					<div class="flex space-x-4">
						<a
							href="https://www.mongodb.com/cloud/atlas/register"
							class="py-2 px-4 bg-blue-500 text-white rounded"
						>
							Start Now
						</a>
						<a
							href="https://www.mongodb.com/use-cases/artificial-intelligence"
							class="py-2 px-4 bg-blue-300 text-white rounded"
						>
							Learn More
						</a>
					</div>
				</div>
				<div class="w-full md:w-1/2 mt-8 md:mt-0"></div>
			</div>
		</div>
	);
}

export default Banner;
