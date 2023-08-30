import { Form, redirect } from "react-router-dom";

const NewBlog = () => {
    return (
        <div className="newblog">
          <h1>Add a new blog</h1>

          <Form method="post" action="/newblog">

            <label>
              <span>Blog title</span>
              <input type="text" name="title" autoFocus required/>
            </label>

            <label>
              <span>Blog body</span>
              <textarea name="body" cols="30" rows="10" required/>
            </label>

            <label>
              <span>Blog author</span>
              <input type="text" name="author" required/>
            </label>
            

            <button>Submit</button>

          </Form>
        </div>
      );
}

export const ContactAction = async ({request}) => {
  // this will get all the data sumited on the form
  const data = await request.formData()
  const postBlog = {
    title: data.get('title'),
    body: data.get('body'),
    author: data.get('author')
  }

  await fetch('http://localhost:3000/blogs', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(postBlog)
  })

  // the user will be taken to the homepage after submission of the form
  return redirect('/')
 
}


 
export default NewBlog;