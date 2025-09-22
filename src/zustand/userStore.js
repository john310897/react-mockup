import { create } from "zustand";
const userStore=(set)=>({
    obj:{name:'john',age:18},
    addData:(obj)=>set((state)=>({obj:{...state.obj,...obj}}))
})
export const userDataStore=create(userStore)