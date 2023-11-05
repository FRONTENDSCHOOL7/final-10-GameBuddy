import React, { useState, useEffect } from "react";
import * as S from "./ChattingRoomStyle";
import Header from "../Commons/Header/Header";
import Example from "../../assets/image/참쉽죠.jpg";
import imgUploadBtn from "../../assets/image/img-upload-btn.svg";
import { useParams } from 'react-router-dom';
import DummyData from './ChattingDummy'; 

function ChattingRoom() {
  const { id } = useParams();
  const roomData = DummyData.find(room => room.id === Number(id));
  
  // 채팅창에 뜨는 메세지
  const [messages, setMessages] = useState(roomData ? roomData.messages : []);
useEffect(() => {
  // useParams에서 가져온 id 값을 숫자로 변환
  const roomId = Number(id);
  // DummyData 배열에서 해당 id를 가진 객체를 찾음
  const roomData = DummyData.find(room => room.id === roomId);

  // 해당하는 데이터가 있으면 messages 상태를 업데이트
  if (roomData) {
    setMessages(roomData.messages);
  } else {
    // 찾는 데이터가 없는 경우, messages를 빈 배열로 설정
    setMessages([]);
  }
}, [id]);

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
              <label htmlFor="imageUpload">
                <img src={imgUploadBtn} alt="사진 업로드 이미지" />
              </label>
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
