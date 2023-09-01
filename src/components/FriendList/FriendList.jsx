import { FriendListStyle } from './FriendList.styled';
import { online, offline } from './FriendList.styled';

export const FriendList = ({friends}) => (
    <FriendListStyle>
        {friends.map(({id, name, isOnline, avatar}) => (
        <li key={id} className="item" >
            <span className={`status ${isOnline ? online : offline}`}></span>
            <img className="avatar" src={avatar} alt={name} />
            <p className="name">{name}</p>
        </li>
        ))}
    </FriendListStyle>
);
