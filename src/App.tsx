import logo from "../src/assets/images/logo.svg"

const App = () => {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav_box">
            <a href="#!" className="nav_logo"><img src={logo} alt="" /></a>
            <ul className="nav_list">
              <li><a href="#!" className="nav_link">HOME PAGE</a></li>
              <li><a href="#!" className="nav_link">CATEGORY</a></li>
              <li><a href="#!" className="nav_link">ABOUT US</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default App
