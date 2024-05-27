// import  { reactive } from 'vue'

// export const store = reactive({
//     PageIndex:0,
//     DialogShow:0,
// })


// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    message: 'Hello Vuex',
    pageIndex:0,
    dialogShow:0,
    currentNode: {
        id:0,
        name:''
    },
    needFresh:false
  },
  mutations: {
    setneedfresh(state,payload) {
        state.needFresh = payload;
    },
    setpageindex(state,payload) {
        state.pageIndex = payload;
        //console.log(state.pageIndex)
    },
    setdialogshow(state,payload) {
        state.dialogShow = payload
    },
    setcurrentnode(state,payload) {
        state.currentNode = payload
        //console.log(state.currentNode)
    },
    setMessage(state, payload) {
      state.message = payload;
    }
  },
  getters: {
    getpageindex: (state) => state.pageIndex,
    getdialogshow: (state) => state.dialogShow
  }
});
