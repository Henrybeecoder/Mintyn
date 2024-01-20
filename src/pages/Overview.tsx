import ChartChunks from "../components/ChartChunks";
import MainChart from "../components/MainChart";
import { Orders, Payments } from "../components/OrdersPayments";
import PaymentsOverview from "../components/Payments";
import leftbutton_icon from "../assets/icons/leftbutton_icon.svg";
import rightbutton_icon from "../assets/icons/rightbutton_icon.svg";

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
			{/* <div> */}
			<div className="flex items-center justify-between w-full">
				<div className="flex flex-col items-center justify-center bg-white p-[22px] mr-2">
					<div className="flex items-center justify-between gap-[]">
						<h1 className="text-[#4F4F4F] text-[18px] font-bold text-left">
							Today: {day} {currentMonth} {year}
						</h1>
						<div className="flex items-center justify-center gap-[44.5px]">
							<select
								id="myDropdown"
								className="text-[#7F8FA4] border border-[#7F8FA4] rounded-md p-[10px] bg-transparent "
								name="numbers"
							>
								<option value="1">1 Jan - 1 Jun</option>
								<option value="2">1 Jul - 1 Dec</option>
							</select>
							<div className="flex items-center justify-center gap-[13.28px]">
								<img src={leftbutton_icon} alt="" />
								<img src={rightbutton_icon} alt="" />
							</div>
						</div>
					</div>
					<div className="w-full">
						<MainChart />
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<Orders />
					<Payments />
				</div>
			</div>

			{/* </div> */}
			<PaymentsOverview />
		</div>
	);
};

export default Overview;
