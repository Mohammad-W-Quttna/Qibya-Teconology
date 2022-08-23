import data from './data';
function App() {
  return (
    <div>
      <header>
      <a href="/"> Qibya Teconlogy</a>

      </header>
      
      <main>

        
          <h1>Featured Products</h1>

<div class="products">
  


{data.products.map(product => (
<div className="product" key={product.slug}>
  <a href={`/product/${product.slug}`}>

<img src={product.image} alt={product.name}/> 
</a>
     <div className="info">
     <a href={`/product/${product.slug}`}>
<p>{product.name}</p>
</a>

<p>
  <strong>${product.price}</strong>
  </p>
 <button> Add to cart</button>
    </div>

</div>

))}
</div>
      </main>
    </div>
  );
}

export default App;
