export function SearchBar() {
  return (
    <>
      <header className='flex items-center bg-white rounded-md py-1 shadow-sm pl-1'>
        <div
          data-name='SearchBar'
          className='relative mx-auto bg-slate-400 rounded-xl'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5 absolute left-4 top-2 my-auto text-slate-700'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>

          <input
            type=''
            name=''
            className='w-full px-12 py-2 bg-slate-100 placeholder:text-slate-200 placeholder:font-bold rounded-sm focus:outline-none'
            placeholder='Busqueda'
          />
        </div>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 ml-4 mr-4 cursor:pointer text-red-400'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
          />
        </svg>
      </header>
    </>
  );
}
