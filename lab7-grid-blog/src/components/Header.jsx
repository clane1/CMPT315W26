/*
  TODO (Header.jsx):
  Create the entire Header component.

  Requirements:
  - Show the site title and a one-sentence description.
  - Show summary numbers: totalPosts, totalLikes, totalDislikes.
*/

export default function Header({ totalPosts, totalLikes, totalDislikes }) {
  // This component receives numbers from App.jsx via props.
  // It does NOT manage state — it only displays information.

  return (
    <header className="header">
      {/* Left side: Title + description */}
      <div>
        <h1>GridBlog</h1>
        <p>A mini React blog using class-based state and CSS Grid.</p>
      </div>

      {/* Right side: Stats summary */}
      <div className="headerStats">
        <div>Total posts: {totalPosts}</div>
        <div>Total likes: {totalLikes}</div>
        <div>Total dislikes: {totalDislikes}</div>
      </div>
    </header>
  );
}
