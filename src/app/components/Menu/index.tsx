'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

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
                className={clsx('font-serif text-xl', {
                  ['text-[var(--primary)']: isActive,
                  ['text-[var(--quaternary)]']: !isActive,
                })}
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
