import Footer from "./footer";
import Nav from "./Nav";

const Layout = ({children}) => {
    return (  <div className="content">
<Nav/>
{children}
<Footer/>



    </div>);
}
 
export default Layout;