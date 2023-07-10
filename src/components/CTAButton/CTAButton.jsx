import '../CTAButton/CTAButton.css'

function CTAButton({title, handleClick}){
    return(
        <button onClick={handleClick}  className=''>{title}</button>
    )

}

export default CTAButton;