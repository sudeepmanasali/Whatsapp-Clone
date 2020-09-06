import React,{useEffect,useState} from 'react';
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
// import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {Avatar, IconButton} from '@material-ui/core'
import {SearchOutlined } from "@material-ui/icons";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SidebarChat from './SidebarChat'
import db from './firebase';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [rooms,setRooms] = useState([]);
    const [{user}, dispatch] = useStateValue();

    useEffect(()=>{
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot=>{
          setRooms(snapshot.docs.map(doc=>({
              id: doc.id,
              data: doc.data(),
          })))
      })
      return ()=>{
          unsubscribe();
      }
    },[]);
    return (
        <div className="sidebar">
            <div class='sidebar_header'>
            <Avatar src={user?.photoURL}/>
               
               <div className='sidebar_headerRight'>
                <IconButton >
                  <SearchIcon />
                 </IconButton>
                 <IconButton >
                  <DonutLargeIcon />
                 </IconButton>
                 <IconButton >
                  <MoreVertIcon />
                 </IconButton>
               </div>
               
            </div>
            <div className="sidebar_search">
                   <div className="sidebar_searchContainer">
                       <SearchOutlined />
                       <input type="text" placeholder="search to start chat"></input>
                   </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat />
               {rooms.map(room=>(
                   <SidebarChat key={room.id} id={room.id} name={room.data.name} />
    ))}
            </div>
        </div>
    )
}

export default Sidebar
