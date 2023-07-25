import Banner from "@/components/Banner";
import CallToAction from "@/components/CTA";
import Partners from "@/components/Partners";
import Support from "@/components/Support";
import React from "react";

function Home() {
	return (
		<div>
			<Banner
				imageUrl="https://picsum.photos/800/600"
				description="Unlock seamless security with our innovative Fingerprint Sensing Lock. Crafted with state-of-the-art biometric technology, this lock ensures ultimate safety and ease of access, offering an unparalleled level of security for your property. Forget about keeping track of keys or remembering complex codes - your fingerprint is your key. Engineered for reliability, our lock provides fast and accurate recognition for a smooth and secure entry. Enhance your hotel security with our Fingerprint Sensing Lock - because your peace of mind is our priority."
			/>
			<Partners
				companies={[
					{ src: "/path/to/logo1.png", alt: "Company 1" },
					{ src: "/path/to/logo2.png", alt: "Company 2" },
					{ src: "/path/to/logo3.png", alt: "Company 3" },
					// More companies here...
				]}
			/>
			<CallToAction />
			<Support />
		</div>
	);
}

export default Home;
