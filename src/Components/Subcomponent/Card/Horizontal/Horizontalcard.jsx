import Horizontalimg from "../../../../image/orca asset/image 34.png"


const Horizontalcard = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="Hrmain my-3 d-flex justify-content-center flex-wrap">
                    <div className="Hrcard caseStudy my-3">
                        <img src={Horizontalimg} alt="" class="img-fluid" />
                        <div className="content-service my-5 mx-4">
                            <h3 className="mt-1">Web development</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laudantium culpa soluta rem quam accusamus ad enim, dignissimos unde cupiditate.</p>
                        </div>
                    </div>

                    <div className="Hrcard caseStudy my-3">
                        <img src={Horizontalimg} alt="" class="img-fluid" />
                        <div className="content-service my-5 mx-4">
                            <h3 className="mt-1">Web development</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laudantium culpa soluta rem quam accusamus ad enim, dignissimos unde cupiditate.</p>
                        </div>
                    </div>
                </div>
            </div>



        </>


    )
}

export default Horizontalcard;