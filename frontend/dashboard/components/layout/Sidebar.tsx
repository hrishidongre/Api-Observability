"use client"

import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function Sidebar(){
    const pathname = usePathname();
    const navItems = [
        {name:"Overview",href:"/"},
        { name: 'Traces', href: '/traces' },
        { name: 'Metrics', href: '/metrics' },
        { name: 'Logs', href: '/logs' },
    ]

    return (
    <div className="w-60 bg-zinc-900 border-r border-zinc-800 p-6">
      <h1 className="text-xl font-semibold mb-8">
        Observability
      </h1>

      <nav className="flex flex-col gap-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${
                isActive
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}