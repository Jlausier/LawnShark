export default function UpdateForm({ title, onUpdate }) {
    return (
        <form className="row">
        <label htmlFor={title} className="form-label">{title}</label>
        <div className="mb-3 col-9">
          <input type="text" className="form-control" id={title} name={title} onChange={onUpdate} />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-sm btn-success">Update</button>
        </div>
      </form>
    )
}
