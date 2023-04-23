const handleClick = (e)=>{
    console.log(e.target)
}

export function SuggestionCard() {
  return (
    <div className="bg-purple-500 px-4">
        <div className="bg-purple-700 flex h-40 overflow-hidden rounded-lg">
            <div className="w-5/12">
                <img src="https://luciapaula.com/wp-content/uploads/2023/01/Blog-1970-01-20-125839033.jpg"></img>
            </div>
            <div className="w-7/12 relative">
                <h1 className="absolute text-sm leading-3 left-2 top-3 text-white">Torta de Ron</h1>
                <h1 className="absolute text-sm leading-3 right-2 top-3 text-yellow-500">$79.000</h1>
                <p className="absolute text-xs leading-3 left-2 top-10 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est non facere vero. Aliquam vitae, velit quibusdam accusantiu</p>
                <button className="absolute bottom-2 left-2 text-red-400 text-sm px-2 py-1 bg-white rounded-md">Comprar</button>
            </div>
        </div>
    </div>
  )
}