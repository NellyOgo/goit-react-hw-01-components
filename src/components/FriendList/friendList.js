import FriendListItem from './FriendListItem';
import {
  FriendListWrapper
} from './friendList.styled.js';

export const Friendlist = ({ friends }) => {
  return (
    <FriendListWrapper>
      {friends.map(({ avatar, name, isOnline, id }) => (
<FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>


      ))}
    </FriendListWrapper>
  );
};