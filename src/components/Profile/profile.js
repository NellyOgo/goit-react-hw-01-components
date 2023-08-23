import {StatItem, StatData, UserLocation, UserTag, UserName, ProfileDescription, ProfileContainer, ProfileImage } from './profile.styled'
export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
    <ProfileContainer>
  <ProfileDescription>
    <ProfileImage
      src={avatar}
      alt={username}
    />
                <UserName>{username}</UserName>
                <UserTag>@{tag}</UserTag>
    <UserLocation>{location}</UserLocation>
  </ProfileDescription>

  <StatData>
    <StatItem>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </StatItem>
    <StatItem>
      <span>Views</span>
      <span>{stats.views}</span>
    </StatItem>
    <StatItem>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </StatItem>
  </StatData>
</ProfileContainer>
)}