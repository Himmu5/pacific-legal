import '../CTAButton/CTAButton.css'
function CTAButton({title, handleClick}){
    return(
        <button onClick={handleClick}>{title}</button>
    )


}

export default CTAButton;