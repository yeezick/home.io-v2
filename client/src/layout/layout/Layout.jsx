import Header from "../header/Header.jsx"
import Footer from "../footer/Footer.jsx"

import "./Layout.css"

const Layout = ({user, children}) => {
  // console.log(props)
  return (
    <div className="layout">
      {user ? 
      <Header user={user}/>
    : <Header />
    }
        {children}
      <Footer/>
    </div>
  )
}

export default Layout
