import styled from 'styled-components';
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 25px;
  margin: 20px auto;
  width: 300px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.75) 3px 4px 8px -1px;
`;
export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProfileImage = styled.img`
  display: block;
  width: 200px;
  height: auto;
  border-radius: 50%;
  border: 1px solid #2F4F4F;
`;
export const UserName = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin: 10px;
`;
export const UserTag = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 10px;
  color: #2F4F4F;
`;
export const UserLocation = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 10px;
  color: #2F4F4F;
`;
export const StatData = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  column-gap: 40px;
  background-color: #7FFFD4;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  font-size: 18px;
  font-weight: 600;
  color: #800000;
`;