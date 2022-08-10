import Aboutus from "../Components/Aboutus/Aboutus";
import Mainbanner from "../Components/Carousel/Mainbanner";
import Footer from "../Components/Footer/Footer";
import Furthercontent1 from "../Components/Furthercontent/Furthercontent1";
import Navbarhead from "../Components/Navbar/Navbarhead";
import Ourservices from "../Components/Servicesbanner/Ourservices";
const Dashboard = () => {

    const data=[
        {
            content:"Panasonic is launching a new Video Camera in November this year in India. We are using this show to create awareness about our new model. Good Show!",
        },
        {
            content:"",
        },
    ]
    return (
        <div>
            <Navbarhead />
            <Mainbanner />
            <Aboutus />
            <Ourservices />
            {data.map((item,index)=>  {return <Furthercontent1 content={item.content} image={item.image}/>})}
            <Footer />
        </div>
    )
}
export default Dashboard;