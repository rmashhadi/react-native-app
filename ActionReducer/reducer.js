const init = {
  myColors: "red",

  Pic: "",
  UserId: "",
  lastMsg: "",
  Email: "",
  conversationId: "",

  msgList: [
    {
      msg: "",
      time: "",
      id: ""
    }
  ],
  convList: [],
  SpeechList: []
};
export default function infoSender(state = init, action) {
  switch (action.type) {
    case "CHAT":
      return {
        ...state,
        msgList: [
          ...state.msgList,
          {
            msg: action.payload,
            time: new Date().toLocaleTimeString()
          }
        ]
      };

    case "CONVERSATION_LIST_FROM_SERVER":
      return {
        ...state,
        convList: action.payload
      };

    case "SEND_COLOR":
      return {
        ...state,
        myColors: action.payload
      };

    case "LAST_CONVERSATION":
      return {
        ...state,

        Pic: action.connectionPicture,
        UserId: action.connectionID,
        lastMsg: action.payload,
        Email: action.connectionEmail,
        conversationId: action.conversationId
      };
    case "GET_MSG_LIST":
      return {
        ...state,
        SpeechList: action.payload
      };

    default:
      return state;
  }
}
