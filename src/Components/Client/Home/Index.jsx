import Awards from "../../Subcomponent/Awards/Awards";
import Herobanner from "../../Subcomponent/Banner/Herobanner";
import Verticlecardgrid from "../../Subcomponent/Cardgrid/Verticlecardgrid";
import Carousel from "../../Subcomponent/Carousel/Carousel";
import Casestudy from "../../Subcomponent/Casestudy/Casestudy";
import Contact from "../../Subcomponent/Contact/Contact";
import Ourstory from "../../Subcomponent/Ourstory/Ourstory";
import Heading from "../../Subcomponent/Heading/Heading";
import Verticlecardgrid2 from "../../Subcomponent/Cardgrid/Verticlecardgrid2";



const Index = () => {
    return (
        <>
        
            <Herobanner headTitle={"ORCAFY"} headPara={"Digital Marketing for a more sustinable future."} />
            {/* Let Orca  help */}
            <Heading Heading={"Let's Orca Help your business' Grow"} Subheading={"The theree main how we can help your business grow"} />
            <Verticlecardgrid />
            {/* Let Orca  help */}

            {/* Certificate & Award  */}
            <div className="back-gound pt-2 pb-5 my-5">
                {/* <Heading7 /> */}
                <Heading Heading={"Certificate & Award"} Subheading={"The theree main how we can help your business grow"} />
                <Awards />
            </div>
            {/* Certificate & Award  */}

            {/* Service  */}
            <Heading Heading={"Our Service"} Subheading={"The theree main how we can help your business grow"} />
            <Verticlecardgrid2 />
            {/* Service  */}


            <div className="bg-img py-5 mt-5">
                {/* Our story  */}
                <Heading Heading={"Our Story"} Subheading={"The theree main how we can help your business grow"} />
                <Ourstory />
                {/* Our story  */}
            </div>

            {/* Case Study  */}
            <Heading Heading={"Case Study"} Subheading={"The theree main how we can help your business grow"} />
            <Casestudy />
            {/* Case Study  */}

            <Carousel />

            {/* Contact  */}
            {/* <div className="bg-img-contact"> */}
                {/* <Heading Heading={"Let's Talk"} Subheading={"The theree main how we can help your business grow"} /> */}
                <Contact />
            {/* </div> */}
            {/* Contact  */}


        </>
    )
}

export default Index;