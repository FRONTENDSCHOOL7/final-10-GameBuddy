<h1 align='center'><b>GameBuddy</b></h1>

## **1. 서비스 소개**

```
// 테스트용 계정
Email: gbtestcomeon@buddy.com
Password: qwer1234
```

## **2. 개발 일정**

2023.10.12 ~ 2023.11.07

## **3. GameBuddy 프로젝트 팀원**

|                                              방하진                                               |                                              박태준                                               |                                              최연정                                              |                                              박준홍                                              |
| :-----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| <img width="180" alt="프로필_방하진" src="https://avatars.githubusercontent.com/u/138538168?v=4"> | <img width="180" alt="프로필_박태준" src="https://avatars.githubusercontent.com/u/126474575?v=4"> | <img width="180" alt="프로필_최연정" src="https://avatars.githubusercontent.com/u/62794884?v=4"> | <img width="180" alt="프로필_박준홍" src="https://avatars.githubusercontent.com/u/80045006?v=4"> |
|                              [Hajin-Bang](https://github.com/D-Sup)                               |                              [GedFlow](https://github.com/jiwon6635)                              |                          [yeonjeonge-e](https://github.com/Eunnnnnnnn)                           |                               [JJamVa](https://github.com/JJamVa)                                |
|                                               팀원                                                |                                               팀원                                                |                                               팀원                                               |                                               팀장                                               |

## **4. Covention Rules**

### **4-1. Branch Convention**

```
feature-#(이슈번호)-(간단한 기능구현 설명)

ex) feature-#17-로그인 화면 구현
```

### **4-2. Commit Convention**

| Commit Convention |                       Content                       |
| :---------------: | :-------------------------------------------------: |
|     `[Feat]-`     |                기능 추가, 삭제, 변경                |
|     `[Fix]-`      |                   버그, 오류 수정                   |
|     `[Docs]-`     |    README.md, json 파일 등 수정, 라이브러리 설치    |
|    `[Style]-`     |            CSS 등 사용자 UI 디자인 변경             |
|  `[Refactory]-`   |                    코드 리팩토링                    |
|     `[Test]-`     |            테스트 코드 추가, 삭제, 변경             |
|    `[Config]-`    |                  npm 모듈 설치 등                   |
|    `[Chore]-`     |              패키지 매니저 설정할 경우              |
|   `[Comment]-`    |              필요한 주석 추가 및 변경               |
|    `[Rename]-`    | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
|    `[Remove]-`    |         파일을 삭제하는 작업만 수행한 경우          |

- 예시: 버튼 기능을 구현했을 경우

```
ex) git commit -m "[Feat]-로그인 화면 버튼 기능 추가"
```

### **4-3. Github Issue Template**

- Issue Title Convention

|  Issue Title  |             설명             |
| :-----------: | :--------------------------: |
|   `[Feat]-`   |    기능 추가, 삭제, 변경     |
|  `[Design]-`  | 디자인 요소 추가, 삭제, 변경 |
| `[Refactor]-` |        코드 리팩토링         |
|   `[Bug]-`    |          버그 수정           |

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

2. 컴포넌트 아닌 파일은 `camelCase` 적용
ex) loginApi.jsx, store.js

3. CSS파일은 적용할 파일명과 일치
ex) Header.jsx의 css파일은 Header.module.css

```

### **4-7. Code Convention**

```
1. var 변수 사용 금지

2. 변수명 및 함수명은 `CamelCase`로 작성
ex) 변수: let isTrue = true; 함수: onClickHanlder() => {}

```

## **5. GameBuddy 프로젝트 구조**

```
GameBuddy file structure
├─ .github
  ├─ Issue_template
    └─ ISSUE_TEMPLATE.md ──────── 이슈템플릿.md
  └─ PULL_REQUEST_TEMPLATE.MD ─── PR템플릿.md
├─ public ─────────────────────── Public 폴더
  └─ index.html
├─ src
  ├─ API ────────────────────── API 호출 함수 모음
  ├─ Components ─────────────── 컴포넌트 모음
    ├─ Commons ───────────────── 기본 컴포넌트 폴더
      ├─ Header.jsx
      ├─ Footer.jsx
      └─ Error404.jsx
    ├─ Login
      └─ Login.jsx ──────────── 로그인
    ├─ Splash
      └─ Splash.jsx ─────────── 스플래시
    ├─ SignUp
      └─ SignUp.jsx ────────── 회원가입
    ├─ Main
      ├─ SwitchMode.jsx ─────── 모드 변경 토글
      ├─ PostList.jsx ───────── 피드에 올라올 글 리스트
      └─ PostDetail.jsx ─────── 게시글 누르면 나오는 모달
    ├─ Chat
      ├─ ChatList.jsx ───────── 채팅 목록
      └─ DmChat.jsx ─────────── 채팅창 누르면 나오는 채팅화면
    ├─ Write
      └─ Write.jsx ──────────── 게시글 작성
    └─ Profile
      ├─ Profile.jsx ────────── 프로필 상세 부분
      ├─ Recruit.jsx ────────── 작성한 게임 모집글 리스트
      └─ Post.jsx ───────────── 작성한 소통글 리스트
  ├─ Pages ─────────────────── 라우터로 이동할 페이지 모음
    ├─ SignUpPage.jsx ─────── 로그인화면에서 회원가입 할 때
    ├─ MainFeedPage.jsx ─────── 로그인 성공시
    ├─ ChattingListPage.jsx ───────── 채팅 목록 클릭시
    ├─ WritePage.jsx ────────── 게시글 작성시
    ├─ FollowDetailPage.jsx ─── 유저의 팔로워를 눌렀을 때
    └─ ProfilePage.jsx ──────── 유저 프로필 눌렀을 때
  ├─ assets ─────────────────── 각종 정적 파일 모음
    ├─ font
    └─ image
  ├─ Router
    └─ Router.jsx ──────── 라우터로 이동할 페이지 경로 지정
  ├─ App.js
    └─ GlobalStyled.js ──────── reset css 작업 파일
  ├─ App.js
  ├─ index.js
  └─ Store
    └─ Store.js ───────────────── 전역 상태 관리파일
├─ .gitignore
├─ package-lock.json
├─ package.json
└─ README.md
```
