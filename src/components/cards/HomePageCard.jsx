import { Link } from "react-router-dom";
import { Degradado } from "../auxiliar/Degradado";
export function HomePageCard() {
  return (
    <Link to='/ideal-gift-page'>
      <div className='w-full h-1/3 my-4 relative overflow-hidden'>
        <h1 className='text-white font-bold italic ml-2 mb-2'>
          Ideales para regalar
        </h1>
        <img
          className='h-1/3 rounded-xl shadow-md'
          src='/banner-home-page.webp'
          alt='banner-home-page'
        />
        <Degradado />
        <h2 className='text-white absolute bottom-4 px-4 py-4 font-bold'>
          Lo mejor de nuestro catálogo para que sorprendas a tus seres queridos
        </h2>
      </div>
    </Link>
  );
}
