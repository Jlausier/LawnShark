import NotificationCard from "../../components/NotificationCard";
import { notification } from "../../utils/testData";

export default function Notifications() {
  return (
    <div className="container">
      <div className="border p-4 rounded">
        <h2 className="header mb-5">Notifications</h2>
        <div className="d-flex flex-column border-top">
          <NotificationCard {...notification} />
        </div>
      </div>
    </div>
  );
}
