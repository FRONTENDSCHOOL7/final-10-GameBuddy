import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Commons/Header/Header";
import Example from "../../assets/image/참쉽죠.jpg";

function ChattingRoom() {
  // 채팅창에 뜨는 메세지
  const [messages, setMessages] = useState([
    //고정 메세지를 설정
    {
      type: "text",
      content: "안녕하세요 겜하고싶어요",
      left: true, //왼쪽
      time: "14:05"
    },
    {
      type: "text",
      content: "야야 나도 끼고싶다고",
      left: true, //왼쪽
      time: "14:06"
    },
    {
      type: "text",
      content: "앙대요 지금 자리 참",
      left: false, //오른쪽
      time: "14:30"
    },
    {
      type: "image",
      content: Example,
      left: true, //왼쪽
      time: "14:31"
    }
  ]);

  // 사용자가 입력한 메세지 창
  const [inputMessage, setInputMessage] = useState("");

  // 메세지 전송 함수
  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      //inputMessage의 내용이 비어있지 않은 경우 메세지 전송
      setMessages([
        ...messages,
        {
          type: "text",
          content: inputMessage, //새로 입력하는 메세지
          left: false // 전송한 메세지는 오른쪽에 표시
        }
      ]);
      setInputMessage(""); //입력창 초기화
    }
  };

  // 전송 버튼을 눌렀을 때
  const handleFormSubmit = (event) => {
    event.preventDefault(); // 페이지 새로고침을 중단
    handleSendMessage();
  };

  // 이미지를 전송했을 때
  const handleSendImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMessages([
          ...messages,
          {
            type: "image",
            content: reader.result,
            left: false
          }
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <Header type="chat" />
      <ChattingRoomContainer>
        {messages.map((message, index) =>
          message.type === "text" ? (
            <Message key={index} left={message.left}>
              {message.left && (
                <img
                  src={Example}
                  alt="User Profile"
                  className="profile-image"
                />
              )}
              <p>{message.content}</p>
              {message.time && <span>{message.time}</span>}
            </Message>
          ) : (
            <ImageMessage key={index} left={message.left}>
              {message.left && (
                <img
                  src={Example}
                  alt="User Profile"
                  className="profile-image"
                />
              )}
              <img src={message.content} alt="Image Message" />
              {message.time && <span>{message.time}</span>}
            </ImageMessage>
          )
        )}
      </ChattingRoomContainer>
      <InputContainer inputValue={inputMessage}>
        <form onSubmit={handleFormSubmit}>
          <ImageUploadButton>
            <input
              type="file"
              accept="image/*"
              onChange={handleSendImage}
              style={{ display: "none" }}
              id="imageUpload"
            />
            <label htmlFor="imageUpload">📷</label>
          </ImageUploadButton>
          <input
            type="text"
            placeholder="메시지 입력하기..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button type="submit">전송</button>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChattingRoom;

const Container = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ChattingRoomContainer = styled.div`
  flex: 1;
  padding: 20px;
  padding-bottom: 80px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Message = styled.div`
  font-size: 14px;
  max-width: 60%;
  padding: 10px 14px;
  border-radius: ${(props) =>
    props.left ? "0px 9px 9px 9px" : "9px 0px 9px 9px"};
  border: ${(props) =>
    props.left ? "1px solid #c4c4c4" : "1px solid #5865F2"};
  margin: ${(props) => (props.left ? "10px 20px 10px 35px" : "10px 3px")};
  background-color: ${(props) => (props.left ? "#ffffff" : "#4c8bf5")};
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

const InputContainer = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #e1e1e1;

  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;

  form {
    flex: 1;
    display: flex;
    align-items: center;
  }

  input[type="text"] {
    background-color: #fff;
    flex-grow: 1;
    padding: 10px;
    border-radius: 15px;
    border: none;
    margin-left: 10px;
    color: #000000;
  }

  button {
    background-color: #fff;
    padding: 10px 30px;
    border: none;
    border-radius: 15px;
    margin-left: 10px;
    color: ${(props) => (props.inputValue ? "#5865f2" : "#c4c4c4")};
  }
`;

const ImageUploadButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  label {
    padding: 10px;
    border-radius: 100%;
    background-color: #c4c4c4;
  }
`;

const ImageMessage = styled.div`
  max-width: 60%;
  margin: ${(props) => (props.left ? "10px 20px 10px 35px" : "10px 3px")};
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
