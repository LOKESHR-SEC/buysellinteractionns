import Aboutus from "../Components/Aboutus/Aboutus";
import Mainbanner from "../Components/Carousel/Mainbanner";
import Footer from "../Components/Footer/Footer";
import Furthercontent1 from "../Components/Furthercontent/Furthercontent1";
import Furthercontent2 from "../Components/Furthercontent/Furthercontent2";
import Navbarhead from "../Components/Navbar/Navbarhead";
import Ourservices from "../Components/Servicesbanner/Ourservices";
const Dashboard=()=>{
    return (
        <div>
            <Navbarhead/>
            <Mainbanner/>
            <Aboutus/>
            <Ourservices/>
            <Furthercontent1/>
            <Furthercontent2/>
            <Footer/>
        </div>
    )
}
export default Dashboard;