import NotificationCard from '../components/NotificationCard'


export default function Notifications() {

  return (
    <div className="container p-5">
      <div className="border p-4 rounded">
        <h2 className="header">Notifications</h2>
        <div className="d-flex flex-column">
           <NotificationCard /> 
        </div>
      </div>
    </div>
  );
}