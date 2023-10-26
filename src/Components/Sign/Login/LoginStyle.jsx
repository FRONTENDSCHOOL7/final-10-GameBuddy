import styled from "styled-components";

export const Container = styled.div`
    background-color: #000000;
    width: 100%;
    height: 100vh;
    text-align: center;
    position:relative;
    font-size:12px;
  `

export const LoginForm = styled.form`
  margin: 0 auto;
  width: 86%;
  position: relative;
  top:20%;
  color: #767676;
`

export const LogoImg = styled.img`
  width: 174px;
  height: 103px;
`
export const PTag = styled.p`
  margin:16px 0 2px 0;
  text-align:left;
`

export const InputTag = styled.input`
  width: 94%;
  height: 48px;
  border: 0px;
  padding: 0 3%;
  font-size: 16px;
`

export const LoginBtn = styled.button`
  width: 100%;
  height: 44px;
  margin-top: 28px;
  border-radius: 44px;
  border: none;
  background-color: ${props => props.disabled ? '#8EA1E1' : '#5865f2'};
  /* background-color: #8EA1E1; */
  /* background-color: #5865f2; */
  color: #ffffff;
`

export const SnsLoginGroup = styled.div`
  width: 230px;
  margin: 35px auto 0;
  display: flex;
  justify-content: space-between;
`

export const SnsLoginBtn = styled.img`
  width: 55px;
  height: 55px;
  border: none;
`

export const SignupLink = styled.p`
  margin-top: 24px;
  font-size: 15px;
`