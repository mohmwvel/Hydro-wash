export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>HYDRO WASH</h2>
        <div>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Booking</a>
        </div>
      </nav>

      {/* Hero Banner */}
      <header className="hero">
        <div>
          <p className="tag">Premier Detailing Studio</p>
          <h1>THE ART OF <br/> REFINEMENT.</h1>
          <p>Exquisite automotive care for the discerning collector.</p>
          <a href="#" className="button">Book Appointment</a>
        </div>
        <div className="card">
          <img src="/your-car-image.jpg" alt="Detailing" style={{width: '100%'}} />
        </div>
      </header>

      {/* Services Grid */}
      <section className="section">
        <h2>The Collection</h2>
        <div className="grid">
          <div className="box">
            <h3>Ceramic Coating</h3>
            <p>From 5000 EGP</p>
            <strong>Ultimate Protection</strong>
          </div>
          {/* Add more boxes here */}
        </div>
      </section>
    </div>
  );
}

