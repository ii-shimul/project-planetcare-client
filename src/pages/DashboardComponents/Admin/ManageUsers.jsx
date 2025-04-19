import React, { useState, useEffect } from "react";
import { Table, Button, Typography, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
import useAxiosSecure from "/src/hooks/useAxiosSecure";

const { Title } = Typography;

const ManageUsers = () => {
	const [usersData, setUsersData] = useState([]);
	const [loading, setLoading] = useState(true);
	const axiosSecure = useAxiosSecure();
	const [pagination, setPagination] = useState({
		current: 1,
		pageSize: 5,
		total: 0,
		showSizeChanger: true,
		pageSizeOptions: ["5", "10", "15"],
		showTotal: (total) => `Total ${total} users`,
	});

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setLoading(true);
				const { data } = await axiosSecure.get(
					`/users?page=${pagination.current}&limit=${pagination.pageSize}`
				);
				const dataWithKeys = data.users.map((user) => ({
					...user,
					key: user._id,
				}));
				setUsersData(dataWithKeys);
				setPagination((prev) => ({
					...prev,
					total: data.totalUsers,
				}));
			} catch (error) {
				console.error("Failed to fetch users:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, [pagination.current, pagination.pageSize, axiosSecure]);

	// Handle pagination change
	const handleTableChange = (newPagination) => {
		setPagination((prev) => ({
			...prev,
			current: newPagination.current,
			pageSize: newPagination.pageSize,
		}));
	};

	// Table columns
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			sorter: (a, b) => a.name.localeCompare(b.name),
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
			sorter: (a, b) => a.email.localeCompare(b.email),
		},
		{
			title: "Role",
			dataIndex: "role",
			key: "role",
		},
		{
			title: "Actions",
			key: "actions",
			render: (_, record) => (
				<Button
					type="link"
					icon={<EditOutlined />}
					onClick={() => console.log(`Edit user: ${record.name}`)}
				>
					Edit
				</Button>
			),
		},
	];

	return (
		<div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto">
			<Title level={4} style={{ marginBottom: 16 }}>
				Manage Users
			</Title>
			<Table
				columns={columns}
				dataSource={usersData}
				loading={loading}
				pagination={pagination}
				onChange={handleTableChange}
				bordered
				locale={{ emptyText: "No users found" }}
				className="w-full"
			/>
		</div>
	);
};

export default ManageUsers;
