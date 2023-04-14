import '../Areas/Areas.css'
function Areas(props){
    const url = props.url;
    const title = props.title;
    return(
       <>
       <div className='areatile' style={{"backgroundImage": "url("+url+")"}}>
        <h3 className='areatitle'>{title}</h3>
       </div>
       </>
    )


}

export default Areas;