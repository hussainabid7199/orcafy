

const Button = (props)=>{
    return(
        <>
             <div className="bannerBtn mt-5">
                    <button className={props.buttonClass}>{props.buttonName} &nbsp; <i className={props.btnIconClass}></i></button>
                </div>
        </>
    )
}

export default Button;