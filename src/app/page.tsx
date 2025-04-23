import Image from 'next/image';
import yz from '../../public/yz.svg';
export default function Home() {
  return <Image src={yz} alt='YZ' width={300} className='mx-auto sm:hidden' />;
}
