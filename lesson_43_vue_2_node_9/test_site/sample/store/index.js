export default {
  state(){
    return { counter: 0 }
  },
  mutations: {
    increment (state) { state.counter++ },
    test(state, payload){
      state.title = payload.title;
      state.content = payload.content;
    }
  },
  actions: {
    nuxtServerInit(contextFromStore, contextFromNuxt){
      if(contextFromNuxt.req.session && contextFromNuxt.req.session.isAuth){
        contextFromStore.commit('changeAuthenticatinStatus');
      }
    }
  }
};
