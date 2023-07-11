import React from "react";

interface Props {
  title: string,
  body: string
}

const Post: React.FC<Props> = ({ title, body }) => {
  return (
    <div className="post">
      <div className="post-title">
        {title}
      </div>
      <div className="post-body">
        {body}
      </div>
    </div>
  )
}

export default Post;