import { SingleProductCard } from "../components/cards/SingleProductCard";
import { TopBar } from '../components/TopBar'
export function SingleProductPage() {
  return (
    <div>
      <TopBar title="Buena Elección" to="/"/>
      <div className="mt-8"></div>
      <SingleProductCard/>
    </div>
  )
}