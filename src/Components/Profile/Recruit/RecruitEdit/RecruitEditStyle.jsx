import styled from "styled-components";

export const WriteContainer = styled.div`
  background-color: #2c2f33;
  width: 100%;
  height: 100vh;
  text-align: center;
  position: relative;
  font-size: 12px;
`;

export const ButtonImgContainer = styled.div`
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

export const Button = styled.button`
  width: 85px;
  height: 24px;
  margin: 6px;
  border-radius: 44px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#5865f2" : "#8EA1E1")};
  color: white;
  border: none;
  text-align: center;
  font-size: 11px;
  font-weight: 700;
`;

export const ImageContainer = styled.div`
  display: block;

  h5 {
    padding-top: 100px;
    font-size: 28px;
    font-weight: bold;
    color: #dfdfdf;
  }
`;

export const WriteImage = styled.img`
  cursor: pointer;

  width: 320px;
  height: 200px;
  margin-top: 35px;
  margin-bottom: 30px;
`;

export const WriteFormWrapper = styled.div`
  padding: 0 32px;
  width: 330px;
  margin: 0 auto;
`;

export const PTag = styled.p`
  margin: 14px 0 8px 0;
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

export const SubmitBtn = styled.button`
  width: calc(100% - 18px);
  height: 39px;
  margin-top: 66px;
  border-radius: 32px;
  border: none;
  background-color: #5865f2;
  color: #ffffff;
  padding: 0 32px;

  background: ${(props) => (props.disabled ? "gray" : "your original color")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const Warning = styled.p`
  color: #ff0000;
  text-align: left;
  font-size: 12px;
  margin-top: 4px;
`;
