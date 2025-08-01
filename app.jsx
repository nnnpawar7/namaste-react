import { createRoot } from 'react-dom/client';
import { Header } from "./src/components/Header";
import { Body } from "./src/components/Body";
const restaurants = [
  { rating: "5.0", cousine: "Sattvic Indian", name: "Krishna Prasad" },
  { rating: "5.0", cousine: "Sattvic South Indian", name: "Govindas" },
  { rating: "5.0", cousine: "International Sattvic (Thai, etc.)", name: "Heigher Taste" },
  { rating: "5.0", cousine: "Traditional Indian Thali", name: "Prasadalay" },
  { rating: "5.0", cousine: "Pure Vegetarian Maharashtrian", name: "Naivedyam" },
  { rating: "5.0", cousine: "North Indian Sattvic", name: "Rajbhog" },
  { rating: "5.0", cousine: "Continental & Indian Fusion", name: "Annapurna Bliss" },
  { rating: "5.0", cousine: "Gourmet Sattvic Meals", name: "Divine Delights" },
  { rating: "5.0", cousine: "Ayurvedic Balanced Meals", name: "Sattvic Feast" }
]



const AppLayout = () =>{
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}


const root = createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

