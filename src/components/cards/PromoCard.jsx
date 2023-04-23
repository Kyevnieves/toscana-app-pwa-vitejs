export function PromoCard({ img }) {
  return (
    <div className='w-8/12 relative rounded-md overflow-hidden shadow-md shrink-0 snap-start snap-always'>
      <img src={img} className='h-full' alt='img'></img>
    </div>
  );
}
