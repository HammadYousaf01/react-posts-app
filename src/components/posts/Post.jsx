

function Post({ title, body }) {
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