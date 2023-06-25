import "./App.css";
import { Redirect, useParams } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";

import profilePic2 from "./static/temp_profile2.jpg";
import profilePic3 from "./static/temp_profile3.jpg";
import profilePic4 from "./static/temp_profile4.jpg";
import profilePic5 from "./static/temp_profile5.jpg";

function App() {
  let { chateeUserId } = useParams();
  // TODO replace with real data
  const friendList = [
    {
      id: "zen_master",
      profileUrl: profilePic2,
      firstName: "Frazer",
      lastName: "Kirkman",
    },
    {
      id: "super_hero",
      profileUrl: profilePic3,
      firstName: "Super",
      lastName: "Hero",
    },
    {
      id: "elon_musk",
      profileUrl: profilePic4,
      firstName: "Elon",
      lastName: "Musk",
    },
    {
      id: "mahatma_gandhi",
      profileUrl: profilePic5,
      firstName: "Mohandas",
      lastName: "G",
    },
  ];

  let currChateeData = null;
  let fallback = null;
  // This user has 0 friend
  if (friendList.length === 0) {
    // TODO make this look better
    fallback = "Add a friend!";
  }
  // No Chatee chosen, redirect to most recent conversation
  else if (chateeUserId == null) {
    fallback = <Redirect to={`/${friendList[0].id}`} />;
  }
  // A chatee is chosen
  else {
    let filtered = friendList.filter((user) => user.id === chateeUserId);
    if (filtered.length > 0) {
      currChateeData = filtered[0];
    } else {
      // The chatee is not a friend of this user. Redirect to a friend
      fallback = <Redirect to={`/${friendList[0].id}`} />;
    }
  }

  return (
    <div className="App">
      <Sidebar friendList={friendList} />
      {currChateeData == null ? (
        fallback
      ) : (
        <ChatWindow chatee={currChateeData} />
      )}
    </div>
  );
}

export default App;
