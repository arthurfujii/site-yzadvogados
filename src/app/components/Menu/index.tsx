'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Menu() {
  const pathname = usePathname();
  const menuLinks = [
    { href: '/quemsomos', label: 'Quem somos' },
    { href: '/socios', label: 'Sócios' },
    { href: '/especialidades', label: 'Áreas de especialidade' },
    { href: '/contato', label: 'Contato' },
  ];
  return (
    <nav>
      <ul>
        {menuLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={isActive ? 'text-amber-500' : 'text-black'}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
