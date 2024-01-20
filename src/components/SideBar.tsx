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

const SideBar = () => {
	return (
		<div className="sidebar md:flex hidden flex-col gap-[32px] mt-6 h-screen">
			<div className="px-14">
				<button className="font-bold text-[12px] px-5 py-2 bg-[#27AE60] text-white rounded-3xl">
					GENERATE INVOICE
				</button>
			</div>
			<div className="flex flex-col items-start justify-center gap-[32px] text-[11px] px-16 text-sidebargrey">
				<div className="flex flex-col gap-[15px]">
					<p className="">Main</p>
					{/* overview div */}
					<div className="flex items-center justify-start gap-[14.86px]">
						{/* <img
						className=" 4px] h-[36px] top-0 left-0"
						alt="Bg row hover"
						src="image.svg"
					/> */}
						<img className="" alt="" src={overview_icon} />
						<p className="">Overview</p>
					</div>
				</div>

				{/* payments div */}
				<div className="flex flex-col gap-[15px]">
					<p className="">Payments</p>
					<div className="flex items-center justify-start gap-[14.86px]">
						<img className="" alt="" src={allpayments_icon} />
						<p className="">All Payments</p>
					</div>
					<div className="flex items-center justify-start gap-[14.86px]">
						<img src={reconciledpayment_icon} alt="" />
						<p className="">Reconcilled Payments</p>
					</div>
					<div className="flex items-center justify-start gap-[14.86px]">
						<img src={unreconciledpayment_icon} alt="" />
						<p className="">Un - Reconcilled Payments</p>
					</div>
					<div className="flex items-center justify-start gap-[14.86px]">
						<img src={manualsettlement_icon} alt="" />
						<p className="">Manual Settlement</p>
					</div>
				</div>

				{/* orders div */}
				<div className="flex flex-col gap-[15px]">
					<p className="">Orders</p>

					<div className="flex items-center justify-start gap-[14.86px]">
						<img src={allorders_icon} alt="" />
						<p className="">All Orders</p>
					</div>
					<div className="flex items-center justify-start gap-[14.86px]">
						<img src={pendingorders_icon} alt="" />

						<p className="">Pending Orders</p>
					</div>
					<div className="flex items-center justify-start gap-[14.86px]">
						<img src={reconciledorders_icon} alt="" />
						<p className="">Reconcilled Orders</p>
					</div>
				</div>
				<div className="flex items-center justify-start gap-[14.86px]">
					<img src={merchantprofile_icon} alt="" />
					<p className="">Merchant Profile</p>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
