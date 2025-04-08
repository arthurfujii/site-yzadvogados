import Image from 'next/image';

export function Logo() {
  return (
    <div>
      <Image
        src='https://placecats.com/500/100'
        width='300'
        height='200'
        alt='Random Cat'
      />
    </div>
  );
}
