import { Link } from "react-router-dom";
import { Cart, Heart, Profile, Home } from "./icons/index";
export function NavBar() {
  return (
    <>
      <nav className='flex justify-between items-center px-4 py-2 bg-white'>
        <Link to='/' className='flex flex-col items-center'>
          <Home />
          <h2 className='text-purple-500 text-sm'>Inicio</h2>
        </Link>
        <Link to='/' className='flex flex-col items-center'>
          <Cart />
          <h2 className='text-purple-500 text-sm'>Carrito</h2>
        </Link>
        <Link to='/' className='flex flex-col items-center'>
          <Heart />
          <h2 className='text-purple-500 text-sm'>Favoritos</h2>
        </Link>
        <Link to='/' className='flex flex-col items-center'>
          <Profile />
          <h2 className='text-purple-500 text-sm'>Perfil</h2>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
