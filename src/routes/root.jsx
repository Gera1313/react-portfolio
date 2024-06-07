import Footer from '../components/footer';
import Navigation from '../components/navigation'
import { Outlet } from "react-router-dom";
const root = () => {
  return (
    <div>
        <Navigation/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default root