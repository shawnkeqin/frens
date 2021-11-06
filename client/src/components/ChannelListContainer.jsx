import React, { useState } from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { appointmentActions } from "../app/store";
import { useDispatch } from "react-redux";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import FrensIcon from '../assets/frens.png'
import LogoutIcon from '../assets/logout.png'
import FeedbackIcon from '../assets/feedback.png'

const cookies = new Cookies();

const SideBar = ({ logout }) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={FrensIcon} alt="Hospital" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
            <a href="https://docs.google.com/forms/d/1_5XK2CTdHkLvwPmkCJ5MeRynlLH6rNd7QfYA8-dIX2E/prefill"> <img src={FeedbackIcon} alt="Feedback" width="30" /></a>           
            </div>
        </div>
    </div>
);

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Frens</p>
    </div>
)

const customChannelTeamFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'team');
}

const customChannelMessagingFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'messaging');
}

const ChannelListContent = ({ isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) => {
    const { client } = useChatContext();
    const dispatch = useDispatch();
    let id = 0; 
    //regex engine // 
    const setApptTime = (arr) => {
        arr.map(item => {
        var extractTime = '';
        var extractPlace = '';
        var extractDate = ''; 
            if(/time/.test(item.text)){
                var matchTime = item.text.match(/[time:]/gi);
                var firstIndexTime = item.text.indexOf(matchTime[0]);
                extractTime = item.text.substring(firstIndexTime,item.text.indexOf(',')); 
               
                    
            }
            if(/place/.test(item.text)){
                const searchTerm = ',';
                const indexOfFirst = item.text.indexOf(searchTerm);
                const lastIndexPlace = item.text.indexOf(searchTerm, (indexOfFirst + 1))
                  extractPlace = item.text.substring(indexOfFirst,lastIndexPlace); 
            }
            if(/date/.test(item.text)){
                const searchTerm = 'date';
                const indexOfFirst = item.text.indexOf(searchTerm);
                const lastIndexDate = item.text.indexOf('.');
                extractDate = ', '+ item.text.substring(indexOfFirst,lastIndexDate); 
            }
            let obj = {}; 
            const res = extractTime + extractPlace  + extractDate; 
            id++; 
            obj["id"] = id;
            obj["details"] = res;
            obj["attendance"] = 0; 
            console.log(res);
            dispatch(appointmentActions.setAppointmentTime(obj));
        }

        
        )
        
      };

 
    if(client){
        let combinedArray = []; 
        Object.keys(client.activeChannels).map(key => {
            if(key){
                combinedArray.push(...client.activeChannels[key]?.state?.messages);
               
        }
        })
        const uniq = [...new Set(combinedArray)];
        setApptTime(uniq);
      
    }
    const logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload();
    }

    const filters = { members: { $in: [client.userID] } };

    return (
        <>
            <SideBar logout={logout} />
            <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch setToggleContainer={setToggleContainer} />
                <ChannelList 
                    filters={filters}
                    channelRenderFilterFn={customChannelTeamFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="team"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="team"
                        />
                    )}
                />
                <ChannelList 
                    filters={filters}
                    channelRenderFilterFn={customChannelMessagingFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="messaging"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>
    );
}

const ChannelListContainer = ({ setCreateType, setIsCreating, setIsEditing }) => {
    const [toggleContainer, setToggleContainer] = useState(false);

    return (
        <>
            <div className="channel-list__container">
              <ChannelListContent 
                setIsCreating={setIsCreating} 
                setCreateType={setCreateType} 
                setIsEditing={setIsEditing} 
              />
            </div>

            <div className="channel-list__container-responsive"
                style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff"}}
            >
                <div className="channel-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
                </div>
                <ChannelListContent 
                setIsCreating={setIsCreating} 
                setCreateType={setCreateType} 
                setIsEditing={setIsEditing}
                setToggleContainer={setToggleContainer}
              />
                         
            </div>
        </>
    )

}

export default ChannelListContainer;