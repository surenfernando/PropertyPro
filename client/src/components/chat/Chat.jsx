import "./chat.scss";
import { userData } from "../../lib/dummyData"; //Dummy data
import { useState } from "react";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src={userData.img} alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit...</p>
        </div>

        <div className="message">
          <img src={userData.img} alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit...</p>
        </div>

        <div className="message">
          <img src={userData.img} alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit...</p>
        </div>

        <div className="message">
          <img src={userData.img} alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit...</p>
        </div>

        <div className="message">
          <img src={userData.img} alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit...</p>
        </div>

        <div className="message">
          <img src={userData.img} alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit...</p>
        </div>

        <div className="message">
          <img src={userData.img} alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit...</p>
        </div>
      </div>

      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={userData.img} alt="" />
              John Doe
            </div>

            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>

          <div className="center">
            <div className="chatMessage">
              <p>Random message</p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage own">
              <p>Random message</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
