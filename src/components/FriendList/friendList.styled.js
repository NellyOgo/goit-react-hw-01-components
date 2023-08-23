import styled from 'styled-components';
export const FriendListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
`;
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: raw;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.75) 3px 4px 8px -1px;
  width: 200px;
  height: 70px;
  border-radius: 10px;
  gap: 15px;
`;
export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0;
  display: flex;
  justify-content: start;
`;
export const FriendImage = styled.img`
  border-radius: 10px;
  padding: 10px;
`;
export const FriendName = styled.p`
  display: flex;
  justify-content: start;
  font-size: 20px;
  font-weight: 500;
`;