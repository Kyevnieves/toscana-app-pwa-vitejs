import {TopBar} from '../components/TopBar'
import {BtnAceptar} from '../components/buttons'
export function SendGiftPage() {
  return <div className="fixed top-0 left-0 overflow-scroll">
    <TopBar to='/ideal-gift' title="Escribir Mensaje"/>
    <div className='relative'>
      <img src='/ideal-gift.jpeg'></img>
    </div>
    <div className='px-4 my-2'>
      <form className='flex flex-col gap-2'>
        <h1 className='text-white'>Escribe un mensaje para enviar el regalo</h1>
        <textarea rows={3} className="w-full rounded-md">
        </textarea>
        <h1 className='text-white'>Escribe la dirección del destino</h1>
        <input type="text" placeholder='Número' className='w-full py-1 bg-transparent border-b border-purple-300 placeholder:font-light'/>
        <input type="text" placeholder='Calle, Carrera, Avenida, Transversal, Variante, Etc' className='w-full py-1 bg-transparent border-b border-purple-300 placeholder:font-light'/>
        <input type="text" placeholder='Comentarios' className='w-full py-1 bg-transparent border-b border-purple-300 placeholder:font-light'/>
        <BtnAceptar/>
      </form>
    </div>
  </div>;
}
