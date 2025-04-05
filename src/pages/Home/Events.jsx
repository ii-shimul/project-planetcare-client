import React from 'react';

const Events = () => {
  return (
		<section className="py-16 bg-gray-100 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-center text-green-800 mb-10">
					Upcoming Events
				</h2>
				<div className="grid md:grid-cols-3 gap-6">
					{/* Map your event cards here */}
					{/* <EventCard
						title="Beach Cleanup"
						date="May 10, 2025"
						location="Cox’s Bazar"
					/> */}
				</div>
				<div className="text-center mt-8">
					<a href="/events" className="text-green-600 hover:underline">
						See All Events →
					</a>
				</div>
			</div>
		</section>
	);
};

export default Events;