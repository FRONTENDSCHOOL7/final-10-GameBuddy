<h1 align='center'><b>GameBuddy</b></h1>

## **1. GameBuddy 소개**

![GameBuddy Poster](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/80045006/f6156e63-9a8d-4af4-aab5-4b0ad3da53e3)

> Game Buddy는 실시간으로 게임 참여자를 모집하며, 다양한 유저들과 소통할 수 있는 공간입니다.<br/>
> Game Buddy를 통해 진정한 BUDDY를 만나보세요!

🎮[GameBuddy 배포 URL](https://gamebuddy.xyz/login)🎮

```
// 테스트용 계정
Email: gamebuddytest@buddy.com
Password: gamebuddytest
```

## **2. 팀 소개 & 역할 분담**

### **팀 소개**

|                                              방하진                                               |                                              박태준                                               |                                              최연정                                              |                                              박준홍                                              |
| :-----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| <img width="180" alt="프로필_방하진" src="https://avatars.githubusercontent.com/u/138538168?v=4"> | <img width="180" alt="프로필_박태준" src="https://avatars.githubusercontent.com/u/126474575?v=4"> | <img width="180" alt="프로필_최연정" src="https://avatars.githubusercontent.com/u/62794884?v=4"> | <img width="180" alt="프로필_박준홍" src="https://avatars.githubusercontent.com/u/80045006?v=4"> |
|                            [Hajin-Bang](https://github.com/Hajin-Bang)                            |                               [GedFlow](https://github.com/GedFlow)                               |                         [yeonjeonge-e](https://github.com/yeonjeonge-e)                          |                               [JJamVa](https://github.com/JJamVa)                                |
|                                               팀원                                                |                                               팀원                                                |                                               팀원                                               |                                               팀장                                               |

### **역할 분담**

<table>
  <tr>
    <th style="text-align:center;">박준홍</th>
    <th style="text-align:center;">박태준</th>
    <th style="text-align:center;">방하진</th>
    <th style="text-align:center;">최연정</th>
  </tr>
  <tr>
    <td style="text-align:left; vertical-align:top; width:25%;"><b>UI</b><br/>- 메인(프로필) 게시글 리스트<br/>- 메인(프로필) 게시글 상세보기 모달(모바일 버전)<br/>- 공용 확인 Alert 모달창<br/><br/><b>기능</b><br/>- 게시글 댓글 추가/삭제/신고<br/>- 게시글 좋아요 / 좋아요 취소하기<br/>- 게시글 리스트 불러오기<br/>- 게시글 수정<br/>- 프로필 수정<br/>- 프로필 페이지의 모집중인 게임 데이터 호출<br/>- 팔로우 / 언팔로우에 따른 화면 표현 기능<br/><br/><b>기타</b><br/>- PR리뷰 및 Merge 관리<br/>- 프로젝트 초기 설정<br/>- 각종 컴포넌트 테스트 및 예외처리 작업<br/>- 중복 컴포넌트 코드 리팩토링<br/>- README.md 작성</td>
    <td style="text-align:left; vertical-align:top; width:25%;"><b>UI</b><br/>- 로그인 및 회원가입<br/>- 팔로워 및 팔로잉 리스트<br/>- 게임 모집글 모달창<br/>- 게임 참가자 리스트 모달창<br/><br/><b>기능</b><br/>- 로그인 및 회원가입<br/>- 프로필 페이지의 ProfileDetail 부분<br/>- 팔로워 리스트, 팔로잉 리스트<br/>- 게임 모집글 상세 모달<br/>- 게임 참여, 떠나기 기능<br/>- 게임 참가자 리스트<br/>- 로그아웃<br/><br/><b>기타</b><br/>- AWS 배포<br/>- 메인 포스터 작업</td>
    <td style="text-align:left; vertical-align:top; width:25%;"><b>UI</b><br/>- Splash<br/>- Loading<br/>- Header<br/>- Footer<br/>- Menu Modal<br/>- 검색<br/>- 채팅<br/>- 메인 피드<br/>- 프로필 상세<br/>- 프로필 게시글 리스트<br/>- 게시글 상세모달<br/><br/><b>기능</b><br/>- 검색<br/>- 프로필 게시글 리스트<br/>- 메뉴 모달<br/>- 채팅<br/><br/><b>기타</b><br/>-디자인 목업<br/>- 기능 명세서 작성<br/>- 와이어프레임 설계<br/>- GlobalStyle(Reset.css) / Font.css 설정</td>
    <td style="text-align:left; vertical-align:top; width:25%;"><b>UI</b><br/>- 404 에러 페이지<br/>- 팔로잉 없을 시 메인피드 페이지<br/>- 프로필 수정 페이지<br/>- 게임 게시글<br/>- 게임 모집글<br/><br/><b>기능</b><br/>- 프로필 수정 페이지<br/>- 게임 게시글 작성 / 수정<br/>- 게임 모집글 작성<br/><br/><b>기타</b><br/>- 노션 페이지 작성<br/>- 회고록 작성</td>
  </tr>
</table>

## **3. 개발 일정**

<b>개발 기간 : 2023년 10월 16일 ~ 2023년 11월 7일</b>

|          **주차**          | **내용**                                                                                                                                                   |
| :------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1주차<br/> (10/16 ~ 10/21) | - 주제 선정 및 기획 <br/> - 기술 스택 조사<br/> - 목업 디자인 및 기술 리스트 작성<br/> - GIT 협업 공부 <br/> - 프로젝트 초기 셋팅(Prettier, Convention 등) |
| 2주차 <br> (10/22 ~ 10/28) | - 디자인 및 기능 개발 시작 <br/>                                                                                                                           |
| 3주차 <br> (10/29 ~ 11/03) | - 1차 점검 후, 코드 수정 및 예외처리 작업 시작<br/> - 필수 기능 구현 완료<br/> - 웹 반응형 작업 <br/> - 부가 기능 구현(상품 판매 API 커스텀)               |
| 4주차 <br> (11/04 ~ 11/06) | - 디자인 보완 및 코드 리팩토링 작업 <br/> - README.md 작성<br/> - 서비스 배포(AWS)                                                                         |

## **4. 프로젝트 협업 방식**

- 커뮤니케이션

  - [GameBuddy Notion](https://mammoth-sassafras-ff5.notion.site/10-10-95d035c5c9894842951c12901adc204e?pvs=4)

- 기능 명세서 및 와이어 프레임

  - [GameBuddy Figma](https://www.figma.com/file/G3Ft0tEBByKXmf3iKSHBON/Game-Buddy?type=design&node-id=56%3A1893&mode=design&t=wcgJPehcOAENWIFD-1)

- 데일리 스크럼

  - 매일 오전 10시, 오후 6시 회의
  - 회의 주제 진행 상황 공유 및 문제 해결

- GitHub 협업 방식
  - GitHub의 Projects 기능을 이용하여 TodoList작성
  - GitFlow를 이용
    - `master`: 프로젝트의 최종본
    - `develop`: feature branch에서 작업물을 합치는 branch
    - `feature`: 기능 개발 branch

## **5. 개발 환경 & 핵심 기술 설명**

### **개발 환경**

<table>
<tr>
 <td align="center">Front-End</td>
 <td>
   <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>&nbsp
  <img src="https://img.shields.io/badge/styled--Components-db7093?style=for-the-badge&logo=styled-Components&logoColor=black"/>&nbsp 
  <img src="https://img.shields.io/badge/Recoil-61dafb?style=for-the-badge&logo=Recoil&logoColor=black"/>&nbsp
  <img src="https://img.shields.io/badge/Axios-white?style=for-the-badge&logo=Axios&logoColor=black"/>&nbsp 
 </td>
</tr>
<tr>
 <td align="center">협업</td>
 <td>
    <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp 
    <img src="https://img.shields.io/badge/Notion-5a5d69?style=for-the-badge&logo=Notion&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/Discord-4263f5?style=for-the-badge&logo=Discord&logoColor=white"/>&nbsp 
 </td>
</tr>
<tr>
 <td align="center">디자인</td>
 <td>
    <img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/>&nbsp  
 </td>
</tr>
<tr>
 <td align="center">IDE</td>
 <td>
    <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
</tr>
<tr>
 <td align="center">배포</td>
 <td>
    <img src="https://img.shields.io/badge/Amazon%20AWS-gray?style=for-the-badge&logo=AmazonAWS&logoColor=white"/>&nbsp
</tr>
</table>

### **핵심 기술 사용 이유**

|     **기술**      |                                                   **설명**                                                    |
| :---------------: | :-----------------------------------------------------------------------------------------------------------: |
|      Recoil       |                          상태 관리의 편리성 및 컴포넌트 간 상태 공유가 가능하여 사용                          |
| Styled-Components |                       Props를 기반으로 동적 스타일 적용 및 스타일 상속이 가능하여 사용                        |
|       Axios       | 데이터를 JSON으로 자동 변환 및 파싱, headers의 content-type이 JSON인 경우 headers 자체를 생략이 가능하여 사용 |
| Image Compressor  |                              이미지의 크기 조절 및 파일 용량을 줄이기 위해 사용                               |

## **6. Covention Rules**

<details><summary>컨벤션 규칙 목록</summary>

### **Branch Convention**

```
feature-#(이슈번호)-(간단한 기능구현 설명)

ex) feature-#17-로그인 화면 구현
```

### **Commit Convention**

| Commit Convention |                    Content                    |
| :---------------: | :-------------------------------------------: |
|     `[Feat]-`     |             기능 추가, 삭제, 변경             |
|     `[Fix]-`      |                버그, 오류 수정                |
|     `[Docs]-`     | README.md, json 파일 등 수정, 라이브러리 설치 |
|    `[Style]-`     |                UI 디자인 변경                 |
|  `[Refactory]-`   |                 코드 리팩토링                 |
|     `[Test]-`     |         테스트 코드 추가, 삭제, 변경          |
|    `[Config]-`    |               npm 모듈 설치 등                |
|    `[Chore]-`     |           패키지 매니저 설정할 경우           |
|   `[Comment]-`    |           필요한 주석 추가 및 변경            |
|     `[Init]-`     |               초기 설정할 경우                |

- 예시: 버튼 기능을 구현했을 경우

```
ex) git commit -m "[Feat]-로그인 화면 버튼 기능 추가"
```

### **Github Issue**

- Issue Title Convention

|  Issue Title  |             설명             |
| :-----------: | :--------------------------: |
|   `[Feat]-`   |    기능 추가, 삭제, 변경     |
|  `[Design]-`  | 디자인 요소 추가, 삭제, 변경 |
| `[Refactor]-` |        코드 리팩토링         |
|   `[Bug]-`    |          버그 수정           |

- Issue Template

```md
# Title

<!-- [Issue Title]-간단 설명 -->
<!-- ex) [Design]-버튼 Border 수정-->

# Description

<!--기능 설명해주세요-->

# Todo

- [ ] <!--해야할 작업1-->
- [x] <!--해야할 작업2-->

# ETC

<!--기타 작업-->
```

### **Github PR template**

```md
# PR 제목

<!-- ex) 버튼 기능 구현 -->

# 변경 사항

- []<!-- 변경사항 목록을 작성-->
- []<!-- ex) 1. 버튼 디자인 변경-->

# 관련 이슈

<!-- #이슈번호 - 해결 -->
<!-- ex) #17-API통신 오류 해결-->
```

### **Prettier Convention**

```jsx
module.exports = {
  semi: true, // 세미콜론 여부
  printWidth: 80, // 코드길이 제한
  tabWidth: 2, // 탭의 길이
  singleQuote: false, // 쌍따옴표 사용
  jsxSingleQuote: false, // 쌍따옴표 사용
  trailingComma: "none", // 배열,객체 마지막 요소에 , 사용
  bracketSpacing: true, // 중괄호 양옆 공백
  bracketSameLine: true, // 꺽쇠 줄바꿈 여부
  jsxBracketSameLine: true, // 꺽쇠 줄바꿈 여부
  arrowParens: "always" // 파라미터가 1개일때, 괄호 생략
};
```

### **File Convention**

```
1. 컴포넌트 분리된 파일은 `PasCalCase` 적용
ex) Header.jsx, Footer.jsx

2. 컴포넌트 아닌 파일은 `lower CamelCase` 적용
ex) loginApi.jsx, store.js

3. CSS파일 사용 시, 적용할 파일명과 일치
ex) Header.jsx의 css파일은 Header.module.css
```

### **Code Convention**

```
1. var 변수 사용 금지

2. 변수명 및 함수명은 `CamelCase`로 작성
ex) 변수: let isTrue = true; 함수: onClickHanlder() => {}
```

</details>

## **7. GameBuddy 프로젝트 구조**

```
🎮 GameBuddy
├─ .github
|  ├─ Issue_template ────────────── 이슈템플릿.md
|  └─ PULL_REQUEST_TEMPLATE.MD ──── PR템플릿.md
├─ public ───────────────────────── Public 폴더
|  └─ index.html
└─ 📂 src
	 ├─ 📂 API ────────────────────── API 호출 함수 모음
	 ├─ 📂 assets ─────────────────── 폰트, 이미지 등 각종 정적 파일 모음
	 ├─ 📂 Components ─────────────── 컴포넌트 모음
	 |  ├─ 📂 Chat ────────────────── 채팅
	 |  ├─ 📂 Commons ─────────────── 공용으로 사용되는 컴포넌트
	 |  ├─ 📂 Main ────────────────── 메인 화면
	 |  ├─ 📂 Profile ─────────────── 프로필
	 |  ├─ 📂 Search ──────────────── 회원 검색
	 |  ├─ 📂 Sign
	 |  |  ├─ 📂 Login ─────────────── 로그인
	 |  |  ├─ 📂 SignUp ───────────── 회원가입
	 |  ├─ 📂 Splash ──────────────── 스플래시
	 |  ├─ 📂 Write ───────────────── 게시글 작성
	 ├─ 📂 Functional ───────────────── 데이터 파싱 함수 모음
	 ├─ 📂 Pages
	 ├─ Router ──────────────────── 이동할 페이지 경로 지정
	 ├─ Store ───────────────────── 전역 상태 관리 공간
	 ├─ styles
	 ├─── App.js
	 ├─── index.js
	 ├─ .gitignore
	 ├─ .prettierrc.js
	 ├─ package-lock.json
	 ├─ package.json
	 └─ README.md
```

## **8. GameBuddy 기능 동작**

| 스플래시                                                                                                                    | 회원가입/프로필 설정                                                                                                             | 로그인/메인                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| ![모_스플래시2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/16df122e-46e8-464b-86cf-636a80ef31b9) | ![모_회원가입프로필](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/4cb61160-43c8-40fb-8ab0-58a31d5bb27f) | ![모_로그인메인](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/1b3c8342-9c16-4c44-9412-8e9f0d37a009) |

| 검색                                                                                                                    | 메인 피드                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![모_검색2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/12312213-4578-4cc6-8c7e-eff2200387cc) | ![모_메인](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/cbfdf831-aaf8-42de-a8bf-1bd8c67e2415) |

| 좋아요                                                                                                                   | 댓글 삭제/신고                                                                                                         | 모달 닫기                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ![모_좋아요](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/56e490b8-0aca-4495-b519-f3cf04d5c4af) | ![모_댓글](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/c5ce8ecf-3883-4f06-a8a2-c4702bcf4a75) | ![모_모달닫기](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/3135619e-efe8-448f-a57e-d97c80a6f728) |

| 채팅                                                                                                                    | myprofile                                                                                                                   | 팔로워/팔로잉                                                                                                                   | 프로필 수정                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![모_채팅2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/da4e14b4-36c9-4a08-8931-8fccc41e2900) | ![모_myprofile](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/04d3b30a-4a44-4b3c-97f4-31ca1c398dce) | ![모_팔로잉팔로우2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/0f52cd76-4e3f-4cb0-881e-e282ccd1f230) | ![모_프로필수정2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/4ea9849b-adcb-46cc-99a8-0c78e9b7be25) |

| 게시글                                                                                                                            | 모집글                                                                                                                            | 모집인원                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ![모_게시글작성수정2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/062c7017-77ac-4035-8af2-463a04b4d4b9) | ![모_모집글작성수정2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/130d01cd-fb88-4d87-94dd-63a6df6840d4) | ![모_모집인원](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/b9f864e5-cc66-491b-9103-c9803bd54ed1) |

| 404                                                                                                                   | 로딩                                                                                                                   | 로그아웃                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ![모_404](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/2f63d9a4-d982-4a52-ba53-39516b0518d0) | ![모_로딩](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/1ebe2f8d-84db-4154-a4fd-50610c82f613) | ![모_로그아웃2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/d69630e7-f2d7-4e33-bad5-516387dd2d10) |

## **9. 핵심 코드**

<details><summary><b>게임 모집 수정 API 커스텀 코드</b></summary>

- API 요청 시, 객체를 JSON으로 변환하여 데이터 등록

```jsx
import axios from "axios";
import masterTokenAPI from "../masterTokenAPI";

async function gameRecruitAPI(
  gameTitle,
  people,
  detail,
  itemImage = "",
  accountName
) {
  try {
    const token = await masterTokenAPI();

    const itemName = [gameTitle, accountName];
    const link = [people, detail, [accountName]];

    const response = await axios.post(
      "https://api.mandarin.weniv.co.kr/product",
      {
        product: {
          itemName: JSON.stringify(itemName),
          price: 1,
          link: JSON.stringify(link),
          itemImage: itemImage
        }
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    return "게임 모집글 게시되었습니다!";
  } catch (e) {
    return false;
  }
}

export default gameRecruitAPI;
```

</details>

<details><summary><b>Footer 미디어 쿼리 코드</b></summary>
<br/>

|                                                        웹 반응형                                                         |
| :----------------------------------------------------------------------------------------------------------------------: |
|  ![웹_메인](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/2a7d25de-874d-4426-a7bb-d1f8a6a97521)  |
| ![웹_게시글](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/efe7d5cd-21a6-4326-9f1b-67601565524c) |

- Footer Icon을 정의하는 코드

```jsx
const menus = [
  { name: "홈", icon: StyledHomeIcon, path: "/main", id: "home" },
  { name: "검색", icon: StyledSearchIcon, path: "/search", id: "search" },
  { name: "채팅", icon: StyledChatIcon, path: "/chat", id: "chat" },
  { name: "게시글 작성", icon: StyledWriteIcon, path: "/write", id: "write" },
  {
    name: "프로필",
    icon: StyledProfileIcon,
    path: `/profile/${myData.accountname}`,
    id: "profile"
  }
];

const getInitialActive = () => {
  const matchedMenu = menus.find((menu) =>
    location.pathname.startsWith(menu.path)
  );
  return matchedMenu ? matchedMenu.id : "profile";
};

const [$active, setActive] = useState(getInitialActive);

return (
  <S.FooterContainer>
    {menus.map((menu) => {
      const Icon = menu.icon;
      return (
        <S.Item
          id={menu.id}
          key={menu.id}
          onClick={() => {
            setActive(menu.id);
            navigate(menu.path);
          }}
          $active={$active === menu.id}>
          <Icon $active={$active === menu.id} />
          <span>{menu.name}</span>
        </S.Item>
      );
    })}
  </S.FooterContainer>
);
```

- 화면 너비에 따라 Footer의 위치를 변경해주는 FooterContainer 코드

```jsx
export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #25282d;

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 900;
  border-top: 1px solid #5c5c5c;

  @media screen and (min-width: 768px) {
    left: 0;
    width: 72px;
    height: calc(100vh - 55px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
  }
`;
```

- 화면 너비에 따라 Footer Icon을 배치

```jsx
export const Item = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 10px 6px 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#5865F2" : "#a4a4a4ff")};

  &:hover {
    transform: scale(1.2);
  }
  @media screen and (max-width: 767px) {
    ${({ id }) =>
      id === "search" &&
      `
        display: none;
      `}
  }

  @media screen and (min-width: 768px) {
    font-size: 0px;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    height: auto;
    padding: 50px 0 0 23px;
    position: relative;

    span {
      position: absolute;
      top: 85%;
      left: 100%;
      transform: translateY(-50%);
      opacity: 0;
      background: var(--color-purple);
      color: white;
      border-radius: 4px;
      padding: 4px 8px;
      font-size: 12px;
      white-space: nowrap;
      transition: opacity 0.3s ease-in-out;
      box-shadow: 0px 0px 8px #ffffff90;
    }

    &:hover span {
      opacity: 1;
    }
  }
`;
```

</details>

## **10. 트러블 슈팅**

<details><summary><b>상품 수정 API의 한계점</b></summary>
<br/>

<b style="font-size:16px">문제</b><br/>

제공해주신 상품 API를 잘 활용하여 모집 기능을 구현하였지만,
게임 모집글 내부에서 모집 참여하기, 떠나기 기능까지 구현할 수는 없었습니다.
원래 상품 API는 상품을 등록한 유저의 토크값을 헤더에 보내줘야만 정상 작동합니다.
하지만 참여하거나 떠나는 것은 서로 다른 두 유저의 게시글 사이에서 작동해야하는 기능이기 때문에, 해당 기능을 구현하기 위해서는 상품 데이터를 수정할 필요가 있었습니다.

<b style="font-size:16px">해결</b><br/>

이를 위해서 게임 모집글을 관리하는 계정인, `마스터 계정`을 만들고 게임 모집, 수정, 삭제 기능 모두 이 계정 한 곳에서 동작하게 하였습니다.
어떤 유저가 모집을 하던 마스터계정의 토큰을 통해 모집하고, 수정하고, 삭제하게 됩니다.
이 방법을 사용하여 상품 API를 활용해 게임 모집과 참여, 떠나기 기능을 구현할 수 있었습니다.
마스터 계정에 등록된 모든 모집글을 순회하면서 accountName을 최신화해주어 유저가 accountName을 수정하였을 때 생기는 버그도 해결할 수 있었습니다.

<b style="font-size:16px">아쉬운 점</b><br/>

다만 여기서 조금 아쉬운 부분이 있다면, API를 원래 목적대로 사용하지 않고, 값을 마구잡이로 넣다보니 게임 모집글이 많아질수록 특정 상황에서 프로필 수정하는 데에만 6초 이상 소요되는 등에 심각한 성능 저하가 발생하게 되었습니다.

<b style="font-size:16px">추가 개선점</b><br/>

이러한 성능 저하 문제는 지금 API를 개조한 방식으로 해결하기에는 한계가 있다고 생각했습니다.
수료 후 FireBase나 AWS Lambda같은 서버리스 서비스를 사용하거나, 저희만의 API 서버를 만드는 방식으로 코드를 개선하여 해결해볼 계획입니다.

</details>

<details><summary><b>렌더링 시, Footer 데이터 손실 문제</b></summary>
<br/>

<b style="font-size:17px">문제</b><br/>

새로고침을 하면 Atom의 데이터가 전부 날아가는 문제

<b style="font-size:17px">해결</b><br/>

이를 해결하기 위해서 모든 페이지에 존재하는 Footer 내부에 유저 데이터를 저장하는 리코일 코드를 작성하였고 새로고침하여도 Footer의 리코일 코드를 통해 API를 호출하고 Atom에 데이터를 저장함으로써 전역상태를 유지할 수 있었습니다.

<b style="font-size:17px">아쉬운 점</b><br/>

하지만 이 또한 Footer가 있는 페이지를 이동할 때마다 API 호출 및 리코일 값 저장 로직이 작동하여 성능 저하가 발생하게 되었습니다.

<b style="font-size:17px">추가 개선점</b><br/>

이러한 성능 문제는 팀원들과 리팩토링 과정을 통해 recoil-persist나 외부 API 사용 등을 고려해 해결해보고자 합니다.

</details>

## **11. 소감**

<b style="font-size:17px">박준홍</b><br/>

> 이번 팀 프로젝트를 진행하며 팀장으로서 팀을 이끌어 나가는 리더십과 프로젝트의 방향 설정에 대해 많이 배웠습니다.
> 더구나 팀프로젝트 협업 과정에서 개발 환경에 대한 세심한 주의, 컴포넌트의 세분화, 그리고 코드 재사용의 중요성을 체감할 수 있었습니다.
> 수료이후에 팀원들과 개선해야할 부분에 대해 의논하고 개발하여 프로젝트의 완성도를 더 높혔으면 좋겠습니다.
> 한달이라는 시간동안 플젝10조? 팀원들과 프로젝트를 진행해서 즐거웠고 노력해주셔서 너무 감사합니다.

<b style="font-size:17px">박태준</b><br/>

> 프로젝트를 진행하며 전반적인 프론트엔드 개발에 대해 감을 잡을 수 있었습니다. 특히 githubFlow를 따르며 난생 처음으로 GitHub를 협업툴로써 사용해볼 수 있어 좋은 경험이 였다고 생각합니다.
> 프론트엔드 개발자는 정말 신경쓸게 많은 것 같고, 아직 갈길이 멀다는 생각이 들었습니다. 또한 이번 프로젝트를 통해 프론트엔드 개발에 대해 감을 잡고 자신감을 얻었습니다. 함께한 팀원분들 고생많으셨고 감사합니다.

<b style="font-size:17px">방하진</b><br/>

> 처음 하는 프로젝트라서 막연한 두려움이 있었습니다. 하지만 막상 시작하고보니 프로젝트의 흐름을 익혀나가는 과정이 매우 즐거웠고, 노력하면 다 할 수 있다라는 자신감을 얻는 좋은 계기가 되었습니다. 수료 후에도 팀원들과 더 나은 코드를 고민하고 개선하는 과정을 통해 성장하고 싶습니다. 함께 수고해준 팀원분들께 감사합니다!

<b style="font-size:17px">최연정</b><br/>

> 처음 배운 리액트와 깃허브에 대해 조금이나마 익숙해진 시간이었습니다. 사실 수업에서 배운 내용을 제대로 소화하지 못했고 실력도 많이 부족해서 UI나 기능 구현에 있어서 제 역할을 잘 해냈다고는 생각하지 않지만, 좋은 팀원분들 덕분에 프로젝트 발표까지 마무리 할 수 있었다고 생각합니다. 한달 남짓한 기간동안 고생했던 팀원분들 모두에게 감사하다고 말하고 싶습니다!
