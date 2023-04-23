import { Degradado } from "../auxiliar/Degradado";

export function HomeProductCard({ nombre, img }) {
  return (
    <div className='w-5/12 relative rounded-md overflow-hidden shadow-md shrink-0 snap-start snap-always'>
      <img src={img} className='h-full'></img>
      <Degradado />
      <h2 className='absolute px-2 py-2 bottom-1 text-white font-bold text-sm'>
        {nombre}
      </h2>
    </div>
  );
}
