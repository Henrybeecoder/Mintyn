import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Overview from "./pages/Overview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<div>
					<NavBar />
				</div>
				<div className="flex">
					<SideBar />
					<div className="bg-[#F7F9FB] p-[33px] w-full">
						<Routes>
							<Route index path="/" element={<Overview />} />
						</Routes>
					</div>
				</div>
			</Router>
		</div>
	);
}

export default App;
