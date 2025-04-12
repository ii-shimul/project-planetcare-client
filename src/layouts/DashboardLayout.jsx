import React, { useState } from "react";
import {
	Layout,
	Menu,
	Table,
	Button,
	Typography,
} from "antd";
import {
	UserOutlined,
	TeamOutlined,
	CalendarOutlined,
	DollarOutlined,
	BarChartOutlined,
	EditOutlined,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const DashboardLayout = () => {
	const [selectedMenu, setSelectedMenu] = useState("overview");

	// Sample data for the table
	const usersData = [
		{
			key: "1",
			name: "Alice Smith",
			email: "alice@example.com",
			role: "admin",
		},
		{
			key: "2",
			name: "Bob Johnson",
			email: "bob@example.com",
			role: "volunteer",
		},
		{
			key: "3",
			name: "Cind Williams",
			email: "cind@example.com",
			role: "donor",
		},
	];

	// Table columns
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Role",
			dataIndex: "role",
			key: "role",
		},
		{
			title: "Actions",
			key: "actions",
			render: () => (
				<Button
					type="link"
					icon={<EditOutlined />}
					onClick={() => console.log("Edit user")}
				>
					Edit
				</Button>
			),
		},
	];

	// Sidebar menu items
	const menuItems = [
		{ key: "overview", icon: <UserOutlined />, label: "Overview" },
		{ key: "users", icon: <TeamOutlined />, label: "Manage Users" },
		{ key: "events", icon: <CalendarOutlined />, label: "Event Management" },
		{ key: "donations", icon: <DollarOutlined />, label: "Donations" },
		{
			key: "reports",
			icon: <BarChartOutlined />,
			label: "Reports & Analytics",
		},
	];

	return (
		<Layout style={{ minHeight: "100vh" }}>
			{/* Sidebar */}
			<Sider width={200} style={{ backgroundColor: "#003E30" }}>
				<div style={{ padding: "16px", textAlign: "center" }}>
					<Title level={4} style={{ color: "#fff", margin: 0 }}>
						Admin Dashboard
					</Title>
				</div>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["overview"]}
					items={menuItems}
					onClick={({ key }) => setSelectedMenu(key)}
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
						{menuItems.find((item) => item.key === selectedMenu)?.label}
					</Title>
				</Header>

				<Content style={{ margin: "24px 16px", backgroundColor: "#f0f2f5" }}>
					<div
						style={{ padding: 24, backgroundColor: "#fff", borderRadius: 8 }}
					>
            <Outlet></Outlet>
						{/* Users Table */}
						{selectedMenu === "users" && (
							<>
								<Title level={4} style={{ marginBottom: 16 }}>
									Manage Users
								</Title>
								<Table
									columns={columns}
									dataSource={usersData}
									pagination={false}
									bordered
								/>
							</>
						)}
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default DashboardLayout;
