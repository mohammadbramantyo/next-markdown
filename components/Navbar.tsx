import Link from "next/link"
import Image from "next/image";
import { getNavContent, NavItem } from "@/lib/navbar";


function renderNavItem(navItems: NavItem[]) {
    return navItems.map((item) => {
        // Navbar withhout dropdown
        if (item.children.length == 0 && item.link != null) {
            return (
                <Link href={item.link} className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    {item.title}
                </Link>
            )
        }

        // Navbar with dropdown
        return (
            <div className="dropdown dropdown-bottom dropdown-end cursor-pointer">
                <label tabIndex={0} className="m-1 cursor-pointer bg-primary border-none relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    {item.title}
                </label>
                <ul tabIndex={0} className={'dropdown-content z-40 menu w-40 bg-[#FFFEF1] rounded-md p-0'}>
                    {item.children.map((childNav) => {
                        return childNav.link != null && (
                            <li className="text-black hover:bg-slate-400 rounded hover:text-white">
                                <Link href={childNav.link} >{childNav.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>

        )
    })
}

function renderSideNav(navItems: NavItem[]) {
    return navItems.map((item) => {
        if (item.children.length == 0 && item.link != null) {
            return (
                <li>
                    <Link href={item.link}>
                        {item.title}
                    </Link>
                </li>
            )
        }

        return (
            <li>
                <details>
                    <summary>{item.title}</summary>
                    <ul>
                        {item.children.map((navChild) => {
                            return navChild.link != null && (
                                <li>
                                    <Link href={navChild.link}>{navChild.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </details>
            </li>
        )
    })
}


// This Navbar uses DaisyUi, see https://daisyui.com/components/navbar/ for more info
export default async function Navbar() {


    const navbarContent = await getNavContent();

    return (
        <div className="drawer z-50 sticky top-0" aria-label="Sidebar">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <nav className="w-full navbar bg-primary ">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <Link href={"/"}>
                            <Image
                                src="/vercel.svg"
                                alt="Vercel Logo"
                                className="dark:invert"
                                width={100}
                                height={24}
                                priority
                            />
                        </Link>
                    </div>
                    <div className="navbar-end hidden lg:flex lg:justify-around">

                        {renderNavItem(navbarContent)}


                    </div>
                </nav>
            </div>
            {/* SideNav */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay "></label>
                <ul className="menu p-4 w-72 h-full bg-primary ">
                    {renderSideNav(navbarContent)}
                </ul>

            </div>
        </div>

    )
}