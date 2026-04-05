import bgHero from '../../assets/Hero/hero background.png';
import { HeroMenu } from '../../constants/data';

export default function Hero() {
  return (
    <>
      <div className='container mx-auto block md:flex gap-5 mt-10'>
        <aside className='block w-full md:w-[20%] h-fit rounded-2xl p-5 bg-white'>
          {HeroMenu.map(i => (
            <div className='flex space-x-2 space-y-3 items-center' key={i.id}>
              <div className='px-1 py-2 bg-gray-100 opacity-80 rounded-2xl'>
                <img width={50} src={i.img} alt={i.title} />
              </div>
              <h3 className='text-[20px] font-semibold text-[#532013]'>
                {i.title}
              </h3>
            </div>
          ))}
        </aside>
        <div className='block w-full mt-5 space-y-10'>
          <div className='block space-y-2 md:flex gap-5'>
            <div className='w-11/12 md:w-6/12 bg-[#532013] rounded-3xl text-center py-3 text-white text-2xl font-semibold'>
              Coming soon
            </div>
            <div className='w-11/12 md:w-6/12 bg-white rounded-3xl text-center py-3 text-[#532013] text-2xl font-semibold'>
              Pickup only
            </div>
          </div>
          <div className='w-full '>
            <img src={bgHero} className='rounded-3xl' alt='Background Image' />
          </div>
        </div>
      </div>
    </>
  );
}
