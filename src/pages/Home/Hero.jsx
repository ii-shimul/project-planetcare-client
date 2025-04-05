import React from "react";
import hero from "../../assets/hero.jpg";

const Hero = () => {
	return (
		<section
			style={{ backgroundImage: `url(${hero})` }}
			className="md:min-h-[calc(100vh-300px)] bg-center bg-cover relative flex items-center justify-center"
		>
			<div className="absolute inset-0 bg-black opacity-50 z-0"></div>

			<div className="relative z-10 w-full text-center flex flex-col items-center justify-center px-4 py-12">
				<h1 className="text-4xl md:text-5xl font-bold text-white">
					Join the Movement to Save the Planet
				</h1>
				<p className="mt-4 text-gray-100 text-lg max-w-2xl">
					Empowering communities through sustainable actions.
				</p>
				<div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
					<a
						href="/events"
						className="bg-[#003E30] text-white px-6 py-2 rounded-xl hover:bg-green-700 transition-colors"
					>
						Explore Events
					</a>
					<a
						href="/donate"
						className="border border-green-600 text-green-600 px-6 py-2 rounded-xl bg-green-100 hover:bg-white hover:text-green-700 transition-colors"
					>
						Donate Now
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
