export default function UpdateForm({ title }) {

    return (
        <form className="row">
        <label for="exampleInputPassword1" className="form-label">{title}</label>
        <div className="mb-3 col-9">
          <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="col">
          <button type="submit" className="btn ">Update</button>
        </div>
      </form>
    )
}