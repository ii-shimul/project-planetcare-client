import React from "react";
import { Layout, Menu, Typography } from "antd";
import {
	UserOutlined,
	TeamOutlined,
	CalendarOutlined,
	DollarOutlined,
	BarChartOutlined,
} from "@ant-design/icons";
import {
	BrowserRouter as Router,
	Link,
	useLocation,
	Outlet,
} from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const DashboardLayout = () => {
	const location = useLocation();

	const pathToKey = {
		"/dashboard": "overview",
		"/dashboard/manage-users": "users",
		"/dashboard/manage-events": "events",
		"/dashboard/donations": "donations",
		"/dashboard/reports": "reports",
	};

	const selectedKey = pathToKey[location.pathname] || "overview";

	const menuItems = [
		{
			key: "overview",
			icon: <UserOutlined />,
			label: <Link to="/dashboard">Overview</Link>,
		},
		{
			key: "users",
			icon: <TeamOutlined />,
			label: <Link to="/dashboard/manage-users">Manage Users</Link>,
		},
		{
			key: "events",
			icon: <CalendarOutlined />,
			label: <Link to="/dashboard/manage-events">Event Management</Link>,
		},
		{
			key: "donations",
			icon: <DollarOutlined />,
			label: <Link to="/dashboard/donations">Donations</Link>,
		},
		{
			key: "reports",
			icon: <BarChartOutlined />,
			label: <Link to="/dashboard/reports">Reports & Analytics</Link>,
		},
	];

	return (
		<Layout style={{ minHeight: "100vh" }}>
			{/* Sidebar */}
			<Sider width={200} style={{ backgroundColor: "#003E30" }}>
				<div style={{ padding: "16px", textAlign: "center" }}>
					<Title level={4} style={{ color: "#fff", margin: 0 }}>
					Dashboard
					</Title>
				</div>
				<Menu
					theme="dark"
					mode="inline"
					selectedKeys={[selectedKey]}
					items={menuItems}
					style={{ backgroundColor: "#003E30" }}
				/>
			</Sider>

			<Layout>
				{/* Header */}
				<Header
					style={{
						backgroundColor: "#fff",
						padding: "0 16px",
						borderBottom: "1px solid #f0f0f0",
					}}
				>
					<Title level={3} style={{ margin: 0, lineHeight: "64px" }}>
						{
							menuItems.find((item) => item.key === selectedKey)?.label.props
								.children
						}
					</Title>
				</Header>

				{/* Content */}
				<Content style={{ margin: "24px 16px", backgroundColor: "#f0f2f5" }}>
					<div
						style={{ padding: 24, backgroundColor: "#fff", borderRadius: 8 }}
					>
						<Outlet />
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default DashboardLayout;
