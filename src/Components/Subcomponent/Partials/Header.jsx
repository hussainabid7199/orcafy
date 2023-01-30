// import  Navbar, {Navigationactive} from "../Navbar/Navbar";
import BrandLogo from "../../../image/brandLogo/logo4.png";
import { NavLink } from "react-router-dom";





const navActiveBtnToggle = () => {
    document.querySelector(".navBtnIcon").classList.toggle("change");
    document.querySelector(".sideBar").classList.toggle("sideBarActive");
    document.querySelector(".outer").classList.toggle("outerActive");
}

// const navigationListBtn = () =>{
//     document.querySelectorAll(".nav-link").classList.toggle("active");
// }

const navigationOnScroll = () => {
    document.querySelector(".navBtnIcon").classList.remove("change");
    document.querySelector(".sideBar").classList.remove("sideBarActive");
    document.querySelector(".outer").classList.remove("outerActive");
}

window.onscroll = navigationOnScroll



// if (routData === "/service") {
//     // document.getElementById("bar").style.color = "white";
//     document.getElementById("bar").style.color = "red";
// }

// const navBtn = () => {
//     const routData = window.location.pathname;
//     console.log(routData);
    
//     if(routData === "/service"){
//         document.getElementById("bar").style.color = "red";
//     }
// }
// navBtn();
// const locationToggle = () => {
//     const currentLocation = window.location.href;
//     console.log(currentLocation);
//     const menuItem = document.querySelectorAll("a");
//     const menuLength = menuItem.length;
//     console.log(menuLength);

//     for(let i = 0; i<menuLength; i++){
//         if(menuItem[i].pathname === currentLocation){
//             menuItem[i].className = "active";
//         }
//     }

// }

// locationToggle()






const Header = () => {

    return (


        <>
            <div className="headerComponent d-flex justify-content-between container-fluid">
                <div className="brandIconInner">
                    <img src={BrandLogo} alt="" className="brandImage" />
                </div>
                <div className="navigationActiveBtn">
                    <div className="navBtnIcon" onClick={navActiveBtnToggle}>
                        <div className="bar1" id="bar"></div>
                        <div className="bar2" id="bar"></div>
                        <div className="bar3" id="bar"></div>
                    </div>
                </div>
            </div>




            {/* ======= Side NavBar ======= */}

            <aside className="d-flex justify-content-end outer" onClick={navActiveBtnToggle}>
                <div className="sideBar d-flex flex-column flex-shrink-0 p-3">
                    <div className="navbrand d-flex justify-content-center mt-5">
                        <div className="navbarInner">
                            <img src={BrandLogo} alt="" className="brandImage" />
                        </div>
                    </div>
                    <ul className="nav nav-pills flex-column mb-auto mx-3">
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link text-dark" aria-current="page">
                                <svg className="bi me-2" width="16" height="16"><use href="#home" /></svg>
                                <b>Home</b>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/service"} className="nav-link text-dark">
                                <svg className="bi me-2" width="16" height="16"><use href="#speedometer2" /></svg>
                                <b>Service</b>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/casestudy"} className="nav-link text-dark">
                                <svg className="bi me-2" width="16" height="16"><use href="#table" /></svg>
                                <b>Case Study</b>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/aboutus"} className="nav-link text-dark">
                                <svg className="bi me-2" width="16" height="16"><use href="#grid" /></svg>
                                <b>About Us</b>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contactus"} className="nav-link text-dark">
                                <svg className="bi me-2" width="16" height="16"><use href="#people-circle" /></svg>
                                <b>Contact Us</b>
                            </NavLink>
                            {/* <use xNavLink:href="#people-circle" /> */}
                        </li>
                    </ul>
                    <hr />
                    <div className="container-fluid text-black border-top py-4 brandBottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center text-md-left mb-3 mb-md-0 d-flex justify-content-center">
                                    <p className="m-0 d-flex">&copy;&nbsp;<a href="/"><b>Orcafy</b></a>&nbsp;<b>All Rights Reserved.</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </aside>


            {/* ======= Side NavBar ======= */}
        </>
    )
}

export default Header;




