// Helper: shorten long content so cards stay compact
function excerpt(text, max = 140) {
  if (!text) return "";
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + " ... ";
}

export default function PostCard({ post, onLike, onDislike }) {
  // Destructure post fields for convenience
  const {
    id,
    title,
    author,
    createdAt,
    content,
    imageDataUrl,
    likes,
    dislikes,
  } = post;

  return (
    <article className="card">
      {/* Optional image preview */}
      {imageDataUrl ? <img src={imageDataUrl} alt={title} /> : null}

      {/* Title + metadata */}
      <div>
        <h3 className="cardTitle">{title}</h3>

        <div className="meta">
          <span>By {author}</span>
          <span>·</span>
          <span>{createdAt}</span>
        </div>
      </div>

      {/* Shortened content */}
      <p className="cardBody">{excerpt(content)}</p>

      {/* ============================================================
          TODO (PostCard.jsx):
          Add a like/dislike action buttons block.
          ============================================================ */}
      <div className="actions">
        {/* Like button */}
        <button type="button" onClick={() => onLike(id)}>
          Like <span className="count">{likes}</span>
        </button>

        {/* Dislike button */}
        <button type="button" onClick={() => onDislike(id)}>
          Dislike <span className="count">{dislikes}</span>
        </button>
      </div>
    </article>
  );
}
