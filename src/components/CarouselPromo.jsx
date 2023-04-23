import { PromoCard } from "./cards";

const promociones = [
  {
    img: "https://encolombia.com/wp-content/uploads/2021/03/Promociones-mas-Efectivas-y-Ganadoras.png",
  },
  {
    img: "https://lacentral.com.co/wp-content/uploads/2022/11/17.-BANNER-OFERTA_responsive-1024x755.jpeg",
  },
  {
    img: "https://martimx.vtexassets.com/assets/vtex.file-manager-graphql/images/4739c505-bc21-47dd-ad73-951defe87762___b69eb77101d5d37ee14182e30c5d3384.jpg",
  },
];

export function CarouselPromo() {
  return (
    <>
      <h1 className='font-bold text-white italic ml-2 mb-2 mt-4'>
        Promociones
      </h1>
      <div className='flex overflow-auto snap-x w-full gap-4 mb-20 scroll-bar-none'>
        {promociones.map((promo) => {
          return <PromoCard img={promo.img} />;
        })}
      </div>
    </>
  );
}
