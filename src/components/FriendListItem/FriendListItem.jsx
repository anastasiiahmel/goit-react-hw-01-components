import { online, offline } from './FriendList.styled';

export const FriendListItem = ({ name, avatar, isOnline }) => (

 <li  className="item" >
            <span className={`status ${isOnline ? online : offline}`}></span>
            <img className="avatar" src={avatar} alt={name} />
            <p className="name">{name}</p>
    </li>

);