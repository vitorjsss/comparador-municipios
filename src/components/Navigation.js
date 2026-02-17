import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="z-10 text-lg">
            <ul className="flex gap-16 items-center">
                <li>
                    <Link href="/cidades" className="hover:text-accent-600 transition-colors text-primary-500">
                        Buscar
                    </Link>
                </li>
                <li>
                    <Link href="/comparar" className="hover:text-accent-600 transition-colors text-primary-500">
                        Comparar
                    </Link>
                </li>
            </ul>
        </nav>
    );
}