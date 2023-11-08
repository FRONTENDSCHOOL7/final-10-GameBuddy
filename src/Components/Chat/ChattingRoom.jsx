import React, { useState } from "react";
import * as S from "./ChattingRoomStyle";
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
    <S.Container>
      <Header type="chat" />
      <S.ChattingRoomContainer>
        {messages.map((message, index) =>
          message.type === "text" ? (
            <S.Message key={index} left={message.left}>
              {message.left && (
                <img
                  src={Example}
                  alt="User Profile"
                  className="profile-image"
                />
              )}
              <p>{message.content}</p>
              {message.time && <span>{message.time}</span>}
            </S.Message>
          ) : (
            <S.ImageMessage key={index} left={message.left}>
              {message.left && (
                <img
                  src={Example}
                  alt="User Profile"
                  className="profile-image"
                />
              )}
              <img src={message.content} alt="Image Message" />
              {message.time && <span>{message.time}</span>}
            </S.ImageMessage>
          )
        )}
        <S.InputContainer inputValue={inputMessage}>
          <form onSubmit={handleFormSubmit}>
            <S.ImageUploadButton>
              <input
                type="file"
                accept="image/*"
                onChange={handleSendImage}
                style={{ display: "none" }}
                id="imageUpload"
              />
              <label htmlFor="imageUpload">📷</label>
            </S.ImageUploadButton>
            <input
              type="text"
              placeholder="메시지 입력하기..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button type="submit">전송</button>
          </form>
        </S.InputContainer>
      </S.ChattingRoomContainer>
    </S.Container>
  );
}

export default ChattingRoom;
