const RenderPosts = ({ post }) => {
  return (
    <div className="max-w-md mx-auto my-5 overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            {post.username}
          </div>
          <a
            href={post.link}
            className="block mt-1 text-lg font-medium leading-tight text-black hover:underline"
          >
            {post.title}
          </a>
          <p className="mt-2 text-gray-500">{post.excerpt}</p>
          {post.image && (
            <img src={post.image} alt="" className="w-full mt-4" />
          )}
          <div className="mt-4">
            <span className="font-bold">{post.likes}</span> likes |
            <span className="font-bold"> {post.comments}</span> comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderPosts;
