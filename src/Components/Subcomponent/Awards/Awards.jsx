// import "../awards/Awards.css";
import Icon from "./Icon";
import badgeCertificate from "../../../image/awards/badge-certified-agency-02-1.png";
import globeCanadas from "../../../image/awards/Globe-Canadas-Top-Growing-Companies-Heffco-Elastomers.png";
import goldHorizontal from "../../../image/awards/gold-horizontal-color.png";
import greatPlace from "../../../image/awards/Great-Place-to-Work-Certification-Badge-November-2021.png";
import mbpBadge from "../../../image/awards/MBP-Badge-Dark-backgrounds@4x.png";
import partnerBadge from "../../../image/awards/Partner-Badges-2022-Partner.png";
import premierBadge from "../../../image/awards/impactBadge.png";
import impactBadge from "../../../image/awards/PremierBadgeClickable.svg";



const awardIcon = [
    {
        id: "img1", icon: badgeCertificate
    },
    {
        id: "img2", icon: globeCanadas
    },
    {
        id: "img3", icon: goldHorizontal
    },
    {
        id: "img4", icon: greatPlace
    },
    {
        id: "img5", icon: impactBadge
    },
    {
        id: "img6", icon: mbpBadge
    },
    {
        id: "img7", icon: partnerBadge
    },
    {
        id: "img8", icon: premierBadge
    }
    
];

const Awards = () => {

    return (
        <>
                <div className="grid container text-center d-flex justify-content-center pt-3 pb-5">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <div className="items">
                                {awardIcon.map((imgValue) => {
                                    return (
                                        <Icon iconUrl={imgValue.icon} id={imgValue.id} />
                                    )
                                })}
                            </div>
                            </div>
                        </div>
                    </div>
        </>


    )
}




export default Awards;