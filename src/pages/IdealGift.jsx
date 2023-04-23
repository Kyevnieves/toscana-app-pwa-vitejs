import { Degradado } from "../components/auxiliar/Degradado";
import { TopBar } from "../components/TopBar";
import { BtnAceptar, BtnRetry } from "../components/buttons";
import { Link } from "react-router-dom";

export function IdealGift() {
  return (
    <div className='fixed top-0 left-0 w-full bg-black h-full'>
      <TopBar title='Tal vez podría gustarle' to='/guide-best-gift' />
      <div className='relative'>
        <img src='/ideal-gift.jpeg' alt='product-img'></img>
        <Degradado />
      </div>

      <div className='relative bottom-4 px-4'>
        <div className='flex justify-between'>
          <h1 className='text-white font-bold text-md'>Torta de Chocolate</h1>
          <h1 className='text-yellow-400'>$79.000</h1>
        </div>

        <p className='text-white font-bold text-md'>
          Despertando el olor añejo y sabor caracteristico de los barriles de
          madera
        </p>
      </div>

      <div className='flex flex-col gap-2'>
        <Link to='/send-gift'>
          <BtnAceptar />
        </Link>
        <Link to='/guide-best-gift'>
          <BtnRetry />
        </Link>
      </div>
    </div>
  );
}
