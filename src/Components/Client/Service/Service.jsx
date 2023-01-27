import Awards from "../../Subcomponent/Awards/Awards";
import Imagebanner from "../../Subcomponent/Banner/Imagebanner";
// import Horizontalcard from "../../Subcomponent/Card/Horizontal/Horizontalcard";
// import Verticlecard from "../../Subcomponent/Card/Vertical/Verticlecard";
// import Verticlecardgrid from "../../Subcomponent/Cardgrid/Verticlecardgrid";
import Carousel from "../../Subcomponent/Carousel/Carousel";
import Heading from "../../Subcomponent/Heading/Heading";
import Heading2 from "../../Subcomponent/Heading/Heading2";
import Servicegrid from "../../Subcomponent/Servicegrid/Servicegrid";
import Servicenavtilegrid from "../../Subcomponent/Servicegrid/Servicenavtilegrid";
import Servicesidebar from "../../Subcomponent/Servicesidebar/Servicesidebar";




const Service = () => {
    return (
        <>
            <Imagebanner headTitle={"OUR SERVICE"} headPara={" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad"}/>
            {/* <Service/> */}
            <div className="index">
            <Heading Heading={"Position for your brand success"}/>
            <Servicegrid/>
           <div className="my-5 pb-5">
           <Heading Heading={"Our Service"}/>
            <Servicenavtilegrid/>
           </div>
            {/* <Verticlecardgrid /> */}
            {/* back-gound */}
            <div className="service-bg py-5">
            <Heading2/>
            <Awards />
            </div>

            <Carousel />
            </div>

        </>
    )
}

export default Service;