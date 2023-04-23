import { ProductCardLarge } from "../components/cards";
import { BtnCta } from "../components/buttons";
import { Link } from "react-router-dom";
import { TopBar } from "../components/TopBar";

const IdealGiftProducts = [
  {
    id: 1,
    title: "Torta de pan",
    description:
      "Inserte una descripcion de producto que coincida con la pequeña descripcion suministrada",
    price: 79000,
    img: "https://i.pinimg.com/736x/92/53/60/925360679a61bd2815cebb907263f4a1.jpg",
    favorite: true,
  },
  {
    id: 2,
    title: "Torta de chocolate",
    description:
      "Inserte una descripcion de producto que coincida con la pequeña descripcion suministrada",
    price: 84000,
    img: "https://luciapaula.com/wp-content/uploads/2023/01/Blog-1970-01-20-125839033.jpg",
    favorite: false,
  },
];

export function IdealGiftPage() {
  return (
    <div>
      <TopBar title='Ideales para regalar' to='/' />
      <Link to='/guide-best-gift'>
        <BtnCta />
      </Link>
      <div data-name='container-cards' className='my-24 flex flex-col gap-4'>
        {IdealGiftProducts.map((p) => {
          return (
            <ProductCardLarge
              key={p.id}
              id={p.id}
              title={p.title}
              description={p.description}
              price={p.price}
              img={p.img}
              favorite={p.favorite}
            />
          );
        })}
      </div>
    </div>
  );
}
