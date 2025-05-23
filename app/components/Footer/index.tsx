import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-nav py-4 px-6 backdrop-blur-md shadow-nav bottom-0">
            <div className="flex justify-between items-center max-w-[1440px] m-auto">
                <h1>Powered by Renan</h1>
                <div className="flex items-center gap-4">
                    <Link href={'https://github.com/Valverd'} target="_blank"><FaGithub size={25} /></Link>
                    <Link href={'https://www.linkedin.com/in/renan-valverde/'} target="_blank"><FaLinkedinIn size={25} /></Link>
                </div>
            </div>
        </footer>
    )
}