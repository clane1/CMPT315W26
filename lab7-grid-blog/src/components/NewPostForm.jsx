// This file is complete (no TODO). It uses controlled inputs via props.
export default function NewPostForm({ form, error, onChange, onImageChange, onSubmit
}) {
 const charCount = form.content.trim().length;
 return (
 <form onSubmit={onSubmit}>
 <label>
 Title
 <input
 name="title"
 value={form.title}
 onChange={onChange}
 placeholder="e.g., My first React post"
 />
 </label>
 <label>
 Author
 <input name="author" value={form.author} onChange={onChange} placeholder="Your
name" />
 </label>
 <label>
 Content
 <textarea
 name="content"
 rows="5"
 value={form.content}
 onChange={onChange}
 placeholder="Write at least 30 characters…"
 />
 <small>{charCount} characters</small>
 </label>
 <label>
 Image (optional)
 <input id="imageInput" type="file" accept="image/*" onChange={onImageChange}
/>
 </label>
 {form.imageDataUrl ? (
 <div className="preview">
 <div className="previewLabel">Preview</div>
 <img className="previewImg" src={form.imageDataUrl} alt="Preview" />
 </div>
 ) : null}
 {error ? <p className="error">{error}</p> : null}
 <button className="primary" type="submit">
 Add Post
 </button>
 </form>
 );
}