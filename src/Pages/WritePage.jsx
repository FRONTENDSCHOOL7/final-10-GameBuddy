import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import RecruitDefaultImage from '../assets/image/WriteDefault.png';
import PostDefaultImage from '../assets/image/WriteDefault.png';
import Header from '../Components/Commons/Header/Header';
import axios from 'axios';

const WriteContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
  text-align: center;
  position: relative;
  font-size: 12px;
`;

const ButtonImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 78px;
  margin-left: 28px;

  img {
    margin: 6px;
  }
`;

const Button = styled.button`
  width: 85px;
  height: 24px;
  margin: 6px;
  border-radius: 44px;
  cursor: pointer;
  background-color: ${props => props.selected ? '#5865f2' : '#8EA1E1'};
  color: white;
  border: none;
  text-align: center;
  font-size: 11px;
  font-weight: 700;
`;

const ImageContainer = styled.div`
  display: block;

  h5 {
    margin-top: 12px;
    text-align: left;
    margin-left: 34px;
  }
`;

const WriteImage = styled.img`
  cursor: pointer;

  width: 322px;
  height: 204px;
  margin-top: 18px;
  margin-bottom: 30px;
`;

const WriteInput = styled.div`
  padding: 0 32px;
`;

const PTag = styled.p`
  margin: 16px 0 6px 0;
  text-align: left;
`;

const InputTag = styled.input`
  width: 100%;
  height: 23px;
  border-width: 0px 0px 1px;
  padding: 0 0 1px 0;
  font-size: 20px;

  &:focus {
    outline: none;
    border-color: #5865F2;
  }

  &::placeholder {
    color: #DBDBDB;
    font-size: 14px;
  }
`;

const SubmitBtn = styled.button`
  width: calc(100% - 18px);
  height: 39px;
  margin-top: 66px;
  border-radius: 32px;
  border: none;
  background-color: #5865f2;
  color: #ffffff;
  padding: 0 32px;
`;

export default function WritePage() {
  const [selectedImage, setSelectedImage] = useState(RecruitDefaultImage); // 모집 글 버튼에 해당하는 이미지로 초기화
  const [selectedBtn, setSelectedBtn] = useState(1); // 모집 글 버튼을 선택한 상태로 초기화
  // const [name, setName]

  const navigate = useNavigate();
  const fileInputRef = useRef();

  // 버튼 클릭 핸들러 (RecruitBtn: 1, PostBtn: 2)
  const handleButtonClick = (btn) => {
    setSelectedBtn(btn);

    // 버튼에 따른 기본 이미지 변경
    if (btn === 1) {
      setSelectedImage(RecruitDefaultImage);
    } else if (btn === 2) {
      setSelectedImage(PostDefaultImage);
    }
  };

  // 이미지 변경 핸들러
  // const handleWriteImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setSelectedImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };



  const handleWriteImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      console.log(file);
      console.log(...formData);

      try {
        const response = await axios.post('https://api.mandarin.weniv.co.kr/image/uploadfile', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log(response)
  
        if(response.data) {
          setSelectedImage(`https://api.mandarin.weniv.co.kr/${response.data.filename}`);
        }
      } catch (error) {
        console.log(error)
        if(error.response && error.response.data) {
          alert('이미지 파일만 업로드가 가능합니다.');
        } else {
          console.error(`Error: ${error}`);
        }
      }
    }
  };



  const handleWriteImageClick = () => {
    fileInputRef.current.click();
  };

  const handleClick = () => {
    navigate('/main');
  };

  return (
    <WriteContainer>
      <Header type="profileMod" />

      <ButtonImgContainer>
        <Button onClick={() => handleButtonClick(1)} selected={selectedBtn === 1}>모집글 버튼</Button>
        <Button onClick={() => handleButtonClick(2)} selected={selectedBtn === 2}>소집글 버튼</Button>
      </ButtonImgContainer>

      <ImageContainer>
        <h5>이미지 등록</h5>

        {/* <img src="/uploadFiles/1698219189961.png" alt="모집 게임 이미지" /> */}
         {/* 현재 주소 기준으로 경로가 설정되어버립니다. https://loc */}

        <WriteImage
          src={selectedImage}
          alt="모집 게임 이미지"
          onClick={handleWriteImageClick}
        />
      </ImageContainer>

      <WriteInput>
        {/* 모집글 작성하기 */}
        {selectedBtn === 1 && (
          <>
            <input
              type='file'
              onChange={handleWriteImageChange}
              ref={fileInputRef}
              accept="image/jpeg, image/png"
              style={{ display: 'none' }}
            />
            <PTag>모집 게임</PTag>
            <InputTag type="text" placeholder='2~15자 이내여야 합니다.' />

            <PTag>모집 인원</PTag>
            <InputTag type="text" placeholder='숫자만 입력 가능합니다. ' />

            <PTag>모집 상세</PTag>
            <InputTag type="text" placeholder='포지션, 티어 등 상세 내용을 입력해주세요.' />
          </>
        )}

        {/* 소통글 작성하기 */}
        {selectedBtn === 2 && (
          <>
            <input
              type='file'
              onChange={handleWriteImageChange}
              ref={fileInputRef}
              accept="image/jpeg, image/png"
              style={{ display: 'none' }}
            />

            <PTag>게시글</PTag>
            <InputTag type="text" placeholder='게시글 내용을 입력해주세요.' />
          </>
        )}
        <SubmitBtn type='submit' onClick={handleClick}>저장하기</SubmitBtn>
      </WriteInput>
    </WriteContainer>
  );
}