import logoWallet from "../../../image/orca asset/wallet.png";
import logoRocket from "../../../image/orca asset/rocket_launch.png";
import logoCellular from "../../../image/orca asset/signal_cellular_alt.png";
import Servicecard from "./Servicecard";


const serviceData = [
    {
        key: 1,
        serviceContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quod voluptates nobis veritatis perspiciatis in adipisci animi tenetur rerum? Ducimus quae tempora fuga maxime ab consectetur quam beatae quibusdam sint.",
        serviceImage: logoWallet
    },
    {
        key: 2,
        serviceContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quod voluptates nobis veritatis perspiciatis in adipisci animi tenetur rerum? Ducimus quae tempora fuga maxime ab consectetur quam beatae quibusdam sint.",
        serviceImage: logoRocket
    },
    {
        key: 3,
        serviceContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quod voluptates nobis veritatis perspiciatis in adipisci animi tenetur rerum? Ducimus quae tempora fuga maxime ab consectetur quam beatae quibusdam sint.",
        serviceImage: logoCellular
    }
]

const Servicegrid = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-center flex-wrap">
                        
                        {serviceData.map((value)=>{

                            return   <Servicecard 
                                // key={value.key}
                                serviceLogo={value.serviceImage}
                                serviceContent={value.serviceContent.substring(0, 140)+"..."}
                            />

                        })}
                        
                        
                        
                    </div>
                </div>
            </div>




        </>




    )
}

export default Servicegrid;