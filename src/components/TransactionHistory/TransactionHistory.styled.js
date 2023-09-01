import { styled } from 'styled-components';

export const TransactionHistoryStyle = styled.table`
  font-family: 'Montserrat';
  width: 100%;
  max-width: 800px;
  text-align: center;
  background-color: #e0e0e0;
  padding: 30px 20px;
  border-radius: 15px;
  font-weight: 600;
  margin-bottom: 50px;
  margin-top: 40px;
  margin: 0 auto;

  .transation-title {
    font-size: 20px;
    color: #404040;
    background-color: #ffffff;
    height: 60px;
    margin-bottom: 10px;
  }

  .transation-tbody {
    border: 2px solid #000;
    border-radius: 15px;
    font-size: 20px;
    color: #404040;
    opacity: 0.9;
    background-color: #ffffff;
  }
`;
