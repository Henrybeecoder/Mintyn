"use client";
import search from "../assets/icons/search.svg";
import { productsData } from "../data/productsData";
import { productsDataInterface } from "../interfaces/data.interfaces";
import vw_icon from "../assets/icons/vw_icon.svg";
import arrowdown_icon from "../assets/icons/arrowdown_icon.svg";
import { useEffect, useState } from "react";
// import { Select, SelectItem } from "@tremor/react";

// import { Dropdown } from "flowbite-react";

const PaymentsOverview = () => {
	const [optionValue, setOptionValue] = useState<number>(20);
	const [productsArray, setProductsArray] = useState<productsDataInterface[]>(
		[]
	);

	const [statusValue, setStatusValue] = useState("");
	console.log(optionValue);

	function handleOptionValue(e: React.ChangeEvent<HTMLSelectElement>) {
		const value = parseInt(e.target.value, 10);

		setOptionValue((prevValue) => {
			// Create a new array with the selected number of items
			let selectedProducts: productsDataInterface[] = [];

			if (value === 20) {
				selectedProducts = productsData.slice(0, prevValue);
			} else if (value === 40) {
				selectedProducts = productsData.slice(prevValue, value);
			}

			setProductsArray(selectedProducts);

			// Return the new value for optionValue
			return value;
		});
	}

	function handlePageOne() {
		setOptionValue(20);
		// Create a new array with the selected number of items
		let selectedProducts: productsDataInterface[] = [];

		selectedProducts = productsData.slice(0, 20);

		setProductsArray(selectedProducts);

		// Return the new value for optionValue
	}
	function handlePageTwo() {
		setOptionValue(40);
		// Create a new array with the selected number of items
		let selectedProducts: productsDataInterface[] = [];

		selectedProducts = productsData.slice(20, 40);

		setProductsArray(selectedProducts);
	}

	function handleStatusValue(e: React.ChangeEvent<HTMLSelectElement>) {
		const selectedStatus = e.target.value;

		setStatusValue(selectedStatus);

		let filteredData: productsDataInterface[] = [];

		if (selectedStatus !== "All") {
			filteredData = productsData.filter(
				(data: productsDataInterface) => data.status === selectedStatus
			);
		} else {
			// If "All" is selected, show the entire original data
			filteredData = productsData;
		}

		setProductsArray(filteredData);
	}

	useEffect(() => {
		handleOptionValue({
			target: { value: optionValue.toString() },
		} as React.ChangeEvent<HTMLSelectElement>);

		handleStatusValue({
			target: { value: statusValue },
		} as React.ChangeEvent<HTMLSelectElement>);
	}, []);

	return (
		<div className="payments text-[13px]">
			<h1 className="text-[#262626] text-[36px]">Payments</h1>
			<div className="flex items-center justify-between gap-3 mt-[17px] py-1">
				<p>Showing</p>
				<div className="flex items-center justify-center gap-[13px]">
					<select
						id="myDropdown"
						className="text-[#1875F0] bg-transparent p-[8px]"
						name="numbers"
						onChange={handleOptionValue}
						value={optionValue.toString()}
					>
						<option value="20">20</option>
						<option value="40">40</option>
					</select>
					<p>out of 500 payments</p>
				</div>
				<div className="flex items-center justify-center bg-[#F7F9FB]">
					<img src={search} alt="" className="-mr-4 mb-1 z-30 h-3" />
					<input
						type="text"
						placeholder="Search payments"
						className="outline-none border-b-2 px-6 text-[11px] text-[#787878] placeholder:text-[#787878] bg-[#F7F9FB]"
					/>
				</div>
				<div className="flex items-center">
					<select
						id="myDropdown"
						className="text-[#414042] w-[150px] py-[8px] px-[16px] rounded-[2px]"
						name="numbers"
						onChange={handleStatusValue}
						value={statusValue}
					>
						<option value="All">All</option>
						<option value="Reconcilled">Reconcilled</option>
						<option value="Un-reconcilled">Un-reconcilled</option>
						<option value="Settled">Settled</option>
						<option value="Pending">Unsettled</option>
					</select>
				</div>
			</div>

			<div className="text-[14px] text-[#7F8FA4]">
				<div className="flex items-center justify-center gap-36 bg-[#EAEEF0] px-[26px] py-[12px]">
					<p>Item Type</p>
					<p>Price</p>
					<p>Transaction No</p>
					<p>Time</p>
					<p>Time</p>
				</div>
				<div className="flex flex-col">
					{productsArray.map((data: productsDataInterface, index: number) => (
						<div
							key={index}
							className="flex items-center justify-between border-y border-[#CCCFD4] px-[26px] py-[20px] bg-white"
						>
							<div className="flex gap-3 items-center justify-center">
								<img src={vw_icon} alt="" />
								<p>{data.name}</p>
							</div>
							<p>${data.price}</p>
							<p>{data.transaction_no}</p>
							<p>{data.time}</p>
							<div className="flex items-center justify-start gap-[3px] rounded-3xl md:border border-0 h-[33px] w-[120px] border-[#CCCFD4] md:p-[12px] p-0">
								<div
									className={`h-[9px] w-[9px] rounded-3xl ${
										data.status == "Pending"
											? "bg-[#EBC315]"
											: data.status == "Un-reconcilled"
											? "bg-[#C4C4C4]"
											: "bg-[#27AE60]"
									} `}
								/>
								<p
									className={`${
										data.status == "Pending"
											? "text-[#EBC315]"
											: data.status == "Un-reconcilled"
											? "text-[#C4C4C4]"
											: "text-[#27AE60]"
									} text-[12px] md:block hidden`}
								>
									{data.status}
								</p>
							</div>
							<img src={arrowdown_icon} alt="" />
						</div>
					))}
				</div>
				<div className="flex items-center justify-between mt-[26px]">
					<p className="text-[black]">{`Showing 1 to ${optionValue} of 500 entries`}</p>
					<div className="flex items-center justify-center">
						<p
							className="rounded-l-md border border-[#CED0DA] p-[5px] text-black cursor-pointer"
							onClick={handlePageOne}
						>
							Previous
						</p>
						<p
							className={`p-[5px] px-[10px] cursor-pointer border border-[#CED0DA] ${
								optionValue == 20
									? "bg-[#1875F0] text-white border-none py-[6px]"
									: ""
							}`}
							onClick={handlePageOne}
						>
							1
						</p>
						<p
							className={`p-[5px] px-[10px] cursor-pointer border border-[#CED0DA] ${
								optionValue == 40
									? "bg-[#1875F0] text-white border-none py-[6px]"
									: ""
							}`}
							onClick={handlePageTwo}
						>
							2
						</p>
						<p
							className="rounded-r-md border border-[#CED0DA] p-[5px] text-black cursor-pointer"
							onClick={handlePageTwo}
						>
							Next
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentsOverview;
