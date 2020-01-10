export const colorName = myColors => {
  return {
    type: "SEND_COLOR",
    payload: myColors
  };
};
export const conversationList = text => {
  return {
    type: "CHAT",
    payload: text
  };
};
export const conversationListFromServer = data => {
  return {
    type: "CONVERSATION_LIST_FROM_SERVER",
    payload: data
  };
};

export const lastConversation = (lastMsg, ID, Pic, Email, conversationId) => {
  return {
    type: "LAST_CONVERSATION",
    payload: lastMsg,
    connectionID: ID,
    connectionPicture: Pic,
    connectionEmail: Email,
    conversationId: conversationId
  };
};
export const getMsgList = SpeechList => {
  return {
    type: "GET_MSG_LIST",
    payload: SpeechList
  };
};
