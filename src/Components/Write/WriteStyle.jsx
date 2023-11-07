import styled from "styled-components";

export const WriteContainer = styled.div`
  background-color: #2c2f33;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  text-align: center;
  position: relative;
  font-size: 12px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    height: auto;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    box-sizing: border-box;
  }
`;

export const Divdiv = styled.div`
  /* border: 2px solid white; */
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: auto;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    max-width: none;
    /* margin-left: 30%; */
    margin: 0 auto;
    box-sizing: border-box;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 322px;  */
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  padding-top: 90px;
  border-radius: 8px;
  background-color: #2c2f33;
  height: 100%;

  @media screen and (min-width: 768px) {
    padding: 0 10px 45px 80px;
    box-sizing: border-box;
  }
`;

export const ButtonImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  img {
    margin: 6px;
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const InputContainer = styled.div`
  display: block;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Button = styled.button`
  width: 145px;
  height: 35px;
  margin: 0px 10px 33px 10px;
  border-radius: 44px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#5865f2" : "#8EA1E1")};
  color: white;
  border: none;
  text-align: center;
  font-size: 15px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    margin-top: 30;
    margin-right: 20px;
    margin-left: 0;
  }
`;

export const ImageContainer = styled.div`
  display: block;

  h5 {
    text-align: left;
    margin-left: 0;
    color: #dfdfdf;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    border-right: 2px solid #a4a4a4ff;
    padding-right: 50px;
  }
`;

export const WriteImage = styled.img`
  cursor: pointer;
  display: flex;

  width: 322px;
  height: 204px;
  margin-top: 18px;
  margin-bottom: 30px;
`;

export const WriteFormWrapper = styled.div`
  width: 322px;
  padding: 0;

  @media screen and (min-width: 768px) {
    height: 300px;
    padding: 0 45px;
  }
`;

export const PTag = styled.p`
  /* margin: 14px 0 8px 0; */
  text-align: left;
  color: #dfdfdf;
`;

export const PTagpost = styled.p`
  text-align: left;
  color: #dfdfdf;
`;

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
  margin: 5px 0 23px 0;

  &:focus {
    outline: none;
    border-color: #dbdbdb;
  }
  &::placeholder {
    color: #505050;
    font-size: 14px;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const TextAreaTag = styled.textarea`
  min-width: 322px;
  width: 100%;
  height: 30px;
  /* border-width: 0px 0px 1px; */
  border: solid #dbdbdb 2px;
  border-radius: 5px;
  padding: 10px 0 1px 0;
  margin: 18px 0 23px 0;
  font-size: 16px;
  background-color: #171717;
  border: none;
  color: #efefef;

  overflow: hidden auto;
  resize: none;
  min-height: 12.3rem;
  max-height: calc(100vh - var(--size-header) - var(--size-tabBar) - 40rem);

  &:focus {
    outline: none;
    border-color: #5865f2;
  }

  &::placeholder {
    color: #505050;
    font-size: 16px;
    text-indent: 1ch;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 7rem;
    min-height: 10rem;
    max-height: 10rem;
  }
`;

export const SubmitBtn = styled.button`
  width: calc(100% - 18px);
  height: 39px;
  /* margin-top: 25px; */
  border-radius: 32px;
  border: none;
  background-color: #5865f2;
  color: #ffffff;
  padding: 0 32px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background: ${(props) => (props.disabled ? "gray" : "your original color")};
`;

export const Warning = styled.p`
  color: #ff0000;
  position: absolute;
  bottom: 7px; // Warning 메시지의 위치를 조절하세요.
  left: 5px;
  font-size: 11px;
`;

export const InputWrapper = styled.div`
  position: relative;
  /* margin-bottom: 30px; // 기존 PTag와 InputTag 사이의 간격을 조절하세요. */
`;

export const ButtonContainer = styled.div`
  margin-top: 10px; // 원하는 버튼의 상단 마진 크기를 지정하세요.
  /* margin-bottom: 16px; */
`;
