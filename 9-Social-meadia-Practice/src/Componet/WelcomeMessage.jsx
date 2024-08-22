const WelcomeMessage = ({ onGetPostsClick }) => {
    return (
      <div className="text-black px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-black">There are no posts</h1>
          <button onClick={onGetPostsClick} type="button" className="btn btn-primary">
            Get posts form server
          </button>
        </div>
      </div>
    );
  };
  
  export default WelcomeMessage;
  