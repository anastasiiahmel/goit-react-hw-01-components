import { styled } from 'styled-components';

export const StatisticsStyle = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: #e0e0e0;
  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 600;
  padding: 15px;
  margin: 0;
  margin: 0 auto;

  .title {
    background-color: #ffffff;
    padding: 20px 0px;
    width: 500px;
    border-radius: 20px;
  }
  .item {
    display: flex;
    flex-direction: column;
  }
  .stat-list {
    display: flex;
    justify-content: center;
    gap: 35px;
  }
  .label {
    margin-bottom: 5px;
    background-color: #ffffff;
    color: #989898;
    padding: 10px;
    border-radius: 20px;
  }
  .percentage {
    color: #989898;
  }
`;
