import { BtnMoreProducts } from "./buttons/BtnMoreProducts";
import { HomeProductCard } from "./cards";

const products = [
  {
    nombre: "Torta de Chocolate",
    img: "https://d1uz88p17r663j.cloudfront.net/original/e89d19d331ac413811e3b1c11a893991_torta-princesa.jpg",
  },
  {
    nombre: "Torta Selva Negra",
    img: "https://www.paulinacocina.net/wp-content/uploads/2022/04/selva-negra-receta-1.jpg",
  },
  {
    nombre: "Hamburguesa",
    img: "https://d1nsq2txwd94q7.cloudfront.net/public/files/production/recipes/images/259/thumb/r_259_1550838406.jpg",
  },
];

export function Carousel() {
  return (
    <>
      <h1 className='font-bold text-white italic ml-2 mb-2'>Productos</h1>
      <div className='flex overflow-auto snap-x w-full gap-4'>
        {products.map((product) => {
          return <HomeProductCard nombre={product.nombre} img={product.img} />;
        })}

        <BtnMoreProducts />
      </div>
    </>
  );
}
