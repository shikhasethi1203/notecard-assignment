export const addCard = (inputText, cardName) => {
  return {
    type: "ADD_CARD",
    payload: { inputText, cardName },
  };
};

export const deleteCard = (id, cardName) => {
  return {
    type: "DELETE_CARD",
    payload: { id, cardName },
  };
};

export const handelChangeCard = (id, inputText, cardName) => {
  return {
    type: "HANDEL_CHANGE_CARD",
    payload: { id, inputText, cardName },
  };
};
