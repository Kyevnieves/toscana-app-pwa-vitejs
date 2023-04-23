import { ArrowRight } from "../icons";
export function BtnMoreProducts() {
  return (
    <div className='rounded-full text-white w-24 relative shrink-0 snap-start snap-always flex flex-col justify-center items-center'>
      <ArrowRight />
      <h1 className='font-bold italic'>Ver Más</h1>
    </div>
  );
}
