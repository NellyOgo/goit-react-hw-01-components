import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 60%;
  margin: 20px auto;
  box-shadow: rgba(0, 0, 0, 0.75) 3px 4px 8px -1px;
  border-collapse: collapse;
`;

export const TransactionHistoryHead = styled.thead`
  color: #fff;
  background-color: #34d8eb;
  border: 1px solid #a6a698;
`;

export const TableRaw = styled.tr`
  &:nth-child(even) {
    background-color: #cbeaf2;
  }
`;

export const TransactionHistoryHeader = styled.th`
  font-size: 20px;
  font-weight: 700;
`;

export const TableCell = styled.td`
  padding: 8px;
  text-align: center;
  border: 1px solid #a6a698;
`;