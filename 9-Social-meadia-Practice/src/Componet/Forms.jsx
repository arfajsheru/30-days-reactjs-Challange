import { useContext, useRef } from "react";
import {PostList} from "../Store/Post-List-Store";


const Forms = () => {

  const{ addPost } = useContext(PostList);
  const postNameElement = useRef();
  const postEmailElement = useRef();
  const postPhone_NoElement = useRef();
  const postAddressElement = useRef();
  const postTagsElement = useRef();
  const postEduactionElement = useRef();

  const handleOnSubmite = (event) => {
    event.preventDefault();
    const PostName = postNameElement.current.value;
    const PostEmail = postEmailElement.current.value;
    const PostPhoneNo = postPhone_NoElement.current.value;
    const PostAddress = postAddressElement.current.value;
    const PostTags = postTagsElement.current.value.split(" ");
    const PostEducation = postEduactionElement.current.value;
    
    postNameElement.current.value = " ";
    postEmailElement.current.value = " ";
    postPhone_NoElement.current.value = " ";
    postAddressElement.current.value = " ";
    postTagsElement.current.value = " ";
    postEduactionElement.current.value = " ";
    
    addPost(PostName,PostEmail,PostPhoneNo,PostAddress,PostTags,PostEducation);
  }

  return (
    <form className="Create-post" onSubmit={handleOnSubmite}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Enter your Name
        </label>
        <input
          type="texxt"
          ref={postNameElement}
          className="form-control"
          id="name"
          placeholder="Eneter your name"
        />

        <label htmlFor="email" className="form-label">
          Enter your Email
        </label>
        <input
          type="email"
          ref={postEmailElement}
          className="form-control"
          id="eamil"
          placeholder="Eneter your email"
        />

        <label htmlFor="phone_no" className="form-label ">
          Phone Number
        </label>
        <input
          type="number"
          ref={postPhone_NoElement}
          className="form-control"
          style={{ width: "18rem" }}
          id="phone_no"
          placeholder="Eneter your Phone number"
        />
        <label htmlFor="address" className="form-label">
          Enter your current address
        </label>
        <textarea
          type="text"
          ref={postAddressElement}
          className="form-control"
          id="address"
          rows={5}
          placeholder="Eneter your adddress"
        />

        <label htmlFor="tags" className="form-label">
          Enter your hashtages here
        </label>
        <input
          type="text"
          ref={postTagsElement}
          className="form-control"
          id="text"
          placeholder="Enter your tags using space "
        />

        <label htmlFor="education" className="form-label">
          Enter your education here
        </label>
        <input
          type="text"
          ref={postEduactionElement}
          className="form-control"
          id="education"
          placeholder="Enter your education "
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default Forms;
