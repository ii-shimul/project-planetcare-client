import { Link, NavLink } from "react-router-dom";
import { Avatar, Dropdown, Menu, Space, Button } from "antd";
import useAuth from "../../hooks/useAuth";
import {
	UserOutlined,
	DashboardOutlined,
	LogoutOutlined,
} from "@ant-design/icons";
const links = (
	<>
		<li>
			<NavLink
				to="/"
				className={"py-2 px-2.5 text-base font-medium hover:text-primary"}
			>
				Home
			</NavLink>
		</li>
		<li>
			<NavLink
				to="/events"
				className={"py-2 px-2.5 text-base font-medium hover:text-primary"}
			>
				Events
			</NavLink>
		</li>
		<li>
			<NavLink
				to="/donate"
				className={"py-2 px-2.5 text-base font-medium hover:text-primary"}
			>
				Donate
			</NavLink>
		</li>
	</>
);

const NavBar = () => {
	const { user, logOut } = useAuth();
	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: "Dashboard",
					icon: <DashboardOutlined />,
					onClick: () => {
						console.log("Navigating to Dashboard");
					},
				},
				{
					key: "2",
					label: "Profile",
					icon: <UserOutlined />,
					onClick: () => {
						console.log("Navigating to Profile");
					},
				},
				{
					key: "3",
					label: "Logout",
					icon: <LogoutOutlined />,
					onClick: logOut,
				},
			]}
		/>
	);
	return (
		<nav className="flex container mx-auto justify-between items-center py-4">
			<div>
				<h1 className="text-xl md:text-3xl font-semibold text-primary">
					PlanetCare
				</h1>
			</div>
			<div>
				<ul className="flex items-center gap-7 md:text-lg">{links}</ul>
			</div>
			<div className="flex gap-2">
				{user?.email ? (
					<Dropdown overlay={menu} trigger={["click"]}>
						<Space>
							<Avatar
								size="medium"
								style={{ backgroundColor: "#003E30", cursor: "pointer" }}
							>
								{typeof user?.displayName === "string" && user.displayName[0] ? user.displayName[0] : "U"}
							</Avatar>
						</Space>
					</Dropdown>
				) : (
					<>
						<Link to={"/login"}>
							<Button>Login</Button>
						</Link>
						<Link to={"/signup"}>
							<Button
								type="primary"
								style={{ backgroundColor: "#21764C", borderColor: "#21764C" }}
							>
								Signup
							</Button>
						</Link>
					</>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
