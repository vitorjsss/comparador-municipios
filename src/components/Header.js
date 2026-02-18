import Navigation from '@/components/Navigation';
import Logo from './Logo';
import Link from 'next/link';

function Header() {
    return (
        <header className='border-b bg-white border-primary-50 px-5 py-3'>
            <div className='flex justify-between items-center gap-10 mx-auto max-w-7xl'>
                <Link href="/">
                    <Logo />
                </Link>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;
