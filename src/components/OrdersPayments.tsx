import { ProgressBar } from "@tremor/react";
export const Orders = () => {
	return (
		<div className="orders flex flex-col">
			<h1 className="text-[#262626] text-[14px] font-bold">Orders</h1>
			<ProgressBar value={80} color="teal" className="mt-3" />
			<p className="text-[#262626]">
				Pending Orders: <span className="text-[#EBC315] font-bold">20</span>
			</p>
			<p>
				Reconciled Orders: <span className="text-[#27AE60] font-bold">80</span>
			</p>
			<p>
				Total Orders: <span className="text-[#1860EC] font-bold">100</span>
			</p>
		</div>
	);
};

export const Payments = () => {
	return (
		<div className="orders flex flex-col">
			<h1 className="text-[#262626] text-[14px] font-bold">Orders</h1>
			<ProgressBar value={80} color="teal" className="mt-3" />
			<p className="text-[#262626]">
				Unreconcilled Payments:
				<span className="text-[#EBC315] font-bold">20</span>
			</p>
			<p>
				Reconciled Payments:
				<span className="text-[#27AE60] font-bold">80</span>
			</p>
			<p>
				Total Payments: <span className="text-[#1860EC] font-bold">100</span>
			</p>
		</div>
	);
};
