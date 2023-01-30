import { Link } from "react-router-dom";
import Data from "./Data";
const Servicesidebar = () => {
    return (
        <>
        
                <aside className="serviceSideBar">
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            {Data.map((value) => {
                                return (
                                    <>
                                        <Datalink
                                            key={value.id}
                                            title={value.Title}
                                            linkUrl={value.linkUrl}
                                        />
                                    </>
                                )
                            })}
                        </li>
                    </ul>
                </aside>

            

        </>
    )
}

export default Servicesidebar;


const Datalink = (props) => {
    return (
        <>
            <Link to={props.linkUrl}  className="nav-link text-dark my-2 aside-link" aria-current="page">
                <svg className="bi me-2" width="16" height="16"><use href={props.linkUrl} /></svg>
                <b>{props.title}</b>
            </Link>
        </>
    )
}


// const Contentdata = (props) => {
//     return (

//         <>

//             <div className="content-service-inner">
//                 <div className="content-serv-head my-4">
//                     <h2>{props.ServHead}</h2>
//                 </div>

//                 <div className="content-serv-para">
//                     <p>{props.ServPara}</p>
//                 </div>
//             </div>



//         </>


//     )
// }

// function addActiveBtn() {
//     const btnActive = document.querySelectorAll(".aside-link");
//     const btnLength = btnActive.length;

//     for (let i = 0; i < btnLength; i++) {
//         btnActive[i].addEventListener("click", () => {
//             btnActive.classList.add("avtive");
//         })
//     }
// }
