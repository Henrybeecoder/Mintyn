import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	// useContext,
	useState,
} from "react";

interface navContextInterface {
	navActive: boolean | undefined;
	setNavActive: Dispatch<SetStateAction<boolean>>;
}

const NavContext = createContext<Partial<navContextInterface>>({});

export const NavContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [navActive, setNavActive] = useState(false);
	return (
		<NavContext.Provider value={{ navActive, setNavActive }}>
			{children}
		</NavContext.Provider>
	);
};

export const useNav = () => {
	return useContext(NavContext);
};
