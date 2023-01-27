import Verticlecard from "../Card/Vertical/Verticlecard";
import CardImg1 from "../../../image/orca asset/image 24.png";
import CardImg2 from "../../../image/orca asset/brand awarness icon.png";
import CardImg3 from "../../../image/orca asset/image 22.png";
import CardImg4 from "../../../image/orca asset/generate leeds.png";
import CardImg5 from "../../../image/orca asset/image 23.png";
import CardImg6 from "../../../image/orca asset/customers engagement.png";


const dataCollectionTop2 = [
    {
        id: 1, choice: "mainHead", title: "Search Engine Optimization", subHeading: "Search engine optimization (SEO) is the process of improving the ranking of a website on search engines like Google in order", image1: CardImg1, image2: CardImg2, Top: "card-top cardThirdTop", Bottom: "card-bottom cardSecondBottom", navUrl: "/getaproposal",  target: "#bar"
    },
    {
        id: 2, choice: "mainHead", title: "Website Design & Creation", subHeading: "Website design and creation involve planning, designing, and building a website that meets the specific needs and goals of a business. It is an important part of a digital marketing strategy and can help businesses establish their online", image1: CardImg3, image2: CardImg4, Top: "card-top cardSecondTop", Bottom: "card-bottom cardThirdBottom", navUrl: "/getaproposal", target: "#bar"
    },
    {
        id: 3, choice: "mainHead", title: "Email Marketing", subHeading: "Email marketing is the process of sending targeted and personalized emails to a list of subscribers in order to promote a business's products or services. It is an important part of a digital marketing strategy", image1: CardImg5, image2: CardImg6, Top: "card-top cardFirstTop", Bottom: "card-bottom cardSecondBottom", navUrl: "/getaproposal", target: "#bar"
    }
];



const Verticlecardgrid2 = () => {
    return (

        <>


            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-center flex-wrap">
                        {dataCollectionTop2.map((value) => {
                            return (
                                <Verticlecard
                                    key={value.id}
                                    Htitle={value.title.substring(0, 30)}
                                    Hcontent={value.subHeading.substring(0, 55) + "..."}
                                    image1={value.image1}
                                    image2={value.image2}
                                    Top={value.Top}
                                    Bottom={value.Bottom}
                                    navUrl={value.navUrl}
                                    target={value.target}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>

    );
}


export default Verticlecardgrid2;