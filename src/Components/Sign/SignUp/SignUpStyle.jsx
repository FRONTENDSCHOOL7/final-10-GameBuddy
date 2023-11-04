import styled from "styled-components";

export const Container = styled.div`
  background-color: #2c2f33;
  width: 100%;
  height: 100vh;
  text-align: center;
  position:relative;
  font-size:12px;
`

export const SignUpForm = styled.form`
  margin: 0 auto;
  width: 86%;
  position: relative;
  top:20%;
  color: #a6a6a6;
  @media screen and (min-width: 768px) {
      width: 70%;
      height: 70%;
      max-width: 400px;
      max-height: 600px;
      padding: 50px 40px 30px;
      /* border: 1px solid #afafaf; */
      box-shadow: 0px 0px 20px #ffffff90;
      border-radius: 25px;
    }
`

export const LogoImg = styled.img`
  width: 174px;
  height: 103px;
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`

export const LogoTitle = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin-bottom: 5%;
  }
`

export const SignUpLogo = styled.p`
  margin-bottom: 36px;
  font-size: 25px;
  font-weight:bold;
  color: #dfdfdf;
`
export const PTag = styled.p`
    margin:14px 0 8px 0;
    text-align:left;
  `
export const InputTag = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  padding: 0 2%;
  font-size: 16px;
  background-color: #171717;
  color: #efefef;
  &:focus {
    outline: none;
    border-color: #DBDBDB;
  }
  &::placeholder {
    color: #505050;
    font-size: 14px;
  }
`
export const SubmitBtn = styled.button`
  width: 100%;
  height: 44px;
  margin-top: 24px;
  border-radius: 44px;
  border: none;
  background-color: ${props => props.disabled ? '#8EA1E1' : '#5865f2'};
  /* background-color: #8EA1E1; */
  /* background-color: #5865f2; */
  color: #ffffff;
  @media screen and (min-width: 768px){
    /* width: 83%;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%); */
    margin-top: 10%;
  }
`
export const LoginLink = styled.p`
  margin-top: 24px;
  font-size: 15px;
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`
export const Warning = styled.p`
  color: #ff0000;
  text-align:left;
  font-size: 12px;
  margin-top: 4px;
`

export const SetProfileForm = styled.form`
  margin: 0 auto;
  width: 86%;
  position: relative;
  top:19%;
  color: #a6a6a6;
  @media screen and (min-width: 768px) {
      width: 70%;
      height: 70%;
      max-width: 400px;
      max-height: 600px;
      padding: 50px 40px 30px;
      /* border: 1px solid #afafaf; */
      box-shadow: 0px 0px 20px #ffffff90;
      border-radius: 25px;
    }
`
export const ProfileSettingLogo = styled.p`
  margin-bottom: 36px;
  font-size: 25px;
  font-weight:bold;
  color: #ffffff;
`
export const ProfileImageSetting = styled.div`
  position: relative;
`
export const ProfileImage = styled.img`
  cursor: pointer;
  width: 130px;
  height: 130px;
  border-radius: 65px;
  margin-bottom: 10px;
`
export const ProfileImageChange = styled.input`
  display:none;
`
export const ImageChangeBtn = styled.img`
  position: absolute;
  bottom: 0;
  left: 55%;
`
//모달
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000; //다른 요소보다 항상 앞에 있어야함
`;

export const ModalContent = styled.div`
  background-color: #2c2f33;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  font-size: 16px;
  color: #ffffff;
`;

export const ModalBtn = styled.button`
  width: 100%;
  height: 44px;
  margin-top: 18px;
  border-radius: 44px;
  border: none;
  background-color: ${props => props.disabled ? '#8EA1E1' : '#5865f2'};
  /* background-color: #8EA1E1; */
  /* background-color: #5865f2; */
  color: #ffffff;
`;
