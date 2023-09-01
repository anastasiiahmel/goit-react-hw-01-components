import { styled } from 'styled-components';
export const ProfileStyle = styled.div`
  font-family: 'Montserrat';
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: #e5f4ff;
  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  text-align: center;
  padding: 15px;
  margin: 0 auto;
  margin-bottom: 30px;
  margin-top: 30px;

  .avatar {
    width: 100%;
    max-width: 200px;
    border-radius: 50%;
    background-color: #fff0f5;
  }
  .profile {
    border-radius: 10px;
    padding-top: 20px;
    background-color: #ffff;
  }
  .name {
    font-size: 30px;
    margin: 12px 0;
    color: #404040;
  }
  .tag {
    margin: 10px 0;
    font-size: 25px;
    color: #989898;
  }
  .location {
    font-size: 25px;
    margin: 12px 0;
    color: #404040;
  }
  .stats {
    list-style-type: none;
    display: flex;
    align-items: center;

    gap: 10px;
    padding: 0;
    width: 100%;
    height: 150px;
    background-color: #ffff;
  }
  .stats-title {
    display: flex;
    flex-direction: column;
    min-width: 125px;
  }
  .label {
    font-size: 20px;
    color: #989898;
    margin: 10px 0;
  }
  .quantity {
    font-size: 20px;
    color: #404040;
  }
`;
