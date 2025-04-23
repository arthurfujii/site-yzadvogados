import Image from 'next/image';
import logo from '../../../../public/logo_yz.png';
import Link from 'next/link';

export function Logo() {
  return (
    <div>
      <Link href='/'>
        <Image
          src={logo}
          alt='Yen Zanetti Advogados'
          className='xl:max-w-[350px]'
        />
      </Link>
    </div>
  );
}
