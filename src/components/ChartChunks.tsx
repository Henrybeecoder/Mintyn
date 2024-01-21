// import { Line } from "react-chartjs-2";
// import {
// 	Chart as ChartJS,
// 	LineElement,
// 	CategoryScale,
// 	LinearScale,
// 	Tooltip,
// 	Legend,
// 	PointElement,
// } from "chart.js";
// ChartJS.register(
// 	LineElement,
// 	CategoryScale,
// 	LinearScale,
// 	Tooltip,
// 	Legend,
// 	PointElement
// );
import { chartChunksData } from "../data/chartChunksData";

import { SparkAreaChart } from "@tremor/react";
import { chartChunkDataInterface } from "../interfaces/data.interfaces";


const chartdata = [
	{
		month: "Jan",
		Performance: 600,
	},
	{
		month: "Feb",
		Performance: 100,
	},
	{
		month: "Mar",
		Performance: 250,
	},
	{
		month: "Apr",
		Performance: 600,
	},
	{
		month: "May",
		Performance: 200,
	},
	{
		month: "June",
		Performance: 1000,
	},
	{
		month: "July",
		Performance: 1200,
	},
];

const ChartChunks = () => {
	return (
		<div className="chart-chunks grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[9px]">
			{chartChunksData.map((data: chartChunkDataInterface, index: number) => (
			
				<div
					key={index}
					className="flex items-center justify-center p-5 gap-[15px] bg-white rounded"
				>
					<div className="flex flex-col items-start">
						<p className="text-[10px] text-overviewgrey">{data.title}</p>
						<p className="text-[18px] text-overviewblack">{data.amount}</p>
					</div>
					<div className="">
						<SparkAreaChart
							data={chartdata}
							categories={["Performance"]}
							index={"month"}
							colors={["blue", "#ffcc33"]}
							className="h-7 w-20"
						/>
					</div>
				</div>
			
			))}
		</div>
	);
};

export default ChartChunks;
