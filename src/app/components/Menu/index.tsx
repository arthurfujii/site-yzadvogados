'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export function Menu({
  onClick,
}: {
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const pathname = usePathname();
  const menuLinks = [
    { href: '/quemsomos', label: 'Quem somos' },
    { href: '/socios', label: 'Sócios' },
    { href: '/expertise', label: 'Áreas de expertise' },
    { href: '/contato', label: 'Contato' },
  ];
  return (
    <ul className='flex flex-col'>
      {menuLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href} className='py-1'>
            <Link
              onClick={onClick}
              href={link.href}
              className={clsx(
                'font-serif text-2xl hover:text-[var(--quaternary)]',
                {
                  ['text-[var(--primary)']: isActive,
                  ['text-[var(--tertiary)]']: !isActive,
                },
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
