"use client";

import React from "react";

const AboutPage = () => {
	return (
		<div className="p-6">
			<h1 className="mb-4 text-3xl font-bold">About Us</h1>
			<div className="space-y-4">
				<section>
					<h2 className="text-2xl font-semibold">Our Mission</h2>
					<p>
						Our mission is simple but vital - to provide hotels with the most
						secure, durable and value-for-money locking solutions. We are
						committed to helping you create a safe and secure environment for
						your guests, without breaking the bank.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold">Our Journey</h2>
					<p>
						Since our inception in 1998, we've been challenging the status quo
						and shifting the paradigm in the hotel locking solutions industry.
						We've grown steadily and securely, earning a reputation as a
						dependable provider, known for our exceptional quality and
						competitively priced products. Throughout our journey, we've forged
						successful partnerships with numerous hotels, all appreciating the
						balance of affordability and reliability our solutions bring.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold">Our Values</h2>
					<p>
						Quality, durability and affordability are the pillars that hold our
						company high. We passionately believe in delivering products that
						stand the test of time while maintaining a price point accessible to
						all. Our customers are at the heart of everything we do, and we
						strive continuously to exceed their expectations with every product
						we create.
					</p>
				</section>
			</div>
		</div>
	);
};

export default AboutPage;
