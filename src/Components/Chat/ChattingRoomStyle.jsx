import styled from "styled-components";

export const Container = styled.div`
  background-color: #2c2f33;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`;

export const ChattingRoomContainer = styled.div`
  flex: 1;
  padding-bottom: 80px;
  /* overflow-y: auto; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0px 0px 8px #ffffff90;
  background-color: #2c2f33;
`;
export const Message = styled.div`
  font-size: 14px;
  max-width: 60%;
  padding: 10px 14px;
  border-radius: ${(props) =>
    props.left ? "0px 9px 9px 9px" : "9px 0px 9px 9px"};
  border: ${(props) =>
    props.left ? "1px solid #c4c4c4" : "1px solid #5865F2"};
  margin: ${(props) => (props.left ? "10px 20px 10px 60px" : "10px 15px")};
  background-color: ${(props) =>
    props.left ? "#ffffff" : "var(--color-purple)"};
  align-self: ${(props) => (props.left ? "flex-start" : "flex-end")};
  color: ${(props) => (props.left ? "#000" : "#fff")};

  display: flex;
  align-items: center;
  position: relative;

  span {
    font-size: 10px;
    position: absolute;
    bottom: 1px;
    right: ${(props) => (props.left ? "-28px" : "140px")};
    color: #767676;
  }

  .profile-image {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
    position: absolute;
    top: -5px;
    left: ${(props) => (props.left ? "-45px" : "auto")};
  }
`;

export const InputContainer = styled.div`
  background-color: #1f1f1f;
  display: flex;
  align-items: center;
  padding: 10px;
  /* border-top: 1px solid #e1e1e1; */

  position: fixed;
  bottom: 0;
  width: 100%;

  form {
    flex: 1;
    display: flex;
    align-items: center;
  }

  input[type="text"] {
    background-color: #1f1f1f;
    max-width: 100%;
    flex-grow: 1;
    padding: 10px;
    border-radius: 15px;
    border: none;
    margin-left: 10px;
    padding-right: 90px;
    color: #ffffff;
  }

  button {
    background-color: #1f1f1f;
    padding: 10px 30px;
    border: none;
    border-radius: 15px;
    margin-left: 10px;
    color: ${(props) => (props.inputValue ? "var(--color-purple)" : "#c4c4c4")};
  }
`;

export const ImageUploadButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  label {
    padding: 10px;
    border-radius: 100%;
    background-color: #c4c4c4;
  }
`;

export const ImageMessage = styled.div`
  max-width: 60%;
  margin: ${(props) => (props.left ? "10px 20px 10px 60px" : "10px 3px")};
  align-self: ${(props) => (props.left ? "flex-start" : "flex-end")};
  img {
    max-width: 100%;
    border-radius: ${(props) =>
      props.left ? "0px 9px 9px 9px" : "9px 0px 9px 9px"};
  }

  display: flex;
  align-items: center;
  position: relative;

  span {
    font-size: 10px;
    position: absolute;
    bottom: 1px;
    right: ${(props) => (props.left ? "-28px" : "140px")};
    color: #767676;
  }

  .profile-image {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
    position: absolute;
    top: -5px;
    left: ${(props) => (props.left ? "-45px" : "auto")};
  }
`;
