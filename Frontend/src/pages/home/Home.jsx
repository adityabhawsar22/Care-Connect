import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import Footer from "../../components/footer/Footer"
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="wrapper">
      <div className="gif">
          <img src="https://res.cloudinary.com/dap91fhxh/image/upload/v1702289234/analytics-3680198_1280-removebg-preview_sgpfid.png" alt="" />
      </div>
      <div className="desc">
          <span className="phrase">We Care so that you can be Carefree <span className="blue-text">Compassion in Every Click.</span></span>
          <button className="get-started">Vist us today</button>
      </div>
   
      </div>
      <Footer />
    </div>
  )
}

export default Home