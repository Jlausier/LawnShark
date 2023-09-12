import MessageCard from '../components/message/MessageCard'
import MessageConversation from '../components/message/MessageConversation'

export default function Messages() {

    return (
      <div className="container p-5">
        <div className="border p-4 rounded">
          <h2 className="mb-5 fs-1">Messages</h2>
          <div className="row">
            <div className=" pe-2 col-lg-4">
             <MessageCard/> 
          </div>
            <div className=" col-lg-8">
              
               <MessageConversation />
            </div>
          </div>
        </div>
      </div>
    );
}