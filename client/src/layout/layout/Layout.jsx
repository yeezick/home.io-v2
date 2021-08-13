import Header from "../header/Header.jsx"
import Footer from "../footer/Footer.jsx"

import "./Layout.css"

const Layout = (props) => {
  return (
    <div>
      <Header/>
        {props.children}
      <Footer/>
    </div>
  )
}

export default Layout
