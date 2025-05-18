import Link from "next/link";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoPlanetOutline } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { motion, AnimatePresence } from 'framer-motion'


interface MenuModalProps {
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MenuModal({ showModal, setShowModal }: MenuModalProps) {
    return (
        <AnimatePresence>
            {
                showModal &&
                <motion.ul
                    className="fixed top-0 right-0 h-screen bg-[#0a113b] list-none z-50"
                    animate={{ x: 0, opacity: 1 }}
                    initial={{ x: '100%', opacity: 0 }}
                    exit={{ x: '100%', opacity: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                    }}
                >
                    <button
                        className="py-[22.5px] px-4"
                        onClick={() => setShowModal(!showModal)}
                    >
                        <IoMdMenu size={25} />
                    </button>
                    <li
                        className="flex items-center gap-2 py-5 px-4 hover:text-[#ffffffa8] transition duration-300"
                        onClick={() => { setShowModal(false) }}
                    >
                        <IoPlanetOutline size={25} />
                        <Link href={"/"}>Planetas</Link>
                    </li>
                    <li
                        className="flex items-center gap-2 py-5 px-4 hover:text-[#ffffffa8] transition duration-300"
                        onClick={() => { setShowModal(false) }}
                    >
                        <TbRulerMeasure size={25} />
                        <Link className="hover:text-[#ffffffa8] transition duration-300" href={"/distance"}>Distâncias</Link>
                    </li>
                </motion.ul>
            }
        </AnimatePresence>
    )
}