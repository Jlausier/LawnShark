
function MessageCard() {
    return (
<div className="modal" tabindex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal">Delete</button>
        <button type="button" class="btn btn-primary">Reply</button>
      </div>
    </div>
  </div>
</div>
    );
}

export default MessageCard;