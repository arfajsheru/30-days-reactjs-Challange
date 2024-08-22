import { useContext } from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { PostList } from "../Store/Post-List-Store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  // Ensure post.tags is an array
  const tags = Array.isArray(post?.tags) ? post.tags : [];

  return (
    <div className="card postList" style={{ width: "30rem" }}>
      <div className="card-body post">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
            onClick={() => deletePost(post.id)}
          >
            <FcDeleteDatabase />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <h5 className="card-title">{post.userId}</h5>
        <p className="card-text">{post.body}</p>
        <div className="p-3 bg-dark bg-gradient text-danger border-info border-start-0 rounded-end">
          This post has been reacted by Likes: {post.reactions} and DisLikes: People
        </div>
        {tags.map((tag) => (
          <span key={tag} className="badge text-bg-info hashtag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Post;
