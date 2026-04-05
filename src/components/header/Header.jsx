import { HeaderImages } from '../../constants/data';

export default function Header() {
  return (
    <>
      <div className='container mx-auto'>
        <div className='block space-y-5 justify-center md:space-y-0 md:flex md:justify-around'>
          {HeaderImages.map(i => (
            <div
              key={i.id}
              className='block justify-center mx-auto md:flex md:mx-2 md:justify-between'
            >
              <img src={i.image} className='rounded-3xl w-full' alt={i.image} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
