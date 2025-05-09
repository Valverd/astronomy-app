import Link from "next/link";

export default function Nav(){
    return (
        <nav className="bg-[#ffffff0e] z-40 backdrop-blur-md shadow-[0_3px_10px_rgba(35,66,135,0.5)] sticky top-0">
            <div className="flex justify-between items-center max-w-[1440px] m-auto mb-16 px-6 py-4">
                <h1 className="text-2xl font-bold">AstroRange</h1>
                <div className="flex items-center gap-4">
                    <Link href={"/"}>Info</Link>
                    <Link href={"/distance"}>Distância</Link>
                </div>
            </div>
        </nav>
    )
}