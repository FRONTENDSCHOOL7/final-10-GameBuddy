import styled from "styled-components";

export const WriteContainer = styled.div`
  background-color: #ffffff;
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
    margin-top: 12px;
    text-align: left;
    margin-left: 34px;
  }
`;

export const WriteImage = styled.img`
  cursor: pointer;

  width: 322px;
  height: 204px;
  margin-top: 18px;
  margin-bottom: 30px;
`;

export const WriteFormWrapper = styled.div`
  padding: 0 32px;
`;

export const PTag = styled.p`
  margin: 16px 0 6px 0;
  text-align: left;
`;

export const InputTag = styled.input`
  width: 100%;
  height: 23px;
  border-width: 0px 0px 1px;
  padding: 0 0 1px 0;
  font-size: 20px;

  &:focus {
    outline: none;
    border-color: #5865f2;
  }

  &::placeholder {
    color: #dbdbdb;
    font-size: 14px;
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
`;

export const Warning = styled.p`
  color: #ff0000;
  text-align: left;
  font-size: 12px;
  margin-top: 4px;
`;
