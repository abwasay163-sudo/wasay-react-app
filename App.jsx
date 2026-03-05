import "bootstrap/dist/css/bootstrap.min.css";



function App(){
  // let fooditems =[ "Dall" , "Green Veg" , "fish" , "roti" , "salad"];
    let fooditems =[ ];
    // let foodies = fooditems.length === 0 ? <h3>I AM HUNGARY</h3> : null;
  return ( 
    <>
    <h1>Food Items</h1>
    {fooditems.length === 0 && <h3>I AM HUNGARY</h3>};
    <ul className="list-group list-group-flush">
      {fooditems.map((item =>(
 <li key={item} className="list-group-item">{item}</li>
 
      )))}
 
 Terminal React
npm create vite@latest
npm run dev
npm install
import "bootstrap/dist/css/bootstrap.min.css";
npm i bootstrap@5.3.8
 
</ul>
  </>
  )
}
export default App;