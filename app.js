'use strict'

class App extends React.PureComponent {
  render () {
    //const sortedProducts = this.props.products.sort((a, b) => a.price - b.price)

    return (
      <div>
        <header>
          Panadería Pan de la Casa
        </header>
        <img className="banner" src={"img/banner.jpg"}/>
        <h3 className="subtitle">
          Se aceptan pagos por Nequi o con efectivo en la entrega
        </h3>
        <br></br>
        <h3 className="subtitle">
          Puede pedir su domicilio o solicitar pan para recoger después.
        </h3>
        <br></br>
        <ProductList products={this.props.products} />
      </div>
    )
  }
}

const ProductList = props => {
  return (
    <div className='container'>
    {
      props.products.map((p, i) =>
        <ProductCard key={i} product={p} />
      )
    }
    </div>
  )
}

const ProductCard = props => {
  const p = props.product
  const numero = "3213270607"
  const formatPrice = p => p.toLocaleString(
    'es-CO',
    { style: 'currency', currency: 'COP' , maximumFractionDigits: '0'},
  )
  const discount = Math.round(100 - (p.price / p.originalPrice * 100))

  const goWhatsapp = () => window.open(`https://api.whatsapp.com/send?phone=+57${numero}&text=Hola%2C%20quiero%20comprar%20	%2A${p.name}%2A%2E%0AMi%20domicilio%20es:%20%0A`, '_blank')

  return (
      <div className="product">
        <a href={p.url} target="_blank">
          {
            p.state == "sold" ?
            <span className="product-span">
              <div className="sold">VENDIDO</div>
              <img className="product-img-filter-sold" src={p.imageUrl} loading="lazy"/>
            </span>
            : ''
          }
          {
            p.state == "reserved" ?
            <span className="product-span">
              <div className="reserved">RESERVADO</div>
              <img className="product-img-filter-reserved" src={p.imageUrl} loading="lazy"/>
            </span>
            : ''
          }
          {
            p.state == "notavailable" ?
            <span className="product-span">
               <div className="notavailable">NO DISPONIBLE</div>
               <img className="product-img-filter-notavailable" src={p.imageUrl} loading="lazy"/>
            </span>
            : ''
          }
          {
            p.state == "available" ?
            <span className="product-span">
               {/* <div className="available">DISPONIBLE</div> */}
               <img className="product-img" src={p.imageUrl} loading="lazy"/>
            </span>
            : ''
          }
        </a>
        <div className="product-details">
          <h3>{p.name}</h3>
          {discount > 0 && <span className="discount">-{discount}%</span>}
          <ul>
            {p.details.map(detail => <li>{detail}</li>)}
          </ul>
        </div>
        <div onClick={goWhatsapp} className="box-price">
          <span className="price">{formatPrice(p.price)}</span>
          <div className="box">
            <img className="icon" src="./whatsapp-icon.png"/>
            <button className="payment">Comprar</button>
          </div>
        </div>
      </div>
  );
}

ReactDOM.render(
  <App products={products} />,
  document.getElementById('root')
)
