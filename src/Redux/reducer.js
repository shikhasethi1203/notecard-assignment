import { v4 as uuidv4 } from "uuid";

const initialState = {
  cards: {},
};

const getCardList = (cards, name) => {
  if (!!cards[name]) return cards[name];
  return [];
};

export const cardReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CARD": {
      const { inputText, cardName } = action.payload;
      const cards = state.cards;

      const card = {
        id: uuidv4(),
        inputText: inputText,
      };

      const updatedCards = {
        ...cards,
        [cardName]: [...getCardList(cards, cardName), card],
      };

      return {
        ...state,
        cards: updatedCards,
      };
    }
    case "DELETE_CARD": {
      const { id, cardName } = action.payload;
      const cards = state.cards;
      const updatedCards = {
        ...cards,
        [cardName]: [
          ...getCardList(cards, cardName).filter((card) => card.id !== id),
        ],
      };

      return {
        ...state,
        cards: updatedCards,
      };
    }
    case "HANDEL_CHANGE_CARD": {
      const { id, inputText, cardName } = action.payload;
      const cards = state.cards;
      const updateCard = (card) => {
        const newCard = card;
        if (newCard.id === id) {
          newCard.inputText = inputText;
        }
        return newCard;
      };
      const updatedCards = {
        ...cards,
        [cardName]: [...getCardList(cards, cardName).map(updateCard)],
      };

      return {
        ...state,
        cards: updatedCards,
      };
    }
    default:
      return state;
  }
};

export default cardReducers;
