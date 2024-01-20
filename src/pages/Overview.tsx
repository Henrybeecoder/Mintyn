import ChartChunks from "../components/ChartChunks";
import MainChart from "../components/MainChart";
import { Orders, Payments } from "../components/OrdersPayments";

const Overview = () => {
	const day = new Date().getDate();
	const year = new Date().getFullYear();

	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const currentMonth = months[new Date().getMonth()];
	console.log(currentMonth); // Outputs the abbreviation for the current month (e.g., "Jan")

	return (
		<div className="overview bg-[#F7F9FB] flex flex-col gap-[33px]">
			<ChartChunks />
			<div>
				<div className="flex items-center justify-around">
					<div>
						<h1 className="text-[#4F4F4F] text-[18px] font-bold text-left">
							Today: {day} {currentMonth} {year}
						</h1>

						<MainChart />
					</div>
					<div className="flex flex-col">
						<Orders />
						<Payments />
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Overview;
