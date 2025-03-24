import Image from "next/image"
import Link from "next/link"
export default function HeaderCalendar() {
    
    return(
        <nav className="flex p-4">
            <div className="flex flex-1 justify-end ">
            <Link href="/accueil">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={300}
                    height={300}
                />
            </Link>
            </div>
            <div className="flex justufy-center">
            <Image
                    src="/header/navbar/burger.svg"
                    alt="logo"
                    width={35}
                    height={35}
                />
            </div>
        </nav>
    )
}