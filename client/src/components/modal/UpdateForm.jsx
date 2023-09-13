export default function UpdateForm({ title, onUpdate }) {

    return (
        <form className="row">
        <label htmlFor="exampleInputPassword1" className="form-label">{title}</label>
        <div className="mb-3 col-9">
          <input type="text" className="form-control" id="exampleInputPassword1" onChange={onUpdate} />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-sm btn-success">Update</button>
        </div>
      </form>
    )
}