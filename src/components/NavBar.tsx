import search from "../assets/icons/search.svg";
import bell_icon from "../assets/icons/bell_icon.svg";
import profile_pic from "../assets/images/profile_pic.svg";
import { useNav } from "../context/NavContext";

const Header = () => {
	const { navActive, setNavActive } = useNav();
	console.log(navActive);

	return (
		<div className="header md:px-16 px-14 py-5 flex items-center justify-between shadow-xl shadow-[#EFEEF1]">
			<span
				className="material-symbols-outlined absolute left-5 lg:hidden block cursor-pointer"
				onClick={() => setNavActive && setNavActive(!navActive)}
			>
				menu
			</span>
			<h1 className="text-primary text-[24px] md:block hidden font-black font-roboto">
			Gradell 
			</h1>
			<h1 className="text-primary text-[24px] md:hidden block font-black font-roboto">
				GD
			</h1>

			<div className="search-div flex items-center justify-center gap-2 ">
				<img src={search} alt="" />
				<input
					type="text"
					placeholder="Search..."
					className="outline-none placeholder:text-[#979797] md:w-3/4 w-20"
				/>
			</div>
			<div className="flex items-center justify-center gap-3">
				<li className="md:block hidden list-none text-navgrey">Support</li>
				<li className="md:block hidden list-none text-navgrey">FAQ</li>
				<img className="" src={bell_icon} alt="" />
				<div className="flex items-center justify-center gap-3">
					<div className="sm:flex flex-col text-navgrey items-end pl-3 hidden">
						<p className="text-[10px]">Hello</p>
						<div className="flex items-center justify-center gap-1">
							<p className="text-[14px]">Oluwaleke</p>
							<span className="md:block hidden text-[14px]">Ojo</span>
						</div>
					</div>
					<img src={profile_pic} alt="" className="rounded-3xl" />
				</div>
			</div>
		</div>
	);
};

export default Header;
