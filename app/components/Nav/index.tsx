'use client'

import Image from "next/image";
import Link from "next/link";
import { IoPlanetOutline } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";


export default function Nav() {

    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <nav className="bg-nav mb-16 py-2 h-[70px] px-6 z-40 backdrop-blur-md shadow-nav">
            <div className="flex justify-between items-center max-w-[1440px] m-auto">
                <Link href={'/'}>
                    <Image src={'/AstroRange.png'} alt="AstroRange" width={200} height={200} />
                </Link>

                <button
                    className={`md:hidden ${showModal ? 'hidden' : ''}`}
                    onClick={() => setShowModal(!showModal)}
                >
                    <IoMdMenu size={25} />
                </button>

                <ul className="hidden md:flex items-center gap-8 list-none">
                    <li className="flex items-center gap-2 hover:text-[#ffffffa8] transition duration-300">
                        <IoPlanetOutline size={25} />
                        <Link href={"/"}>Planetas</Link>
                    </li>
                    <li className="flex items-center gap-2 hover:text-[#ffffffa8] transition duration-300">
                        <TbRulerMeasure size={25} />
                        <Link className="hover:text-[#ffffffa8] transition duration-300" href={"/distance"}>Distâncias</Link>
                    </li>
                </ul>

                {
                    showModal &&
                    <ul className="fixed min-h-screen overflow-scroll bg-[#0a113ba4] backdrop-blur-[1000px] top-0 right-0 list-none">
                        <button
                            className="py-[22.5px] px-4"
                            onClick={() => setShowModal(!showModal)}
                        >
                            <IoMdMenu size={25} />
                        </button>
                        <li className="flex items-center gap-2 py-5 px-4 hover:text-[#ffffffa8] transition duration-300">
                            <IoPlanetOutline size={25} />
                            <Link href={"/"}>Planetas</Link>
                        </li>
                        <li className="flex items-center gap-2 py-5 px-4 hover:text-[#ffffffa8] transition duration-300">
                            <TbRulerMeasure size={25} />
                            <Link className="hover:text-[#ffffffa8] transition duration-300" href={"/distance"}>Distâncias</Link>
                        </li>
                    </ul>
                }
            </div>
        </nav>
    )
}