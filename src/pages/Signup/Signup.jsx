import React from "react";
import { Form, Input, Button, Typography, Card, Divider } from "antd";
import { UserOutlined, MailOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Signup = () => {
	const onFinish = (values) => {
		console.log("Received values:", values);
		// Handle signup logic here (e.g., API call)
	};

	return (
		<div className="flex justify-center items-center bg-[#f0f2f5] w-full min-h-[calc(100vh-277px)] max-sm:px-3.5">
			<Card
				style={{
					boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
				}}
				className="rounded-md p-5 max-w-lg w-full"
			>
				<div style={{ textAlign: "center", marginBottom: "24px" }}>
					<Title level={2}>Sign Up</Title>
				</div>
				<Form name="signup_form" onFinish={onFinish} layout="vertical">
					<Form.Item
						name="fullname"
						rules={[
							{ required: true, message: "Please input your full name!" },
						]}
					>
						<Input
							prefix={<UserOutlined />}
							placeholder="Full Name"
							size="large"
						/>
					</Form.Item>

					<Form.Item
						name="email"
						rules={[
							{ required: true, message: "Please input your email!" },
							{ type: "email", message: "Please enter a valid email!" },
						]}
					>
						<Input prefix={<MailOutlined />} placeholder="Email" size="large" />
					</Form.Item>

					<Form.Item
						name="password"
						rules={[
							{ required: true, message: "Please input your password!" },
							{ min: 6, message: "Password must be at least 6 characters!" },
						]}
					>
						<Input.Password
							prefix={<LockOutlined />}
							placeholder="Password"
							size="large"
						/>
					</Form.Item>

					<Form.Item
						name="confirmPassword"
						dependencies={["password"]}
						rules={[
							{ required: true, message: "Please confirm your password!" },
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue("password") === value) {
										return Promise.resolve();
									}
									return Promise.reject(new Error("Passwords do not match!"));
								},
							}),
						]}
					>
						<Input.Password
							prefix={<LockOutlined />}
							placeholder="Confirm Password"
							size="large"
						/>
					</Form.Item>

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							size="large"
							block
							style={{ backgroundColor: "#003E30", borderColor: "#003E30" }}
						>
							Sign Up
						</Button>
					</Form.Item>

					<div style={{ textAlign: "center" }}>
						<span>Already have an account? </span>
						<Link to={"/login"}>Log in</Link>
					</div>
				</Form>
        <Divider plain>or</Divider>
				<Button
					size="large"
					block
					// onClick={onGoogleLogin}
					style={{
						marginBottom: "24px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "#fff",
						borderColor: "#d9d9d9",
						color: "#000",
					}}
				>
					<GoogleOutlined
						style={{ fontSize: "18px", marginRight: "8px", color: "#4285f4" }}
					/>
					Sign up with Google
				</Button>

			</Card>
		</div>
	);
};

export default Signup;
