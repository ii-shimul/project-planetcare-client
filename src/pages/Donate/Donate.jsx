const Donate = () => {

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="bg-gray-50">
			{/* Header */}
			<div className="bg-green-700 text-white py-20 px-4 text-center">
				<h1 className="text-5xl font-bold">💚 Support Our Mission</h1>
				<p className="mt-4 text-lg max-w-2xl mx-auto">
					Your contribution helps us organize events, spread awareness, and take
					direct action for the planet.
				</p>
			</div>

			{/* Donation Form */}
			<div className="py-16 px-4 max-w-4xl mx-auto">
				<h2 className="text-2xl font-bold text-green-800 mb-8 text-center">
					Make a Donation
				</h2>
				<form
					onSubmit={handleSubmit}
					className="bg-white p-8 shadow-md rounded-xl space-y-6"
				>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Full Name
						</label>
						<input
							type="text"
							name="name"
							required
							className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="email"
							name="email"
							required
							className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Amount (BDT)
						</label>
						<input
							type="number"
							name="amount"
							required
							className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
							min="1"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Message (Optional)
						</label>
						<textarea
							name="message"
							rows="3"
							className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
							placeholder="Write a message..."
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
					>
						Donate Now
					</button>
				</form>
			</div>

			{/* Impact Section */}
			<div className="bg-white py-12 px-4 max-w-5xl mx-auto text-center">
				<h2 className="text-3xl font-bold text-green-800 mb-6">
					Your Donation Makes a Difference
				</h2>
				<div className="grid md:grid-cols-3 gap-6 text-left">
					<div className="bg-gray-100 p-6 rounded-lg shadow-sm">
						<h3 className="font-semibold text-green-700">🌳 Plant Trees</h3>
						<p className="text-gray-600 mt-2">
							Every $5 helps us plant and nurture one tree in a deforested area.
						</p>
					</div>
					<div className="bg-gray-100 p-6 rounded-lg shadow-sm">
						<h3 className="font-semibold text-green-700">
							🧹 Organize Cleanups
						</h3>
						<p className="text-gray-600 mt-2">
							Support beach and river clean-up drives across Bangladesh.
						</p>
					</div>
					<div className="bg-gray-100 p-6 rounded-lg shadow-sm">
						<h3 className="font-semibold text-green-700">
							📢 Spread Awareness
						</h3>
						<p className="text-gray-600 mt-2">
							Fund campaigns that educate youth about climate change.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Donate;
