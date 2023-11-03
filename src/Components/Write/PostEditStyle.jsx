import styled from "styled-components";

export const WriteContainer = styled.div`
  background-color: #2c2f33;
  width: 100%;
  height: auto;
  min-height: 100vh;
  text-align: center;
  position: relative;
  font-size: 12px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: auto;
    height: auto;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    padding: 0 16px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 10px;
  }
`;

export const Divdiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: auto;

  @media screen and (max-width: 768px) {
  }
`;



export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  box-sizing: border-box;
  padding: 60px 50px 50px 50px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  height: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;


export const ButtonImgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0;

  img {
    margin: 6px;
  }
`;

export const InputContainer = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Button = styled.button`
  width: 145px;
  height: 35px;
  margin: 50px 20px 33px 0;
  border-radius: 44px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#5865f2" : "#8EA1E1")};
  color: white;
  border: none;
  text-align: center;
  font-size: 14px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    margin-top: 30;
  }
`;

export const ImageContainer = styled.div`
  display: block;

  h5 {
    text-align: left;
    margin: 0 0 18px 0;
    font-size: 18px;
    font-weight: bold;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    border-right: 2px solid #dbdbdb;
    padding-right: 50px;
  }
`;

export const WriteImage = styled.img`
  cursor: pointer;
  display: flex;

  width: 322px;
  height: 204px;

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const WriteFormWrapper = styled.div`
  width: 322px;
  padding: 0;

  @media screen and (min-width: 768px) {
    padding: 0 50px;
  }
`;

export const PTag = styled.p`
  text-align: left;
  margin-bottom: 18px;
  font-size: 18px;
  font-weight: bold;
`;

export const PTagpost = styled.p`
  text-align: left;
`

export const TextAreaTag = styled.textarea`
  min-width: 308px;
  width: 100%;
  height: 30px;
  border-width: 0px 0px 1px;
  border: solid #dbdbdb 2px;
  padding: 10px 0 1px 0;
  font-size: 20px;

  overflow: hidden auto;
  resize: none;
  min-height: 12rem;
  max-height: calc(100vh - var(--size-header) - var(--size-tabBar) - 40rem);

  &:focus {
    outline: none;
    border-color: #5865f2;
  }

  &::placeholder {
    color: #dbdbdb;
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 10rem; 
    min-height: 10rem; 
    max-height: 10rem;
  }
`;

export const SubmitBtn = styled.button`
  width: calc(100% - 18px);
  height: 39px;
  margin-top: 30px;
  border-radius: 32px;
  border: none;
  background-color: #5865f2;
  color: #ffffff;
  padding: 0 32px;
`;

export const Warning = styled.p`
  color: #ff0000;
  text-align: left;
  font-size: 12px;
  margin-top: 4px;
`;