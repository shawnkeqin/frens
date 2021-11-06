import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";

import { UserList } from "./";

import { CloseCreateChannel } from "../assets";
import { initialState } from "stream-chat-react/dist/components/Channel/channelState";

const ChannelNameInput = ({ channelName = "", setChannelName }) => {
  const { client, setActiveChannel } = useChatContext();
  const [selectedUsers, setSelectedUsers] = useState([client.userID || ""]);

  const handleChange = (event) => {
    event.preventDefault();
    setChannelName(event.target.value);
  };
  return (
    <div className="channel-name-input__wrapper">
      <p>Name</p>
      <input
        value={channelName}
        onChange={handleChange}
        placeholder="Group Name"
      ></input>
      <p>Add Members</p>
    </div>
  );
};

const CreateChannel = ({ createType, setIsCreating }) => {
  const { client, setActiveChannel } = useChatContext();
  const [selectedUsers, setSelectedUsers] = useState([client.userID || ""]);
  const [channelName, setChannelName] = useState(undefined);
  const [type, setChatType] = useState("");
  
  const createChannel = async (e) => {
  
  if (createType === 'team' && !channelName) {
    alert('Group Name cannot be empty!')
  }else{
    createGroup(e);
  }
}

  const createGroup = async (e) => {
    e.preventDefault();
    try {
      const newChannel = await client.channel(createType, channelName, {
        name: channelName,
        members: selectedUsers,
      });

      await newChannel.watch();

      setChannelName("");
      setIsCreating(false);
      setSelectedUsers([client.userID]);
      setActiveChannel(newChannel);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-channel__container">
      <div className="create-channel__header">
        <p>
          {createType === "team"
            ? "Create a New Group"
            : "Send a direct Message"}
        </p>
        <CloseCreateChannel setIsCreating={setIsCreating} />
      </div>
      {createType === "team" && (
        <ChannelNameInput
          channelName={channelName}
          setChannelName={setChannelName}
        />
      )}
      <UserList setSelectedUsers={setSelectedUsers} />
      <div className="create-channel__button-wrapper" onClick={createChannel}>
        <p>
          {createType === "team" ? "Create Group" : "Start Chat"}
        </p>
      </div>
    </div>
  );
};

export default CreateChannel;
