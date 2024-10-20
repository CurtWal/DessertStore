import "./App.css";
import data from "./data.json";
import cartimg from "./icon-add-to-cart.svg"
import empty from "./illustration-empty-cart.svg"
function App() {
  return (
    <div className="App">
      
      <div class="desserts">
        <h1 id="title">Desserts</h1>
        {data.map((items) => (
          <div id="items">
            <img src={items.image.desktop} alt="" id="images" />
            <div class="itemNames">
            <p>{items.category}</p>
            <p>{items.name}</p>
            <p style={{color:"hsl(14, 86%, 42%)"}}>${items.price.toFixed(2)}</p>
            </div>
            <button><img src={cartimg} alt=''/>Add to Cart</button>
          </div>
        ))}
        <div id="cart" style={{color:"hsl(14, 86%, 42%)"}}>
        <h5 style={{textAlign:"left", margin:"20px",fontSize:"25px"}}>Your Cart (0)</h5>
        <img src={empty} atl=''/>
        <p>Your added items will appear here</p>
      </div>
      </div>

      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Curtrick Walton</a>.
      </div>
      {/* <div>
        <h5>Your Cart (0)</h5>
        <p>Your added items will appear here</p>
      </div> */}
    </div>
  );
}

export default App;
