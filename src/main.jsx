import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import "@ant-design/v5-patch-for-react-19";
const queryClient = new QueryClient();
import { unstableSetRender } from "antd";

unstableSetRender((node, container) => {
	container._reactRoot ||= createRoot(container);
	const root = container._reactRoot;
	root.render(node);
	return async () => {
		await new Promise((resolve) => setTimeout(resolve, 0));
		root.unmount();
	};
});


createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router}></RouterProvider>
			</QueryClientProvider>
		</AuthProvider>
	</StrictMode>
);
