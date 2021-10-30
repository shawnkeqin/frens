import React from "react";
import { StreamChat } from "stream-chat";
import { ChannelList, Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelListContainer, ChannelContainer, Auth } from "./components";
import "./App.css";
const apiKey = "pxwyvdks32vu";

const client = StreamChat.getInstance(apiKey);

const authToken = false; 

const App = () => {
  if (!authToken) return <Auth />
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="theme light">
        <ChannelListContainer></ChannelListContainer>
        <ChannelContainer></ChannelContainer>
      </Chat>
    </div>
  );
};

export default App;
