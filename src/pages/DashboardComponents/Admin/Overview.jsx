import { Layout, Card, Statistic } from "antd";
import {
	UserOutlined,
	TeamOutlined,
	CalendarOutlined,
	DollarOutlined,
} from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const { Content } = Layout;

const Overview = () => {
	const axiosSecure = useAxiosSecure();
	const { data: stats, isLoading } = useQuery({
		queryKey: ["admin-stats"],
		queryFn: async () => {
			const result = await axiosSecure.get("/admin-stats");
			return result.data;
		},
	});

	if (isLoading) {
		return;
	}

	return (
		<Content style={{ margin: "16px 16px", backgroundColor: "#f0f2f5" }}>
			<div style={{ padding: 20, backgroundColor: "#fff", borderRadius: 8 }}>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
						gap: "16px",
					}}
				>
					<Card>
						<Statistic
							title="Total Users"
							value={stats.totalUsers}
							prefix={<UserOutlined />}
						/>
					</Card>
					<Card>
						<Statistic
							title="Active Events"
							value={stats.totalEvents}
							prefix={<CalendarOutlined />}
						/>
					</Card>
					<Card>
						<Statistic
							title="Volunteers"
							value={120}
							prefix={<TeamOutlined />}
						/>
					</Card>
					<Card>
						<Statistic
							title="Total Donations"
							value={stats.totalDonations[0].total}
							prefix={<DollarOutlined />}
							suffix="BDT"
						/>
					</Card>
				</div>
			</div>
		</Content>
	);
};

export default Overview;
