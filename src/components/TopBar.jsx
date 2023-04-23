import { ArrowLeft } from "./icons/index";
import { Link } from "react-router-dom";

export function TopBar({ title, to }) {
  return (
    <>
      <header className='py-3 px-2 bg-white fixed w-full left-0 top-0 z-10'>
        <div className='flex items-center'>
          <Link to={to}>
            <ArrowLeft />
          </Link>
          <h1 className='text-purple-500 ml-2 text-2xl font-bold'>{title}</h1>
        </div>
      </header>
    </>
  );
}
