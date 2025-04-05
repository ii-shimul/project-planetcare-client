import { NavLink } from "react-router-dom";
import { Button } from "antd";
const links = (
	<>
		<li>
			<NavLink
				to="/"
				className={({ isActive }) =>
					`flex py-2 text-base font-medium text-secondary hover:text-primary lg:ml-12 lg:inline-flex ${
						isActive ? "text-2xl" : ""
					}`
				}
			>
				Home
			</NavLink>
		</li>
		<li>
			<NavLink
				to="/events"
				className={({ isActive }) =>
					`flex py-2 text-base font-medium text-secondary hover:text-primary lg:ml-12 lg:inline-flex ${
						isActive ? "text-2xl" : ""
					}`
				}
			>
				Events
			</NavLink>
		</li>
		<li>
			<NavLink
				to="/donate"
				className={({ isActive }) =>
					`flex py-2 text-base font-medium text-secondary hover:text-primary lg:ml-12 lg:inline-flex ${
						isActive ? "text-2xl" : ""
					}`
				}
			>
				Donate
			</NavLink>
		</li>
	</>
);
const NavBar = () => {
	return (
		<nav className="flex container mx-auto justify-between items-center py-4">
			<div>
				<h1 className="text-xl md:text-3xl font-semibold text-primary">
					PlanetCare
				</h1>
			</div>
			<div>
				<ul className="flex items-center gap-5 md:text-lg">
					{links}
				</ul>
			</div>
			<div className="flex gap-2">
				<Button>Login</Button>
				<Button
					type="primary"
					style={{ backgroundColor: "#21764C", borderColor: "#21764C" }}
				>
					Signup
				</Button>
			</div>
		</nav>
	);
};

export default NavBar;
