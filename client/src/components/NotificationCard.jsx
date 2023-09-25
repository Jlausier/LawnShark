import PropTypes from "prop-types";

function NotificationCard({ title, text, source }) {
  return (
    <div className="py-2 mx-1 border-bottom row">
      <div className="col-2">{title}</div>
      <div className="col-9">{text}</div>
      <div className="col-1 text-right">{source}</div>
    </div>
  );
}

NotificationCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  source: PropTypes.string,
};

export default NotificationCard;
