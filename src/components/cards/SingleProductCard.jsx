import {Degradado} from '../auxiliar/Degradado'
import { SuggestionCard } from './SuggestionCard'

const handleClick = (e)=>{
    console.log(e.target)
}

export function SingleProductCard() {
  return (
    <div className="absolute left-0 w-full">
        <div className='relative'>
            <img src="https://luciapaula.com/wp-content/uploads/2023/01/Blog-1970-01-20-125839033.jpg"></img>
            <Degradado/>
            <h1 className='text-white font-bold absolute bottom-4 px-4 text-xl'>Torta de Chocolate</h1>
        </div>
        <div className='px-4 my-4'>
            <p className='text-white text-sm'>Crocante, rellena y con abundantes chispas de chocolate, ideal para acompañar con helado. Pedir con 24 horas de anticipación, mantener en un lugar fresco.</p>
            <div className='flex items-center gap-4 mt-4'>
                <button className='px-2 py-1 bg-white text-red-400 rounded-md' onClick={handleClick}>Comprar</button>
                <h1 className='text-yellow-500 price'>$73.000</h1>
            </div>
        </div>
        <div className="py-2 my-2 bg-white">
            <h1 className='text-purple-500 font-bold text-center text-xl'>También le puede gustar</h1>
        </div>
        <div className='flex flex-col gap-4 bg-purple-500 pb-16'>
        <SuggestionCard/>
        <SuggestionCard/>
        <SuggestionCard/>
        </div>
    </div>
  )
}