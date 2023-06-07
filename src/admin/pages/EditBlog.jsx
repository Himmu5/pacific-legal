import { useNavigate } from 'react-router-dom';
import './EditBlog.css'
import uploadimg from '../../assets/upload.png'

function EditBlog(){
    const navigate = useNavigate();
    return(
        <>
        <div className="EditPage">
            <div className="row1">
          <h1>Editing Mode</h1>
          <div className='subrow1'>
          <button
            onClick={() => {
                navigate('/admin');
              
            }}

            style={{"backgroundColor": "#c23b22 "}}
          >
            Discard
          </button>
          <button
            onClick={() => {
                navigate("/editblog");
            }}
          >
            Save Draft
          </button>
          <button
            onClick={() => {
              navigate("/editblog");
            }}
          >
            Publish
          </button>
          </div>
        </div>

        <div className='row2'>
            <div className='thumbnail-input'>
                <img src={uploadimg} alt="" srcset="" style={{"height": "3rem"}}/>
                <h4>Click to add thumbnail</h4>
            </div>
            <div className='row2-right'>
            <div className='auth-details'>
            <h4>Author Name</h4>
                <input type='text' className='admin-title-input' placeholder='Type Name..'></input>
               <br></br>
               </div>
               <div className='date-time'>
               <h4>Published Date</h4>
                <input type='text' className='admin-title-input' placeholder='Type Date ..'></input>
                <br></br>
                <h4>Read Time</h4>
                <input type='text' className='admin-title-input' placeholder='Enter Time ..'></input>
                </div>
                </div>
            
        </div>

        <div>
            <div className='editblogtitle'>
                <h4>Blog Title</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..'></input>
            </div>
            <div className='editblogcontent'>
                <h4>Blog Content</h4>
                <textarea className='admin-bcontent-input' placeholder='Type Here..'></textarea>
            </div>


            <div className='editblogtitle'>
                <h4>Meta Title</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..'></input>
            </div>
            <div className='editblogtitle'>
                <h4>Meta Tags</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..'></input>
            </div>
            <div className='editblogcontent'>
                <h4>Meta Description</h4>
                <textarea className='admin-other-content-input' placeholder='Type Here..'></textarea>
            </div>
            <div className='editblogtitle'>
                <h4>Slugs</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..'></input>
            </div>
            <div className='editblogcontent'>
                <h4>Excrept</h4>
                <textarea className='admin-other-content-input' placeholder='Type Here..'></textarea>
            </div>
            <div className='editblogtitle'>
                <h4>Category</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..'></input>
            </div>
            <div className='editblogtitle'>
                <h4>Tags</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..'></input>
            </div>



        </div>
        </div>
        </>
    )


}

export default EditBlog;