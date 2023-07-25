"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductsPage = () => {
	// For the purpose of the example, I will use hardcoded data.
	// In a real-world application, this data could come from an API.
	const products = [
		{
			id: 1,
			name: "Digital Lock Model    1",
			type: "Digital Locks",
			imageUrl: "/images/digital-lock-1.jpg", // Replace with your actual image path
		},
		{
			id: 2,
			name: "Digital Lock Model 2",
			type: "Digital Locks",
			imageUrl: "/images/digital-lock-2.jpg", // Replace with your actual image path
		},
		{
			id: 3,
			name: "Mechanical Lock Model 1",
			type: "Mechanical Locks",
			imageUrl: "/images/mechanical-lock-1.jpg", // Replace with your actual image path
		},
		{
			id: 4,
			name: "Mechanical Lock Model 2",
			type: "Mechanical Locks",
			imageUrl: "/images/mechanical-lock-2.jpg", // Replace with your actual image path
		},
	];

	const productCategories = Array.from(
		new Set(products.map((product) => product.type))
	);

	return (
		<div className="p-6">
			<h1 className="mb-4 text-3xl font-bold">Our Products</h1>
			{productCategories.map((category) => (
				<div key={category}>
					<h2 className="mb-2 text-2xl font-semibold">{category}</h2>
					<div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
						{products
							.filter((product) => product.type === category)
							.map((product) => (
								<div key={product.id} className="p-4 border rounded-lg">
									<Image
										src={product.imageUrl}
										alt={product.name}
										className="object-cover w-full h-64 mb-4 rounded"
										width={400}
										height={400}
									/>
									<h3 className="mb-2 text-lg font-medium">{product.name}</h3>
									<Link
										href={`/products/${product.id}`}
										className="text-blue-500 hover:underline"
									>
										Learn more
									</Link>
								</div>
							))}
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductsPage;
