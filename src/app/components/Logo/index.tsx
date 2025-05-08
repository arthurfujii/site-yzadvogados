import ExportedImage from 'next-image-export-optimizer';
import logo from '../../../../public/images/logo_yz.png';
import Link from 'next/link';

export function Logo() {
  return (
    <div>
      <Link href='/'>
        <ExportedImage
          src={logo}
          alt='Yen Zanetti Advogados'
          className='xl:max-w-[300px]'
        />
      </Link>
    </div>
  );
}
