import { TopBar } from "../components/TopBar";
import { Degradado } from "../components/auxiliar/Degradado";
import { BtnAceptar, SelectBestGift } from "../components/buttons";
import { Link } from "react-router-dom";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target["color"].value);
};

export function GuideBestGift() {
  return (
    <div className='w-full h-full fixed top-0 left-0'>
      <TopBar title='Guía para el Mejor Regalo' to='/ideal-gift-page' />
      <div className='relative'>
        <img src='/ideal-gift-banner.jpg' className='w-full' alt='banner' />
        <Degradado />
        <h2 className='text-sm font-bold text-white mx-6 absolute bottom-2'>
          Responde pensando en la persona a quíen le darás un exquisito regalo,
          según tus respuestas te daremos la sugerencia ideal.
        </h2>
      </div>
      <div className='px-6 py-6 mb-16'>
        <form onSubmit={handleSubmit}>
          <SelectBestGift
            question='1. ¿Cuál color elegiría?'
            name='color'
            options={["Rojo", "Negro", "Azul", "Blanco", "Verde", "Cafe"]}
          />
          <SelectBestGift
            question='2. ¿Cuál tipo de película elegiría?'
            name='movie'
            options={[
              "Comedia",
              "Ciencia ficción",
              "Terror",
              "Acción",
              "Drama",
              "Dibujos Anímados",
            ]}
          />
          <SelectBestGift
            question='3. ¿Qué animal elegiría de mascota?'
            name='animal'
            options={[
              "Perros",
              "Peces",
              "Gatos",
              "Roedores",
              "Aves",
              "Sin mascotas",
            ]}
          />
          <SelectBestGift
            question='4. ¿Cuál será su fruta favorita?'
            name='fruit'
            options={[
              "Fresa",
              "Mora",
              "Mango",
              "Naranja",
              "Maracuyá",
              "Sandía",
            ]}
          />
          <SelectBestGift
            question='5. ¿Qué música frecuenta?'
            name='song'
            options={[
              "Urbana",
              "Pop",
              "Rock",
              "Tradicional",
              "Electrónica",
              "Rap",
            ]}
          />
          <Link to='/ideal-gift'>
            <BtnAceptar />
          </Link>
        </form>
      </div>
    </div>
  );
}
