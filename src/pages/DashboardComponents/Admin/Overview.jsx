import {
	Layout,
	Card,
	Statistic,
} from "antd";
import {
	UserOutlined,
	TeamOutlined,
	CalendarOutlined,
	DollarOutlined,
} from "@ant-design/icons";
const { Content } = Layout;

const Overview = () => {
	return (
		<Content style={{ margin: "24px 16px", backgroundColor: "#f0f2f5" }}>
			<div style={{ padding: 24, backgroundColor: "#fff", borderRadius: 8 }}>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
						gap: "16px",
						marginBottom: "24px",
					}}
				>
					<Card bordered>
						<Statistic
							title="Total Users"
							value={150}
							prefix={<UserOutlined />}
						/>
					</Card>
					<Card bordered>
						<Statistic
							title="Active Events"
							value={5}
							prefix={<CalendarOutlined />}
						/>
					</Card>
					<Card bordered>
						<Statistic
							title="Volunteers"
							value={120}
							prefix={<TeamOutlined />}
						/>
					</Card>
					<Card bordered>
						<Statistic
							title="Total Donations"
							value={12000}
							prefix={<DollarOutlined />}
							suffix="USD"
						/>
					</Card>
				</div>
			</div>
		</Content>
	);
};

export default Overview;
