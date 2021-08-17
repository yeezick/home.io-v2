import Header from "../header/Header.jsx"
import Footer from "../footer/Footer.jsx"

import "./Layout.css"

const Layout = (props) => {
  console.log(props)
  return (
    <div>
      <Header user={props.user}/>
        {props.children}
      <Footer/>
    </div>
  )
}

export default Layout
