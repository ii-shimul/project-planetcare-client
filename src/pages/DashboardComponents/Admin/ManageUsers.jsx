import React, { useState, useEffect } from "react";
import { Table, Button, Typography, Space, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import useAxiosSecure from "/src/hooks/useAxiosSecure";
import moment from "moment";

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

	const handleMakeAdmin = async (id) => {
		try {
			const result = await axiosSecure.patch(`/users/make-admin/${id}`);
			if (result.data.modifiedCount > 0) {
				message.success("Operation successful!");
			}
		} catch (error) {
			console.log(error);
			message.error(error.message);
		}
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
			title: "User Since",
			dataIndex: "createdAt",
			key: "createdAt",
			render: (createdAt) => moment(createdAt).format("MMMM Do, YYYY"),
		},
		{
			title: "Actions",
			key: "actions",
			render: (_, user) => (
				<Button
					type="link"
					icon={<EditOutlined />}
					onClick={() => handleMakeAdmin(user._id)}
          disabled={user.role === "Admin"}
				>
					Make Admin
				</Button>
			),
		},
	];

	return (
		<div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
			<Title level={4} style={{ marginBottom: 16, textAlign: "center" }}>
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
				scroll={{ x: 800 }}
			/>
		</div>
	);
};

export default ManageUsers;
