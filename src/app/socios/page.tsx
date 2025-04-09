import Image from 'next/image';

export default function Socios() {
  return (
    <div>
      <h1 className='sm:hidden'>Sócios</h1>
      <div className='flex flex-col gap-10'>
        <div className='flex gap-5'>
          <div>
            <Image
              src='https://placecats.com/500/600'
              width={500}
              height={600}
              alt='Yen'
            />
          </div>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, nostrum. Quasi aut fugiat enim perspiciatis quisquam.
              Magnam illum, itaque quasi vel quod officia cupiditate? Nisi
              placeat sunt quidem nemo suscipit?
            </p>
          </div>
        </div>
        <div className='flex flex-row-reverse gap-5'>
          <div>
            <Image
              src='https://placecats.com/500/600'
              width={500}
              height={600}
              alt='Yen'
            />
          </div>
          <div>
            <p className='text-right'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              omnis voluptatum quaerat voluptatibus earum corporis neque soluta
              obcaecati! Ipsum perferendis similique fuga, unde dolorem eaque!
              Dolorum, porro. Eos, delectus ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
