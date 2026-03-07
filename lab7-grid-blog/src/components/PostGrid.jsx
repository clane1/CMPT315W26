import PostCard from "./PostCard.jsx";

export default function PostGrid({ posts, onLike, onDislike }) {
  // This component receives:
  // - posts: an array of post objects
  // - onLike: callback from App.jsx
  // - onDislike: callback from App.jsx

  return (
    <div className="grid" id="posts">
      {posts.map((post) => (
        // TODO (PostGrid.jsx):
        // Render PostCard for each post.
        // Use key={post.id}, pass post, onLike, onDislike.
        <PostCard
          key={post.id}
          post={post}
          onLike={onLike}
          onDislike={onDislike}
        />
      ))}
    </div>
  );
}
