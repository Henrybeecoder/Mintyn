// import { Link } from "react-router-dom";
import overview_icon from "../assets/icons/overview_icon.svg";
import allpayments_icon from "../assets/icons/allpayments_icon.svg";
import reconciledpayment_icon from "../assets/icons/reconciledpayment_icon.svg";
import unreconciledpayment_icon from "../assets/icons/unreconciledpayment_icon.svg";
import manualsettlement_icon from "../assets/icons/manualsettlement_icon.svg";
import allorders_icon from "../assets/icons/allorders_icon.svg";
import pendingorders_icon from "../assets/icons/pendingorders_icon.svg";
import reconciledorders_icon from "../assets/icons/reconciledorders_icon.svg";
import merchantprofile_icon from "../assets/icons/merchantprofile_icon.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useNav } from "../context/NavContext";

const SideBar = () => {
	const { navActive, setNavActive } = useNav();
	console.log(navActive);

	const navigate = useNavigate();
	const [active, setActive] = useState("overview");

	const handlePageRouter = (route: string, page: string) => {
		navigate(route);
		setActive(page);
	};

	return (
		<div
			className={`sidebar ${
				!navActive ? "-left-96" : "left-0"
			} lg:flex lg:static fixed -top-6 lg:py-0 py-10 bg-white z-50 flex-col gap-[32px] mt-6 h-full`}
		>
			<span
				onClick={() => setNavActive && setNavActive(false)}
				className="material-symbols-outlined material-symbols-outlined absolute top-5 right-5 lg:hidden block cursor-pointer"
			>
				close
			</span>
			<div className="px-14">
				<button className="font-bold text-[12px] px-5 w-40 py-2 bg-[#27AE60] text-white rounded-3xl">
					GENERATE INVOICE
				</button>
			</div>
			<div className="flex flex-col items-start justify-center gap-[32px] text-[11px] text-sidebargrey">
				<div className="flex flex-col gap-[15px] w-full">
					<p className="pl-5 pr-5">Main</p>
					{/* overview div */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div
							className={`${
								active == "overview"
									? "bg-[#e8f1fd] border-l-4 border-solid border-transparent border-l-[#277cf4]"
									: ""
							} flex items-center justify-start gap-[14.86px] transition duration-300 ease-in-out hover:bg-[#e8f1fd] border-l-4 border-solid border-transparent hover:border-[#277cf4]  cursor-pointer py-2 pl-5 pr-5 w-full`}
							onClick={() =>
								handlePageRouter("/dashboard/overview", "overview")
							}
						>
							{/* <img
						className=" 4px] h-[36px] top-0 left-0"
						alt="Bg row hover"
						src="image.svg"
					/> */}
							<img className="" alt="" src={overview_icon} />
							<p className="">Overview</p>
						</div>
					</motion.div>
				</div>

				{/* payments div */}
				<div className="flex flex-col gap-[15px] w-full ">
					<p className="pl-5 pr-5">Payments</p>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className="flex items-center justify-start gap-[14.86px] transition duration-300 ease-in-out hover:bg-[#e8f1fd] border-l-4 border-solid border-transparent  hover:border-[#277cf4] cursor-pointer py-1 pl-5 pr-5 w-full">
							<img className="" alt="" src={allpayments_icon} />
							<p className="">All Payments</p>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
					>
						<div className="flex items-center justify-start gap-[14.86px] transition duration-300 ease-in-out hover:bg-[#e8f1fd] border-transparent border-l-4 border-solid  hover:border-[#277cf4] cursor-pointer py-1 pl-5 pr-5 w-full">
							<img src={reconciledpayment_icon} alt="" />
							<p className="">Reconcilled Payments</p>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="flex items-center justify-start gap-[14.86px] transition duration-300 ease-in-out hover:bg-[#e8f1fd] border-transparent border-l-4 border-solid  hover:border-[#277cf4] cursor-pointer py-1 pl-5 pr-5 w-full">
							<img src={unreconciledpayment_icon} alt="" />
							<p className="">Un - Reconcilled Payments</p>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.9 }}
					>
						<div className="flex items-center justify-start gap-[14.86px] transition duration-300 ease-in-out hover:bg-[#e8f1fd] border-transparent border-l-4 hover:border-solid  hover:border-[#277cf4] cursor-pointer py-1  pl-5 pr-5 w-full">
							<img src={manualsettlement_icon} alt="" />
							<p className="">Manual Settlement</p>
						</div>
					</motion.div>
				</div>

				{/* orders div */}
				<div className="flex flex-col gap-[15px] w-full ">
					<p className="pl-5 pr-5">Orders</p>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
					>
						<div className="flex items-center justify-start gap-[14.86px] transition duration-300 ease-in-out hover:bg-[#e8f1fd] border-transparent border-l-4 hover:border-solid  hover:border-[#277cf4] cursor-pointer py-1  pl-5 pr-5 w-full">
							<img src={allorders_icon} alt="" />
							<p className="">All Orders</p>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.1 }}
					>
						<div className="flex items-center justify-start gap-[14.86px] transition duration-300 ease-in-out hover:bg-[#e8f1fd] border-transparent border-l-4 hover:border-solid  hover:border-[#277cf4] cursor-pointer py-1  pl-5 pr-5 w-full">
							<img src={pendingorders_icon} alt="" />
							<p className="">Pending Orders</p>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.2 }}
					>
						<div className="flex items-center justify-start gap-[14.86px] transition duration-300 ease-in-out hover:bg-[#e8f1fd] border-transparent border-l-4 hover:border-solid  hover:border-[#277cf4] cursor-pointer py-1  pl-5 pr-5 w-full">
							<img src={reconciledorders_icon} alt="" />
							<p className="">Reconcilled Orders</p>
						</div>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.3 }}
				>
					<div className="flex items-center justify-start gap-[14.86px] transition duration-300 ease-in-out hover:bg-[#e8f1fd] border-transparent border-l-4 hover:border-solid  hover:border-[#277cf4] cursor-pointer py-1  pl-5 pr-5 w-full">
						<img src={merchantprofile_icon} alt="" />
						<p className="">Merchant Profile</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default SideBar;
