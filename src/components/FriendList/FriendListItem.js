import {FriendItem, FriendStatus, FriendImage, FriendName} from './friendList.styled'
export default function FriendListItem({ avatar, name, isOnline }) {
  return (

    <>
      <FriendItem><FriendStatus
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></FriendStatus>
      <FriendImage src={avatar} name={name} width="48" />
      <FriendName>{name}</FriendName></FriendItem>

    </>
  );
}