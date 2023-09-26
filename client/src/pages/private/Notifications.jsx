import { nanoid } from "nanoid";
import NotificationCard from "../../components/NotificationCard";
import { notifications } from "../../utils/testData";

export default function Notifications() {
  return (
    <div className="container">
      <div className="border p-4 rounded">
        <h2 className="header mb-5">Notifications</h2>
        <div className="d-flex flex-column border-top">
          {notifications.map((notification) => (
            <NotificationCard {...notification} key={nanoid()} />
          ))}
        </div>
      </div>
    </div>
  );
}
