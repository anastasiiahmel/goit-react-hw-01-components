import { styled } from 'styled-components';
export const online = 'online';
export const offline = 'offline';
export const FriendListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: #e5f4ff;
  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 600;
  padding: 15px;
  margin: 0 auto;
  margin-bottom: 30px;
  margin-top: 30px;

  .item {
    min-width: 300px;
    height: auto;
    border-radius: 10px;
    list-style: none;
    display: flex;
    align-items: center;
    width: 200px;
    padding: 10px;
    background-color: #ffff;
    margin-top: 10px;
    box-shadow: 2px 5px 16px 0px #0b325e, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  }
  .avatar {
    width: 50px;
    margin-right: 30px;
  }
  .name {
    color: #505050;
    font-weight: 800;
  }
  .online {
    margin-right: 20px;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: green;
  }

  .offline {
    margin-top: 10px;
    margin-right: 20px;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
  }
`;
