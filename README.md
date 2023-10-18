<h1 align='center'><b>GameBuddy</b></h1>

## **1. 서비스 소개**

## **2. 개발 일정**

2023.10.12 ~ 2023.11.07

## **3. GameBuddy 프로젝트 팀원**

## **4. Covention Rules**

### **4-1. Branch Convention**

```
feature-#(이슈번호)-(기능구현설명)

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

| Issue Title  |             설명             |
| :----------: | :--------------------------: |
|   `[Feat]`   |    기능 추가, 삭제, 변경     |
|  `[Design]`  | 디자인 요소 추가, 삭제, 변경 |
| `[Refactor]` |        코드 리팩토링         |
|   `[Bug]`    |          버그 수정           |

```md
# Title
<!-- [Issue Title]-#(이슈번호)-간단 설명 -->
<!-- ex) [Design]-#17-버튼 Border 수정-->

# Description
<!--기능 설명해주세요-->

# Todo
- [ ] <!--해야할 작업1-->
- [x] <!--해야할 작업2-->

# ETC
<!--기타 작업-->

```

#### **Github PR template**

```md
# PR 제목 <!-- ex) 버튼 기능 구현 -->

# 변경 사항

<!-- 변경사항 목록을 작성-->
<!-- ex) 1. 버튼 디자인 변경-->

# 관련 이슈

<!-- #이슈번호 - 해결 -->
<!-- ex) #17 - API통신 오류 해결-->
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
    ├─ Basics ───────────────── 기본 컴포넌트 폴더
      ├─ header.jsx
      ├─ footer.jsx
      └─ 404Error.jsx
    ├─ Login
      ├─ splash.jsx ─────────── 스플래시
      └─ login.jsx ──────────── 로그인
    ├─ Register
      └─ register.jsx
    ├─ main
      ├─ switchMode.jsx ─────── 모드 변경 토글
      ├─ postList.jsx ───────── 피드에 올라올 글 리스트
      └─ postDetail.jsx ─────── 게시글 누르면 나오는 모달
    ├─ Chat
      ├─ chatList.jsx ───────── 채팅 목록
      └─ dmChat.jsx ─────────── 채팅 누르면 나오는 DM
    ├─ Write
      └─ write.jsx ──────────── 게시글 작성
    └─ Profile
      ├─ profile.jsx ────────── 프로필 상세 부분
      ├─ recruit.jsx ────────── 작성한 게임 모집글 리스트
      └─ post.jsx ───────────── 작성한 소통글 리스트
  ├─ Routes ─────────────────── 라우터로 이동할 페이지 모음
    ├─ registerPage.jsx ─────── 로그인화면에서 회원가입 할 때
    ├─ mainFeedPage.jsx ─────── 로그인 성공시
    ├─ dmChatPage.jsx ───────── 채팅 목록 클릭시
    ├─ writePage.jsx ────────── 게시글 작성시
    ├─ followDetailPage.jsx ─── 유저 팔로워 눌렀을 때
    └─ profilePage.jsx ──────── 유저 프로필 눌렀을 때
  ├─ Static ─────────────────── 각종 정적 파일 모음
    ├─ font
    └─ image
  ├─ App.js
  ├─ index.js
  └─ Store.js ───────────────── 전역 상태 관리파일
├─ .gitignore
├─ package-lock.json
├─ package.json
└─ README.md
```
