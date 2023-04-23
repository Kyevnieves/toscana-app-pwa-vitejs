import { Degradado } from "../auxiliar/Degradado";

export function ProductCardLarge({
  id,
  title,
  description,
  price,
  img,
  favorite,
}) {
  return (
    <div className='w-full h-6/12 rounded-md overflow-hidden relative'>
      <img src={img} className='h-full w-full'></img>
      <Degradado />
      <div
        data-name='info-product'
        className='absolute bottom-0 w-full px-4 py-4'
      >
        <div className='flex justify-between items-center'>
          <h2 className='text-white font-bold text-lg'>{title}</h2>
          <h2 className='text-yellow-400 font-bold'>${price}</h2>
        </div>
        <div>
          <p className='text-white font-bold text-sm mb-4'>{description}</p>
        </div>
        <div className='flex justify-between items-center'>
          <button className='bg-white border font-bold text-red-500 border-red-500 px-4 py-1 rounded-md'>
            Comprar
          </button>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill={favorite == true ? "red" : "transparent"}
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-8 h-8 text-red-600'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
