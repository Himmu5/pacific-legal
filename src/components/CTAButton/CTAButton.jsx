import '../CTAButton/CTAButton.css'
function CTAButton({title, handleClick}){
    return(
        <button onClick={handleClick} style={{ marginLeft: "-2px" }} className=''>{title}</button>
    )

}

export default CTAButton;