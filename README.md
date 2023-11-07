<h1 align='center'><b>GameBuddy</b></h1>

## **1. GameBuddy 소개**

![GameBuddy](https://github.com/FRONTENDSCHOOL7/final-10-GameBuddy/assets/80045006/63f1196f-d412-493e-a0d8-0b18b59b8104)

<b>GameBuddy</b>는 원하는 동료를 쉽게 찾아보고 함께 게임할 수 있는, 또 그 사람을 팔로잉하여 게임 후에도 지속적인 관계를 형성할 수 있는 게임 커뮤니티입니다.

```
// 테스트용 계정
Email: gbtestcomeon@buddy.com
Password: qwer1234
```

## **2. 팀 소개 & 역할 분담**

|                                              방하진                                               |                                              박태준                                               |                                              최연정                                              |                                              박준홍                                              |
| :-----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| <img width="180" alt="프로필_방하진" src="https://avatars.githubusercontent.com/u/138538168?v=4"> | <img width="180" alt="프로필_박태준" src="https://avatars.githubusercontent.com/u/126474575?v=4"> | <img width="180" alt="프로필_최연정" src="https://avatars.githubusercontent.com/u/62794884?v=4"> | <img width="180" alt="프로필_박준홍" src="https://avatars.githubusercontent.com/u/80045006?v=4"> |
|                            [Hajin-Bang](https://github.com/Hajin-Bang)                            |                               [GedFlow](https://github.com/GedFlow)                               |                         [yeonjeonge-e](https://github.com/yeonjeonge-e)                          |                               [JJamVa](https://github.com/JJamVa)                                |
|                                               팀원                                                |                                               팀원                                                |                                               팀원                                               |                                               팀장                                               |

## **3. 개발 환경**

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
</table>

## **4. Covention Rules**

<details><summary>컨벤션 규칙</summary>

### **4-1. Branch Convention**

```
feature-#(이슈번호)-(간단한 기능구현 설명)

ex) feature-#17-로그인 화면 구현
```

### **4-2. Commit Convention**

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

### **4-3. Github Issue**

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

### **4-4. Github PR template**

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

### **4-5. Prettier Convention**

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

### **4-6. File Convention**

```
1. 컴포넌트 분리된 파일은 `PasCalCase` 적용
ex) Header.jsx, Footer.jsx

2. 컴포넌트 아닌 파일은 `lower CamelCase` 적용
ex) loginApi.jsx, store.js

3. CSS파일 사용 시, 적용할 파일명과 일치
ex) Header.jsx의 css파일은 Header.module.css
```

### **4-7. Code Convention**

```
1. var 변수 사용 금지

2. 변수명 및 함수명은 `lower CamelCase`로 작성
ex) 변수: let isTrue = true; 함수: onClickHanlder() => {}
```

</details>

## **5. GameBuddy 프로젝트 구조**

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

## **6. GameBuddy 구현 기능**

## **7. 핵심 코드**

- stringify
- masterToken

#### Footer 미디어 쿼리

<details><summary>Footer미디어 쿼리 코드</summary>

```jsx title="footer.jsx"
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
}
```

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
    // 검색 아이콘에 해당하는 항목만 숨깁니다.
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
      left: 100%; // 오른쪽으로 위치
      transform: translateY(-50%); // 세로 가운데 정렬
      opacity: 0;
      background: var(--color-purple);
      color: white;
      border-radius: 4px;
      padding: 4px 8px;
      font-size: 12px;
      white-space: nowrap; // 텍스트를 한 줄로 표시
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

## **8. 트러블 슈팅**

- 가독성이 좋은 코드
- 충분히 재사용될만 컴포넌트
- 웹버전 구현시, 초기 환경 설정
- 낭비되는 비동기 처리

## **9. 소감**
