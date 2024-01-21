import ChartChunks from "../components/ChartChunks";
import MainChart from "../components/MainChart";
import { Orders, Payments } from "../components/OrdersPayments";
import PaymentsOverview from "../components/Payments";
import leftbutton_icon from "../assets/icons/leftbutton_icon.svg";
import rightbutton_icon from "../assets/icons/rightbutton_icon.svg";
import { useState } from "react";

const Overview = () => {
	const [monthsRange, setMonthsRange] = useState<string>("1");

	const handleMonthsRange = (number: string) => {
		setMonthsRange(number);
	};

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
			<div className="md:flex md:flex-row flex-col gap-1 items-start justify-start">
				<div className="relative flex flex-col items-start justify-center bg-white py-[30px] p-[22px] md:mb-0 mb-2 mr-2 w-[100%]">
					<div className="flex items-center justify-between gap-5">
						<h1 className="text-[#4F4F4F] xl:text-[18px] text-[15px] font-bold text-left">
							Today: {day} {currentMonth} {year}
						</h1>
						<div className="absolute right-5 flex items-center justify-center gap-5">
							<select
								id="myDropdown"
								className="text-[#7F8FA4] text-[12px] border border-[#7F8FA4] rounded-md p-[10px] bg-transparent "
								name="numbers"
								value={monthsRange}
								onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
									setMonthsRange(e.target.value)
								}
							>
								<option value="1">1 Jan - 1 Jun</option>
								<option value="2">1 Jul - 1 Dec</option>
							</select>
							<div className="flex items-center justify-center gap-[13.28px]">
								<img
									src={leftbutton_icon}
									alt=""
									className="cursor-pointer"
									onClick={() => handleMonthsRange("1")}
								/>
								<img
									src={rightbutton_icon}
									alt=""
									className="cursor-pointer"
									onClick={() => handleMonthsRange("2")}
								/>
							</div>
						</div>
					</div>
					<div className="w-full">
						<MainChart range={monthsRange} />
					</div>
				</div>
				<div className="flex flex-col gap-3">
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
