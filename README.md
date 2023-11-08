<h1 align='center'><b>GameBuddy</b></h1>

## **1. GameBuddy 소개**

![GameBuddy](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/80045006/63f1196f-d412-493e-a0d8-0b18b59b8104)

Game Buddy는 실시간으로 게임 참여자를 모집하며, 다양한 유저들과 소통할 수 있는 공간입니다.
Game Buddy를 통해 진정한 BUDDY를 만나보세요!

[🎮 GameBuddy 배포 URL 🎮](https://gamebuddy.xyz/login)

```
// 테스트용 계정
Email: gbtestcomeon@buddy.com
Password: qwer1234
```

## **2. 개발 일정**

#### 2023년 10월 16일 ~ 2023년 10월 7일

|         **주차**          | **내용**                                                                                                                                                   |
| :-----------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1주차<br/> (10/16 -10/21) | - 주제 선정 및 기획 <br/> - 기술 스택 조사<br/> - 목업 디자인 및 기술 리스트 작성<br/> - GIT 협업 공부 <br/> - 프로젝트 초기 셋팅(Prettier, Convention 등) |
| 2주차 <br> (10/22 -10/28) | - 디자인 및 기능 개발 시작 <br/>                                                                                                                           |
| 3주차 <br> (10/29 -11/03) | - 1차 점검 후, 코드 수정 및 예외처리 작업 시작<br/> - 필수 기능 구현 완료<br/> - 웹 반응형 작업 <br/> - 부가 기능 구현(상품 판매 API 커스텀)               |
| 4주차 <br> (11/04 -11/06) | - 디자인 보완 및 코드 리팩토링 작업 <br/> - README.md 작성<br/> - 서비스 배포(AWS)                                                                         |

## **3. 팀 소개 & 역할 분담**

- 팀소개

|                                              방하진                                               |                                              박태준                                               |                                              최연정                                              |                                              박준홍                                              |
| :-----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| <img width="180" alt="프로필_방하진" src="https://avatars.githubusercontent.com/u/138538168?v=4"> | <img width="180" alt="프로필_박태준" src="https://avatars.githubusercontent.com/u/126474575?v=4"> | <img width="180" alt="프로필_최연정" src="https://avatars.githubusercontent.com/u/62794884?v=4"> | <img width="180" alt="프로필_박준홍" src="https://avatars.githubusercontent.com/u/80045006?v=4"> |
|                            [Hajin-Bang](https://github.com/Hajin-Bang)                            |                               [GedFlow](https://github.com/GedFlow)                               |                         [yeonjeonge-e](https://github.com/yeonjeonge-e)                          |                               [JJamVa](https://github.com/JJamVa)                                |
|                                               팀원                                                |                                               팀원                                                |                                               팀원                                               |                                               팀장                                               |

### **역할**

- 박준홍

```
프로젝트 관리 및 개발 환경 설정
- PR리뷰 및 Merge 관리
- 프로젝트 초기 설정

UI
- 메인(프로필) 게시글 리스트
- 메인(프로필) 게시글 상세보기 모달(모바일 버전)
- 공용 확인 Alert 모달창

기능
- 게시글 댓글 추가/삭제/신고
- 게시글 좋아요/ 좋아요 취소하기
- 게시글 리스트 불러오기
- 게시글 수정
- 프로필 수정
- 프로필 페이지의 모집중인 게임 데이터 호출
- 팔로우/언팔로우에 따른 화면 표현 기능

기타
- 각종 컴포넌트 테스트 및 예외처리 작업
- 중복 컴포넌트 코드 리팩토링
- README.md 작성
```

- 박태준

```
UI
- 로그인 및 회원가입
- 팔로워 및 팔로잉 리스트
- 게임 모집글 모달창
- 게임 참가자 리스트 모달창

기능
- 로그인 및 회원가입
- 프로필 페이지의 ProfileDetail 부분
- 팔로워 리스트, 팔로잉 리스트
- 게임 모집글 상세 모달
- 게임 참여, 떠나기 기능
- 게임 참가자 리스트
- 로그아웃

기타
- AWS 배포
- 메인 포스터 작업
```

- 방하진

```
UI
- Splash
- Loading
- Header
- Footer
- Menu Modal
- 검색
- 채팅
- 메인 피드
- 프로필 상세
- 프로필 게시글 리스트
- 게시글 상세모달

기능
- 검색
- 프로필 게시글 리스트
- 메뉴 모달
- 채팅

기타
- 디자인 목업
- 기능 명세서 작성
- 와이어프레임 설계
- GlobalStyle(Reset.css) / Font.css 설정
```

- 최연정

```

```

## **4. 개발 환경 & 핵심 기술 설명**

### **4-1 개발 환경**

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

### **4-2 핵심 기술 사용 이유**

|     **기술**      |                                       **설명**                                        |
| :---------------: | :-----------------------------------------------------------------------------------: |
|      Recoil       |              상태 관리의 편리성 및 컴포넌트 간 상태 공유가 가능하여 사용              |
| Styled-Components |           Props를 기반으로 동적 스타일 적용 및 스타일 상속이 가능하여 사용            |
|       Axios       | 데이터를 자동으로 JSON 변화가 가능하며, HTTP 메서드가 이용해 CRUD작업이 가능하여 사용 |
| Image Compressor  |                  이미지의 크기 조절 및 파일 용량을 줄이기 위해 사용                   |

## **5. Covention Rules**

<details><summary>컨벤션 규칙</summary>

### **5-1. Branch Convention**

```
feature-#(이슈번호)-(간단한 기능구현 설명)

ex) feature-#17-로그인 화면 구현
```

### **5-2. Commit Convention**

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

### **5-3. Github Issue**

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

### **5-4. Github PR template**

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

### **5-5. Prettier Convention**

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

### **5-6. File Convention**

```
1. 컴포넌트 분리된 파일은 `PasCalCase` 적용
ex) Header.jsx, Footer.jsx

2. 컴포넌트 아닌 파일은 `lower CamelCase` 적용
ex) loginApi.jsx, store.js

3. CSS파일 사용 시, 적용할 파일명과 일치
ex) Header.jsx의 css파일은 Header.module.css
```

### **5-7. Code Convention**

```
1. var 변수 사용 금지

2. 변수명 및 함수명은 `lower CamelCase`로 작성
ex) 변수: let isTrue = true; 함수: onClickHanlder() => {}
```

</details>

## **6. GameBuddy 프로젝트 구조**

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

## **7. GameBuddy 기능**

| 스플래시                                                                                                                    | 로그인 & 회원가입                                                                                                                 | 메인                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ![모_스플래시2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/16df122e-46e8-464b-86cf-636a80ef31b9) | ![모_회원가입로그인2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/6b85b8a9-2a59-40e7-b78f-ac3fbc65a9f5) | ![모_노메인2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/d00304c0-d326-4db3-88ba-e95075c95e71) |

| 검색                                                                                                                    | 프로필 수정                                                                                                                   | 팔로워/팔로잉                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ![모_검색2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/c19878df-4714-4126-b065-498e86f13b61) | ![모_프로필수정2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/68f0e94a-9c0b-4208-8946-5ede991576f3) | ![모_팔로잉팔로우2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/319e6475-473e-4ca0-bf5e-1a209c02b42c) |

| My profile                                                                                                                  | 게시글 작성&수정                                                                                                                  | 모집글 작성&수정                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ![모_myprofile](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/4150f2a8-e142-461b-8943-be0c327d9f45) | ![모_게시글작성수정2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/ee74da5f-b452-49bb-b093-2f14f354b268) | ![모_모집글작성수정2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/497cd809-5621-46ee-9f16-31aa33f16ee4) |

| 좋아요                                                                                                                   | 댓글 삭제&신고                                                                                                         | 모집인원                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ![모_좋아요](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/be0ed8e5-83a2-42ac-9a3b-02ef2d9eac51) | ![모_댓글](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/26abc209-2428-4de6-8646-d4bbc57afa98) | ![모_모집인원](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/84c013ff-b5af-4840-8a90-6767eee55e53) |

| 채팅                                                                                                                    | 404 페이지                                                                                                            | 로그아웃                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ![모_채팅2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/7a2def46-938a-4cb2-a501-2bee866a8a10) | ![모_404](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/28b82f4d-48f5-4896-bef8-8270f71737d8) | ![모_로그아웃2](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/62794884/364493d8-776f-474b-8afb-18e005d86839) |

## **8. 핵심 코드**

<details><summary>게임 모집 수정 API 커스텀 코드</summary>

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

<details><summary>Footer 미디어 쿼리 코드</summary>
<br/>

![반응형 화면](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/80045006/250e28a9-a0bf-4643-8c3e-f1926e6a96d0)

- Footer Icon을 할당하는 코드

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

## **9. 트러블 슈팅**

- 가독성이 좋은 코드
- 충분히 재사용될만 컴포넌트
- 웹버전 구현시, 초기 환경 설정

## **10. 소감**

- 박준홍

```
이번 팀 프로젝트를 진행하며 팀장으로서 팀을 이끌어 나가는
리더십과 프로젝트의 방향 설정에 대한 교훈을 얻었습니다.
협업 과정에서 개발 환경에 대한 세심한 주의, 컴포넌트의 세분화, 그리고 코드 재사용의 중요성을 체감할 수 있었습니다.
이후 프로젝트의 개선해야할 부분을 의논하고 개발하여 같이 성장했으면 좋겠습니다.
플젝10조? 팀원들 프로젝트를 위해 노력해주셔서 너무 감사합니다.
```

- 박태준

```
  전반적인 프론트엔드 개발에 대한 감을 익힐 수 있었고 자신감이 생겼습니다!
  교육 수료 후에도 팀원들과 함께 프로젝트를 개선해 나가고 싶습니다.
```

- 방하진

```
처음 하는 프로젝트라서 막연한 두려움이 있었습니다. 하지만 막상 시작하고보니 프로젝트의 흐름을 익혀나가는 과정이 매우 즐거웠고, 노력하면 다 할 수 있다라는 자신감을 얻는 좋은 계기가 되었습니다. 수료 후에도 팀원들과 더 나은 코드를 고민하고 개선하는 과정을 통해 성장하고 싶습니다. 함께 수고해준 팀원분들께 감사합니다!
```

- 최연정
