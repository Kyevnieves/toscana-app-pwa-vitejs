import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  IdealGiftPage,
  GuideBestGift,
  IdealGift,
  SendGiftPage,
} from "./pages";
import { NavBar } from "./components";
function App() {
  return (
    <main className='bg-purple-500 min-h-screen'>
      <div className='px-3 container mx-auto py-3 flex flex-col justify-center'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ideal-gift-page' element={<IdealGiftPage />} />
          <Route path='/ideal-gift' element={<IdealGift />} />
          <Route path='/send-gift' element={<SendGiftPage />} />
          <Route path='/guide-best-gift' element={<GuideBestGift />} />
        </Routes>
      </div>
      <footer className='w-full fixed bottom-0'>
        <NavBar />
      </footer>
    </main>
  );
}

export default App;
