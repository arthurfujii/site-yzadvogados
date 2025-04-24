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
    { href: '/especialidades', label: 'Áreas de especialidade' },
    { href: '/contato', label: 'Contato' },
  ];
  return (
    <ul className='flex flex-col'>
      {menuLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href} className='py-2'>
            <Link
              onClick={onClick}
              href={link.href}
              className={clsx(
                'font-serif text-xl hover:text-[var(--secondary)]',
                {
                  ['text-[var(--primary)']: isActive,
                  ['text-[var(--quaternary)]']: !isActive,
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
