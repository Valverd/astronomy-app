'use client'

import Image from "next/image";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import MenuModal from "../MenuModal";
import { IoPlanetOutline } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";


export default function Nav() {

    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <>
            <nav className="bg-nav mb-16 h-[70px] z-40 backdrop-blur-md shadow-nav">
                <div className="flex justify-between py-2 px-6 items-center max-w-[1440px] m-auto">
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


                </div>

            </nav>
            <MenuModal showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}