export default {
    deleteCard(state, idCard) {
        state.blogCards = state.blogCards.filter((card) => card.id !== idCard)
    }
}
