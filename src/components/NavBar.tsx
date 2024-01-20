import search from "../assets/icons/search.svg";
import bell_icon from "../assets/icons/bell_icon.svg";
import profile_pic from "../assets/images/profile_pic.svg";

const Header = () => {
	return (
		<div className="header px-16 py-5 flex items-center justify-between shadow-xl shadow-[#EFEEF1]">
			<h1 className="text-primary text-[24px] font-black">TransMonitor</h1>
			<div className="search-div md:flex hidden items-center justify-center gap-5 w-2/4">
				<img src={search} alt="" />
				<input
					type="text"
					placeholder="Search..."
					className="outline-none placeholder:text-[#979797]"
				/>
			</div>
			<li className="md:block hidden list-none text-navgrey">Support</li>
			<li className="md:block hidden list-none text-navgrey">FAQ</li>
			<img className="md:block hidden" src={bell_icon} alt="" />
			<div className="md:flex hidden items-center justify-center gap-3">
				<div className="flex flex-col text-navgrey items-end">
					<p className="text-[10px]">Hello</p>
					<p className="text-[14px]">Oluwaleke Ojo</p>
				</div>
				<img src={profile_pic} alt="" className="rounded-3xl" />
			</div>
		</div>
	);
};

export default Header;
