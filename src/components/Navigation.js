import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="z-10 text-lg">
            <ul className="flex gap-10 items-center">
                <li>
                    <Link href="/cidades" className="hover:text-primary-500 transition-colors text-gray-700 font-semibold text-[16px]">
                        Buscar
                    </Link>
                </li>
                <li>
                    <Link href="/comparar" className="hover:text-primary-500 transition-colors text-gray-700 font-semibold text-[16px]">
                        Comparar
                    </Link>
                </li>
            </ul>
        </nav>
    );
}