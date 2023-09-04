import { FriendListStyle } from 'components/FriendListItem/FriendList.styled';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) =>
(
  <FriendListStyle>
    <ul className="friend-list">
        {friends.map(({id, name, isOnline, avatar}) => (
             <FriendListItem
        key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
       />
        ))}
    </ul>
    </FriendListStyle>
)




