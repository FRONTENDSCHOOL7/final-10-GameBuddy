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

const WriteFormWrapper = styled.div`
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

const Warning = styled.p`
  color: #ff0000;
  text-align:left;
  font-size: 12px;
  margin-top: 4px;
`;

export default function WritePage() {
  const [selectedImage, setSelectedImage] = useState(RecruitDefaultImage);
  // 모집 글 버튼에 해당하는 이미지로 초기화
  const [selectedBtn, setSelectedBtn] = useState(1);
  // 모집 글 버튼을 선택한 상태로 초기화
  // const [name, setName]

  const [recruitGame, setRecruitGame] = useState('');
  const [recruitPeople, setRecruitPeople] = useState('');
  const [recruitDetail, setRecruitDetail] = useState('');
  const [postContent, setPostContent] = useState('');

  const [isGameTitleValid, setIsGameTitleValid] = useState(true);
  const [isPeopleValid, setIsPeopleValid] = useState(true);
  const [isDetailValid, setIsDetailValid] = useState(true);
  const [isContentValid, setIsContentValid] = useState(true);

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
          // alert('지원되지 않는 파일 형식입니다. 이미지 파일을 선택해주세요.');
          alert(`Error: ${error.response.data.message}`);
        } else {
          console.error(`Error: ${error}`);
        }
      }
    }
  };


  // 저장하기 버튼 모집 / 소통 글
  const handlePostSubmit = async () => {
    let product = {};
    if (selectedBtn === 1) { 
      // if (!recruitGame || !recruitPeople || !recruitDetail || recruitPeople < 1 || !postContent) {
      //   alert('필수 입력사항을 입력해주세요.');
      //   return;
      // }
      product = {
        product: {
          itemImage: selectedImage,
          itemName: recruitGame, 
          price: parseInt(recruitPeople), 
          link: recruitDetail
          
        }
      };
    } else if (selectedBtn === 2) {
      // if (!postContent) {
      //   alert('필수 입력사항을 입력해주세요.');
      //   return;
      // }
      product = {
        product: {
          itemImage: selectedImage,
          itemName: postContent
          
        }
      };
    }

    // localStorage에서 토큰을 가져옵니다.
    const token = localStorage.getItem('token');
  
    try {
      const response = await axios.post('https://api.mandarin.weniv.co.kr/product', product, {
      headers: {
        "Authorization" : `Bearer ${token}`, 
        "Content-type" : "application/json"
        }
      });

      console.log(response)  
  
      if(response.status === 200) {
        console.log('서버 응답: ', response);
        alert('게시글이 성공적으로 등록되었습니다.');
        navigate('/main');
      }
    } catch (error) {
      console.error('서버 오류: ', error.response);
      if(error.response && error.response.data) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert('게시글 등록에 실패했습니다.');
      }
    }
};



  // const onChangeRecruitGame = (e) => {
  //   const recruitGame = e.target.value;
  //   console.log("모집 게임: ", recruitGame);
  //   if(recruitGame.length < 2 || recruitGame.length > 15) {
  //     setIsGameTitleValid(false);
  //   } else {
  //     setIsGameTitleValid(true);
  //   }
  //   setRecruitGame(recruitGame);
  // };

  const onChangeRecruitGame = (e) => {
    try {
      const recruitGame = e.target.value;
      console.log("모집 게임: ", recruitGame);
      if(recruitGame.length < 2 || recruitGame.length > 15) {
        setIsGameTitleValid(false);
      } else {
        setIsGameTitleValid(true);
      }
      setRecruitGame(recruitGame);
    } catch (error) {
      console.error('모집 게임 입력 오류: ', error);
    }
  };
  

  // const onChangeRecruitPeople = (e) => {
  //   const recruitPeople = e.target.value;
  //   console.log("모집 인원: ", recruitPeople);
  //   if(!/^\d+$/.test(recruitPeople)) { 
  //     setIsPeopleValid(false);
  //   } else {
  //     setIsPeopleValid(true);
  //   }
  //   setRecruitPeople(recruitPeople);
  // };

  const onChangeRecruitPeople = (e) => {
    try {
      const recruitPeople = e.target.value;
      console.log("모집 인원: ", recruitPeople);
      if(!/^\d+$/.test(recruitPeople)) {
        setIsPeopleValid(false);
      } else {
        setIsPeopleValid(true);
      }
      setRecruitPeople(recruitPeople);
    } catch (error) {
      console.error('모집 인원 입력 오류: ', error);
    }
  };
  

  // const onChangeRecruitDetail = (e) => {
  //   const recruitDetail = e.target.value;
  //   console.log("모집 상세: ", recruitDetail);
  //   if(recruitDetail === '') { 
  //     setIsDetailValid(false);
  //   } else {
  //     setIsDetailValid(true);
  //   }
  //   setRecruitDetail(recruitDetail);
  // };

  const onChangeRecruitDetail = (e) => {
    try {
      const recruitDetail = e.target.value;
      console.log("모집 상세: ", recruitDetail);
      if(recruitDetail === '') { 
        setIsDetailValid(false);
      } else {
        setIsDetailValid(true);
      }
      setRecruitDetail(recruitDetail);
    } catch (error) {
      console.error('모집 상세 입력 오류: ', error);
    }
  };

  // const onChangePostContent = (e) => {
  //   const postContent = e.target.value;
  //   console.log("게시글: ", postContent);
  //   if(postContent === '') {
  //     setIsContentValid(false);
  //   } else {
  //     setIsContentValid(true);
  //   }
  //   setPostContent(postContent);
  // };

  const onChangePostContent = (e) => {
    try {
      const postContent = e.target.value;
      console.log("게시글: ", postContent);
      if(postContent === '') {
        setIsContentValid(false);
      } else {
        setIsContentValid(true);
      }
      setPostContent(postContent);
    } catch (error) {
      console.error('게시글 입력 오류: ', error);
    }
  };
  







  const handleWriteImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <WriteContainer>
      <Header type="profileMod" />

      <ButtonImgContainer>
        <Button onClick={() => handleButtonClick(1)} selected={selectedBtn === 1}>모집글 버튼</Button>
        <Button onClick={() => handleButtonClick(2)} selected={selectedBtn === 2}>소통글 버튼</Button>
      </ButtonImgContainer>

      <ImageContainer>
        <h5>이미지 등록</h5>

        <WriteImage
          src={selectedImage}
          alt="모집 게임 이미지"
          onClick={handleWriteImageClick}
        />
      </ImageContainer>

      <WriteFormWrapper>
        {/* 모집글 recruit 작성하기 */}
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
            <InputTag type="text" placeholder='2~15자 이내여야 합니다.' 
              value={recruitGame} onChange={onChangeRecruitGame} />
            <Warning style={isGameTitleValid ? {display:"none"} : {display:"block"}}>*2~15자 이내여야 합니다.</Warning>

            <PTag>모집 인원</PTag>
            <InputTag type="text" placeholder='숫자만 입력 가능합니다. ' 
              value={recruitPeople} onChange={onChangeRecruitPeople} />
            <Warning style={isPeopleValid ? {display:"none"} : {display:"block"}}>*숫자만 입력 가능합니다.</Warning>

            <PTag>모집 상세</PTag>
            <InputTag type="text" placeholder='포지션, 티어 등 상세 내용을 입력해주세요.' 
              value={recruitDetail} onChange={onChangeRecruitDetail} />
            <Warning style={isDetailValid ? {display:"none"} : {display:"block"}}>*포지션, 티어 등 상세 내용을 입력해주세요.</Warning>
          </>
        )}

        {/* 소통글 post 작성하기 */}
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
            <InputTag type="text" placeholder='게시글 내용을 입력해주세요.' 
              value={postContent} onChange={onChangePostContent} />
            <Warning style={isContentValid ? {display:"none"} : {display:"block"}}>*게시글 내용을 입력해주세요.</Warning>
          </>
        )}
        <SubmitBtn type='submit' onClick={handlePostSubmit}>저장하기</SubmitBtn>
      </WriteFormWrapper>
    </WriteContainer>
  );
}