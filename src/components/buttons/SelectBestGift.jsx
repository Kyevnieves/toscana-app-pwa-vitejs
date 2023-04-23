export function SelectBestGift({ options, question, name }) {
  return (
    <div className='my-4 flex flex-col justify-center items-center'>
      <h1 className='text-xl font-bold text-white'>{question}</h1>
      <select className='my-2 px-6 py-2 font-bold rounded-md' name={name}>
        {options.map((opt) => {
          return (
            <option key={opt} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
}
