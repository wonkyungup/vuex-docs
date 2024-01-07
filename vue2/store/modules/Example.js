const state = {
    isExample: false
}

const getters = {
    isExample: state => () => {
        return state.isExample
    }
}

const mutations = {
    SET_EXAMPLE (state) {
        state.isExample = !state.isExample
    }
}

const actions = {
    setExample ({ commit }) {
        commit('SET_EXAMPLE')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
