import ReactDOM from "react-dom/client"
import "./style.css"
import one from "./assets/images/img2.jpg"
import two from "./assets/images/img3.jpg"
import three from "./assets/images/download.jpg"

const root = ReactDOM.createRoot(document.getElementById("root"))

function Navbar()
{
  return(
   <div class="navbar">
        <h2>Perfumy</h2>
   
    <div className="navbar_items">
      <p>Home|</p>
      <p>About Us|</p>
      <p>Contact Us</p>
    </div>
    </div>
    
  )
}

function Search()
{
  return(
    <div className="search">
      <input type="text" placeholder="Search for anything you want"></input>
    </div>
  )
}

function Products()
{
  return(
    <div className="product">
      <div className="box1">
        <img src={one}></img>
        <p>"Perfume is the key to our memories, unlocking moments with every scent we breathe."</p>
      </div>
      <div className="box2">
        <img src={two}></img>
        <p>"In every drop of perfume lies a dream, a promise of elegance and allure."</p>
      </div>
      <div className="box3">
        <img src={three}></img>
        <p>"A scent is not seen, but it speaks; it captures hearts, leaving trails of mystery."
        </p>
      </div>
    </div>
  )
}

function About()
{
  return(
    <div className="about">
    <h1 style={{textAlign:"center"}}>About Us</h1>
    <br></br>
    <p>At Perfumy, we believe that every fragrance tells a unique story. Founded with a passion for the art of scent, we create luxurious, handcrafted perfumes designed to capture emotions, memories, and moments. Each bottle is a blend of carefully selected ingredients, curated to evoke a sense of elegance, confidence, and allure.</p>
    </div>
  )
}

function Footer()
{
  return(
    <div class="footer">
      <h1>Contact Us</h1>
      <p>Phone: +91 7639870987</p>
      <p>Email: perfumy@gmail.com</p>
    </div>
  )
}
 
root.render(
  <div>
    <Navbar></Navbar>
    <Search></Search>
    <Products></Products>
    <About></About>
    <Footer></Footer>
  </div>
)