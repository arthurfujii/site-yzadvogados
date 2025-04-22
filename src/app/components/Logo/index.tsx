import Image from 'next/image';
import logo from '../../../../public/logo_yz.png';

export function Logo() {
  return (
    <div>
      <Image
        src={logo}
        alt='Yen Zanetti Advogados'
        className='xl:max-w-[350px]'
      />
    </div>
  );
}
