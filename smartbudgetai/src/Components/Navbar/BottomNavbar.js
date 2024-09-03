'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomNavBar = () => {

    const router = usePathname();
    const navItems = [
        { name: 'Home', href: '/Home', icon: '/icons/budget.svg' },
        { name: 'Analysis', href: '/Analysis', icon: '/icons/home.svg' },
        { name: 'Profile', href: '/Profile', icon: '/icons/transactions.svg' },

    ];

    console.log("router pathname is", router);


    return (



        <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around items-center h-16">
            {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                    <p className={`border-2 border-orange-700 flex flex-col items-center text-xs ${router === item.href
                        ? 'text-blue-600'
                        : 'text-gray-500'
                        }`}>
                        <span>{item.name}</span>
                    </p>
                </Link>
            ))}
        </nav>
    );
};

export default BottomNavBar;
