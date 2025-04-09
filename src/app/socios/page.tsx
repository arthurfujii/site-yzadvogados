import Image from 'next/image';

export default function Socios() {
  return (
    <div>
      <h1>Sócios</h1>
      <div>
        <div className='flex'>
          <div>
            <Image
              src='https://placecats.com/200/300'
              width={200}
              height={300}
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
      </div>
    </div>
  );
}
