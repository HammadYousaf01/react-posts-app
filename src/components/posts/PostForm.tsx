import React, { useState } from "react";

import { useCreatePost } from "./utils";
import "./styles/form.css";

const PostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const executePost = useCreatePost();

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPostData = await executePost({
      data: {
        title,
        body,
      },
    });

    if (newPostData.status === 201) {
      e.target.submit();
    }
  };

  return (
    <div className="form-container">
      <form method="get" action="/posts" onSubmit={handleSubmit}>
        <div className="title-field-container field-container">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input title-input"
          />
        </div>
        <div className="body-field-container field-container">
          <label htmlFor="body">Body</label>
          <input
            type="text"
            id="body"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="input body-input"
          />
        </div>

        <button className="submit-btn btn">Create</button>
      </form>
    </div>
  );
};

export default PostForm;
