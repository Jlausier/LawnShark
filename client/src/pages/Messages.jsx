// import MessageCard from '../components/MessageCard'
// import MessageConversation from '../components/MessageConversation'

export default function Messages() {

    return (
      <div className="container p-5">
        <h2 className="mb-5 fs-1">Messages</h2>
        <div className="row">
          <div className=" pe-2 col-lg-4">
            // MessageCard goes here
            {/* <MessageCard /> */}
         </div>
          <div className=" col-lg-8">
            // Message Conversation goes here
            {/* <MessageConversation /> */}
          </div>
        </div>
      </div>
    );
}