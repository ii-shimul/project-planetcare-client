import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Events from "../pages/Events/Events";
import Error from '../pages/Error/Error';

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <Error/>,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <Signup />,
			},
			{
				path: "/events",
				element: <Events/>
			}
		],
	},
]);

export default router;
