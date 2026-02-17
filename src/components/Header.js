import Navigation from '@/components/Navigation';
import Logo from './Logo';
import Link from 'next/link';

function Header() {
    return (
        <header className='border-b bg-white border-primary-50 px-8 py-5'>
            <Link href="/" className='flex justify-between items-center max-w-7xl mx-auto'>
                <Logo />
                <Navigation />
            </Link>
        </header>
    );
}

export default Header;
