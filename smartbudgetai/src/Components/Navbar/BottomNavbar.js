'use client';
import { BarChart2Icon, HomeIcon, SettingsIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomNavBar = () => {

    const router = usePathname();
    const navItems = [
        {
            name: 'Home', href: '/Home', icon: <HomeIcon className="w-6 h-6 text-gray-500" />
        },
        { name: 'Analysis', href: '/Analysis', icon: <BarChart2Icon className="w-6 h-6 text-gray-500" /> },
        { name: 'Profile', href: '/Profile', icon: <SettingsIcon className="w-6 h-6 text-gray-500" /> },

    ];

    console.log("router pathname is", router);

    return (



        <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around items-center h-16">
            {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                    <p className={` flex flex-col items-center text-xs ${router === item.href
                        ? 'text-cyan-600'
                        : 'text-gray-500'
                        }`}>
                        <span className="flex flex-col items-center justify-center " >{item.icon}{item.name}</span>
                    </p>
                </Link>
            ))}
        </nav>
    );
};

export default BottomNavBar;
