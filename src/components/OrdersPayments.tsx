import { ProgressBar } from "@tremor/react";
export const Orders = () => {
	return (
		<div className="orders flex flex-col gap-[11px] p-[22px] bg-white">
			<h1 className="text-[#262626] text-[14px] font-bold">Orders</h1>
			<ProgressBar value={80} color="teal" className="" />
			<p className="text-[#262626] text-[14px]">
				Pending Orders: <span className="text-[#EBC315] font-bold">20</span>
			</p>
			<p className="text-[#262626] text-[14px]">
				Reconciled Orders: <span className="text-[#27AE60] font-bold">80</span>
			</p>
			<p className="text-[#262626] text-[14px]">
				Total Orders: <span className="text-[#1860EC] font-bold">100</span>
			</p>
		</div>
	);
};

export const Payments = () => {
	return (
		<div className="payments flex flex-col gap-[11px] p-[22px] bg-white">
			<h1 className="text-[#262626] text-[14px] font-bold">Payments</h1>
			<ProgressBar value={80} color="teal" className="" />
			<p className="text-[#262626] text-[14px]">
				Unreconcilled Payments:
				<span className="text-[#EBC315] font-bold">20</span>
			</p>
			<p className="text-[#262626] text-[14px]">
				Reconciled Payments:
				<span className="text-[#27AE60] font-bold">80</span>
			</p>
			<p className="text-[#262626] text-[14px]">
				Total Payments: <span className="text-[#1860EC] font-bold">100</span>
			</p>
		</div>
	);
};
