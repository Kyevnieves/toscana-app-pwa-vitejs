import { SearchBar } from "../components/SearchBar";
import { Carousel, CarouselPromo } from "../components";
import { HomePageCard } from "../components/cards/HomePageCard";
export function HomePage() {
  return (
    <main>
      <SearchBar />
      <HomePageCard />
      <Carousel />
      <CarouselPromo />
    </main>
  );
}
