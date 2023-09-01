import { useNavigate } from "react-router-dom";
import { usePostBlogMutation } from "../slices/BlogApiSlice"; 
import { useState } from 'react';

const NewBlog = () => {

  const navigate = useNavigate()

  const [ createBlog , {isLoading} ] = usePostBlogMutation()

  const [ emptyFields, setEmptyFields] = useState([])
  const [ error, setError] = useState(null)

  const submitForm = async (e) => {
    e.preventDefault();

    let formData = {
      title: e.target['title'].value,
      body: e.target['body'].value,
      aurthor: e.target['aurthor'].value
    }
    await createBlog(formData)
    .unwrap()
    .then(()=>{
      e.target.reset()
      setError(null)
      setEmptyFields([])
      return navigate('/')
    })
    .catch((error) => {
      setError(error)
      setEmptyFields(emptyFields)
    })

  }



    return (
        <div className="newblog">
          <h1>Add a new blog</h1>

          <form onSubmit={submitForm} >

            <label>
              <span>Blog title</span>
              <input 
              type="text" 
              id="title" 
              autoFocus
              className={ emptyFields.includes('title') ? 'emptyfields-error' : ''} 
              />
            </label>

            <label>
              <span>Blog body</span>
              <textarea 
              id="body" 
              cols="30" 
              rows="10"
              className={ emptyFields.includes('body') ? 'emptyfields-error' : ''} 
              />
            </label>

            <label>
              <span>Blog author</span>
              <input 
              type="text" 
              id="aurthor"
              className={ emptyFields.includes('aurthor') ? 'emptyfields-error' : ''}
               />
            </label>
            

            <button disabled={isLoading}>Submit</button>
            {isLoading && <div className="submit" >Submitting....</div>}
            {error && <div className="emptyfields-error">{error?.data?.error || error.error}</div>}

          </form>
        </div>
      );
}


 
export default NewBlog;