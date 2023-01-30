import Verticlecard from "../Card/Vertical/Verticlecard";
import CardImg1 from "../../../image/orca asset/image 24.png";
import CardImg2 from "../../../image/orca asset/brand awarness icon.png";
import CardImg3 from "../../../image/orca asset/image 22.png";
import CardImg4 from "../../../image/orca asset/generate leeds.png";
import CardImg5 from "../../../image/orca asset/image 23.png";
import CardImg6 from "../../../image/orca asset/customers engagement.png";


const dataCollectionTop = [
    {
        id: 1, choice: "mainHead", title: "Google Ads", subHeading: "Google Ads is a pay-per-click (PPC) advertising platform", image1: CardImg1, image2: CardImg2, Top: "card-top cardFirstTop", Bottom: "card-bottom cardFirstBottom", navUrl: "/Googleads"
    },
    {
        id: 2, choice: "mainHead", title: "Social Media Advertising", subHeading: "Social media advertising is a powerful way", image1: CardImg3, image2: CardImg4, Top: "card-top cardSecondTop", Bottom: "card-bottom cardSecondBottom", navUrl: "/Sma"
    },
    {
        id: 3, choice: "mainHead", title: "Socal Media Management", subHeading: "Social media management is the process of", image1: CardImg5, image2: CardImg6, Top: "card-top cardThirdTop", Bottom: "card-bottom cardThirdBottom", navUrl: "/socialmediamanagement"
    }
];


const Verticlecardgrid = () => {
    return (

        <>


            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-center flex-wrap">
                        {dataCollectionTop.map((value) => {
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
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>

    );
}


export default Verticlecardgrid;