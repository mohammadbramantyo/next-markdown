'use client'
import Link from "next/link"
import Image from "next/image";


// This Navbar uses DaisyUi, see https://daisyui.com/components/navbar/ for more info
export default function Navbar() {

    const handleClick = (): void => {
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };

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
                        <div className="dropdown dropdown-hover cursor-pointer">
                            <label tabIndex={0} className="m-1 cursor-pointer bg-primary border-none relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                                Project
                            </label>
                            <ul tabIndex={0} className={'dropdown-content z-40 menu w-40 bg-[#FFFEF1] rounded-md p-0'}>
                                <li className="text-black hover:bg-slate-400 p-0">
                                    <Link href={"/contribution"} >Contribution</Link>
                                </li>
                                <li className="text-black">
                                    <Link href="/description" >Description</Link>
                                </li>
                                <li className="text-black">
                                    <Link href={"/engineering"} >Engineering</Link>
                                </li>
                                <li className="text-black">
                                    <Link href={"/"} >Experiments</Link>
                                </li>
                                <li className="text-black">
                                    <Link href={"/"} >Notebook</Link>
                                </li>
                                <li className="text-black">
                                    <Link href={"/result"} >Result</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover cursor-pointer">
                            <label tabIndex={0} className="m-1 cursor-pointer bg-primary border-none relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                                Wet Lab
                            </label>
                            <ul tabIndex={0} className={'dropdown-content z-40 menu p-2 w-40 bg-[#FFFEF1] rounded-md'}>
                                <li className="text-black">
                                    <Link href={"/proof-of-concept"} >Proof of Concept</Link>
                                </li>
                                <li className="text-black">
                                    <Link href="/protocols" >Protocol</Link>
                                </li>
                                <li className="text-black">
                                    <Link href={"/experiments"} >Experiment</Link>
                                </li>


                            </ul>
                        </div>
                        <Link href={"/human-practices"} className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                            Human Practices
                        </Link>
                        <Link href={"/safety"} className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                            Safety
                        </Link>
                        <div className="dropdown dropdown-hover cursor-pointer">
                            <label tabIndex={0} className="cursor-pointer m-1 relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                                Team
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 w-40 bg-[#FFFEF1] rounded-md">
                                <li className="text-black">
                                    <Link href={"/team"} >Team</Link>
                                </li>
                                <li className="text-black">
                                    <Link href={"/attributions"} >Atrribution</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover  dropdown-end cursor-pointer">
                            <label tabIndex={0} className=" cursor-pointer m-1 relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                                Awards
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 w-40 bg-[#FFFEF1] rounded-md">
                                <li className="text-black">
                                    <Link href={"/education"} >Education</Link>
                                </li>
                                <li className="text-black">
                                    <Link href={"/sustainable"} >Sustainable Development</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
            {/* SideNav */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay "></label>
                <ul className="menu p-4 w-72 h-full bg-primary ">
                    <li>
                        <details>
                            <summary>Project</summary>
                            <ul>
                                <li>
                                    <Link href={"/contribution"} >Contribution</Link>
                                </li>
                                <li>
                                    <Link href="/description" >Description</Link>
                                </li>
                                <li>
                                    <Link href={"/engineering"} >Engineering</Link>
                                </li>
                                <li>
                                    <Link href={"/"} >Experiments</Link>
                                </li>
                                <li>
                                    <Link href={"/"} >Notebook</Link>
                                </li>
                                <li>
                                    <Link href={"/result"} >Result</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Wet Lab</summary>
                            <ul>
                                <li>
                                    <Link href={"/proof-of-concept"} >Proof of Concept</Link>
                                </li>
                                <li>
                                    <Link href="/protocols" >Protocols</Link>
                                </li>
                                <li>
                                    <Link href={"/experiments"} >Experiments</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link href={"/human-practices"}>
                            Human Practices
                        </Link>
                    </li>
                    <li>
                        <Link href={"/safety"}>
                            Safety
                        </Link>
                    </li>
                    <li>
                        <details>
                            <summary>Team</summary>
                            <ul>
                                <li>
                                    <Link href={"/team"} >Team</Link>
                                </li>
                                <li>
                                    <Link href={""} >Attribution</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Awards</summary>
                            <ul>
                                <li>
                                    <Link href={"/education"} >Education</Link>
                                </li>
                                <li>
                                    <Link href="sustainable/" >Sustainable Development</Link>
                                </li>

                            </ul>
                        </details>
                    </li>
                </ul>

            </div>
        </div>

    )
}