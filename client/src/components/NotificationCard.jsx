import PropTypes from "prop-types";

function NotificationCard({ title, text, source }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{text}</p>
          <footer className="blockquote-footer">
            FROM <cite title="Source Title">{source}</cite>
          </footer>
        </blockquote>
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
