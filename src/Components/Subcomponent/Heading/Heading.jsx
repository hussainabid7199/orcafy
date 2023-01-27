

const Heading = (props) => {
  return (

    <>
      <div className="container-fluid my-5 heading-main">
        <div className="course-discrip-title my-1">
          <div className="name d-flex">
            <span className="line-bar"></span><h2>{props.Heading}</h2>
          </div>
        </div>
        <div className="titleCourse my-2">
          <h1>{props.Subheading}</h1>
        </div>
      </div>
      {/* About Course Detail  */}

    </>
  );
}

export default Heading;