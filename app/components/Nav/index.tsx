import Image from "next/image";
import Link from "next/link";

export default function Nav(){
    return (
        <nav className="bg-[#ffffff0e] h-20 mb-16 z-40 backdrop-blur-md shadow-[0_3px_10px_rgba(35,66,135,0.5)] sticky top-0">
            <div className="flex justify-between items-center max-w-[1440px] m-auto px-6 py-4">
                <Link href={'/'}>
                    <Image src={'/AstroRange.png'} alt="AstroRange" width={200} height={200}/>
                </Link>
                <div className="flex items-center gap-4">
                    <Link href={"/"}>Info</Link>
                    <Link href={"/distance"}>Distâncias</Link>
                </div>
            </div>
        </nav>
    )
}