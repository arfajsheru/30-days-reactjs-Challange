import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Post-List-Store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList ,addInitialPosts} = useContext(PostListData);

  const handleGetPostsClick = () => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data) => {
      addInitialPosts(data.posts);
    });
  };

  return (
    <>
    {postList.length === 0 && <WelcomeMessage onGetPostsClick={handleGetPostsClick} />}
    <div className="conatiner-item">
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
    </>
  );
};

export default PostList;
