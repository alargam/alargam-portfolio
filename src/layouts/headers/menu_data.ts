interface DataType {
	id: number;
	title: string;
	link: string;
	enabled?: boolean;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
		enabled?: boolean;
	}[];
}
// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/",
		has_dropdown: false,
	},
	{
		id: 2,
		title: "About",
		link: "/about",
		enabled: false,
		has_dropdown: false,
	},
	{
		id: 3,
		title: "services",
		link: "/service",
		enabled: false,
		has_dropdown: false,
	},
	{
		id: 4,
		title: "Projects",
		link: "/projects",
		has_dropdown: false,
		sub_menus: [
			{ link: "/projects", title: "Projects List" },
			{ link: "/single-project", title: "Single Portfolio", enabled: false },
		],
	},
	{
		id: 5,
		title: "Blog",
		link: "/blog",
		enabled: false,
		has_dropdown: false,
	},
	{
		id: 6,
		title: "Contact",
		link: "/contact",
		has_dropdown: false,
	},
];
export default menu_data;
