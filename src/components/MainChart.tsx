"use client";
import { AreaChart } from "@tremor/react";

const chartdata4 = [
	{
		date: "Jan",
		Running: 167,
	},
	{
		date: "Feb",
		Running: 125,
	},
	{
		date: "Mar",
		Running: 156,
	},
	{
		date: "Apr",
		Running: 165,
	},
	{
		date: "May",
		Running: 153,
	},
	{
		date: "Jun",
		Running: 124,
	},
];

const customTooltip = (props: any) => {
	const { payload, active } = props;
	if (!active || !payload) return null;
	return (
		<div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
			{payload.map((category: any, idx: number) => (
				<div key={idx} className="flex flex-1 space-x-2.5">
					<div
						className={`w-1 flex flex-col bg-${category.color}-500 rounded`}
					/>
					<div className="space-y-1">
						<p className="text-tremor-content">{category.dataKey}</p>
						<p className="font-medium text-tremor-content-emphasis">
							{category.value}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default function MainChart() {
	return (
		<>
			<AreaChart
				className="h-72 w-full mt-4"
				data={chartdata4}
				index="date"
				categories={["Running"]}
				colors={["blue"]}
				yAxisWidth={0}
				customTooltip={customTooltip}
			/>
		</>
	);
}
