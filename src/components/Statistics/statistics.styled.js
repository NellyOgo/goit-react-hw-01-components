import styled from 'styled-components';
export const randColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};
export const StatisticSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.75) 3px 4px 8px -1px;
  margin: 20px auto;
  width: 500px;
`;

export const StatisticTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin: 10px;
`;

export const StatisticList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  padding: 0;
`;

export const StatisticListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding: 10px;
`;

export const StatisticLabel = styled.span`
  color: white;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 500;
`;

export const StatisticPercentage = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 500;
`;