import PropTypes from "prop-types";



function NotificationCard({ title, text, source }) {
  return (
    <div className="py-2 mx-1 border-bottom row">
      <div className="col-2">
        Job Posting Title
      </div>
      <div className="col-9">
        This is what just happened in order to notify you.
      </div>
      <div className="col-1 text-right">
        00:00
      </div>
    </div>
  );
}

NotificationCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  source: PropTypes.string,
};

export default NotificationCard;
