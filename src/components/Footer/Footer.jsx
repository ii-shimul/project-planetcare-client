import React from 'react';

const Footer = () => {
  return (
		<footer className="bg-[#1F3431] text-white py-10 flex flex-col justify-center items-center">
			<div className="max-w-6xl w-full mx-auto px-4 flex justify-around items-center ">
				<div>
					<h4 className="font-semibold text-lg">PlanetCare</h4>
					<p className="mt-2 text-sm">Together for a greener future.</p>
				</div>
				<div>
					<h4 className="font-semibold text-lg">Quick Links</h4>
					<ul className="mt-2 space-y-1 text-sm">
						<li>
							<a href="/" className="hover:underline">
								Home
							</a>
						</li>
						<li>
							<a href="/events" className="hover:underline">
								Events
							</a>
						</li>
						<li>
							<a href="/donate" className="hover:underline">
								Donate
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h4 className="font-semibold text-lg">Contact Us</h4>
					<p className="mt-2 text-sm">
						eco@greenorg.com
						<br />
						Sylhet, Bangladesh
					</p>
				</div>
			</div>
			<p className="text-center text-sm mt-6 text-gray-400">
				© 2025 EcoSync. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;