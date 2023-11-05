import Example from "../../assets/image/참쉽죠.jpg";

const data = [
  
  {
    id: 1,
    username: "테스트머신1",
    intro: "동해물과",
    time: "2023.10.26",
    messages: [
      {
        type: "text",
        content: "안녕하세요 ~ 같이 게임 하고 싶어서 연락드렸어요 ~",
        left: true, //왼쪽
        time: "14:05"
      },
      {
        type: "text",
        content: "네 안녕하세요 ~ 들어오세요 ~",
        left: false, //오른쪽
        time: "14:30"
      },
      {
        type: "image",
        content: Example,
        left: true, //왼쪽
        time: "14:31"
      }
    ]
  },

  {
    id: 2,
    username: "테스트머신2와의 채팅",
    intro: "백두산이",
    time: "2023.10.25",
    messages: [
      {
        type: "text",
        content: "안녕하세요 겜하고싶어요",
        left: true, //왼쪽
        time: "14:05"
      },
      {
        type: "text",
        content: "야야 나도 끼고싶다고",
        left: true, //왼쪽
        time: "14:06"
      },
      {
        type: "text",
        content: "앙대요 지금 자리 참",
        left: false, //오른쪽
        time: "14:30"
      },
      {
        type: "image",
        content: Example,
        left: true, //왼쪽
        time: "14:31"
      }
    ]
  },

  {
    id: 3,
    username: "테스트머신3과의 채팅",
    intro: "마르고",
    time: "2023.10.11",
    messages: [
      {
        type: "text",
        content: "안녕하세요 겜하고싶어요",
        left: true, //왼쪽
        time: "14:05"
      },
      {
        type: "text",
        content: "야야 나도 끼고싶다고",
        left: true, //왼쪽
        time: "14:06"
      },
      {
        type: "text",
        content: "앙대요 지금 자리 참",
        left: false, //오른쪽
        time: "14:30"
      },
      {
        type: "image",
        content: Example,
        left: true, //왼쪽
        time: "14:31"
      }
    ]
  },

  {
    id: 4,
    username: "테스트머신4와의 채팅",
    intro: "닳도록",
    time: "2023.09.30",
    messages: [
      {
        type: "text",
        content: "안녕하세요 겜하고싶어요",
        left: true, //왼쪽
        time: "14:05"
      },
      {
        type: "text",
        content: "야야 나도 끼고싶다고",
        left: true, //왼쪽
        time: "14:06"
      },
      {
        type: "text",
        content: "앙대요 지금 자리 참",
        left: false, //오른쪽
        time: "14:30"
      },
      {
        type: "image",
        content: Example,
        left: true, //왼쪽
        time: "14:31"
      }
    ]
  },

  {
    id: 5,
    username: "테스트머신5와의 채팅",
    intro: "둥둥",
    time: "2023.09.16",
    messages: [
      {
        type: "text",
        content: "안녕하세요 겜하고싶어요",
        left: true, //왼쪽
        time: "14:05"
      },
      {
        type: "text",
        content: "야야 나도 끼고싶다고",
        left: true, //왼쪽
        time: "14:06"
      },
      {
        type: "text",
        content: "앙대요 지금 자리 참",
        left: false, //오른쪽
        time: "14:30"
      },
      {
        type: "image",
        content: Example,
        left: true, //왼쪽
        time: "14:31"
      }
    ]
  },

]

export default data