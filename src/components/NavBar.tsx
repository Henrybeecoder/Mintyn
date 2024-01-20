import search from "../assets/icons/search.svg";
import bell_icon from "../assets/icons/bell_icon.svg";
import profile_pic from "../assets/images/profile_pic.svg";

import { motion } from "framer-motion"

const Header = () => {
	return (
		<div className="header px-16 py-5 flex items-center justify-between shadow-xl shadow-[#EFEEF1]">
				<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
			<h1 className="text-primary text-[24px] font-black font-roboto font-bold">TransMonitor</h1>
			</motion.div>
			
		
			<div className="search-div md:flex hidden items-center justify-center gap-5 w-2/4">
			<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
				<img src={search} alt="" />
				</motion.div>
				<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
				<input
					type="text"
					placeholder="Search..."
					className="outline-none placeholder:text-[#979797]"
				/>
			</motion.div>
			</div>
			<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
			<li className="md:block hidden list-none text-navgrey ">Support</li>
			</motion.div>
			<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
			<li className="md:block hidden list-none text-navgrey">FAQ</li>
			</motion.div>
			<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
			<img className="md:block hidden" src={bell_icon} alt="" />
			</motion.div>
			<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
			<div className="md:flex hidden items-center justify-center gap-3">
				<div className="flex flex-col text-navgrey items-end">
					<p className="text-[10px]">Hello</p>
					<p className="text-[14px]">Oluwaleke Ojo</p>
				</div>
				<img src={profile_pic} alt="" className="rounded-3xl" />
			</div>
			</motion.div>
		</div>
	);
};

export default Header;
