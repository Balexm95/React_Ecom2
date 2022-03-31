import React from 'react'

const Home = () => {
  return (
    <>
    <section className="text">
          <h1>vin·tage</h1>
          <br />
          <h2>adjective</h2>
          <p>
            denoting something of high quality, especially something from the
            past or characteristic of the best period of a person's work.
          </p>
          <br />
          <br />
          <a className="button" href="/products">
            Shop Now!
          </a>
        </section>
        
        <main className="slideshow-container">
          <img src="/images/tshirt3.jpeg" alt="Slide 4" />
          <img src="/images/tshirt12.jpeg" alt="Slide 3" />
          <img src="/images/tshirt5.jpeg" alt="Slide 2" />
          <img src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Slide 1" />
          
          {/* <img
            src="https://ragstock.com/wp-content/uploads/vintage-tees-vintage-hompage-block1.jpg"
            alt="Slide 1"
            height="1884"
            width="1508"
          /> */}
        </main>
        {/* <div className = "card-container">
        <div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/products" className="btn btn-primary">Shop!</a>
  </div>
</div>

</div> */}
          
    </>
  )
}

export default Home