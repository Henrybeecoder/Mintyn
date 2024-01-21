import { motion } from "framer-motion";

export const Orders = () => {
	return (
		<div className="orders flex flex-col gap-[11px] p-[22px] bg-white">
			<h1 className="text-[#262626] text-[14px] font-bold">Orders</h1>
			{/* ProgressBar */}
			{/* overview div */}

			<div className="relative md:w-[17rem] xs:w-[5rem] bg-[#FDC203] h-[4px] rounded-xl">
				<motion.div
					initial={{ opacity: 0, width: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }}
				>
					<div className="absolute w-[80%] left-0 h-[4px] bg-[#27AE60] rounded-l-xl" />
				</motion.div>
			</div>
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
			{/* ProgressBar */}
			<div className="relative md:w-[17rem] xs:w-[5rem] bg-[#FDC203] h-[4px] rounded-xl">
				<motion.div
					initial={{ opacity: 0, width: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }}
				>
					<div className="absolute w-[80%] left-0 h-[4px] bg-[#27AE60] rounded-l-xl" />
				</motion.div>
			</div>
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
