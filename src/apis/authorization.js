// sign in&up 功能會在這裡設定 方便管理
import { apiHelper } from "../utils/helpers";

export default {
  signIn({ email, password }) {
    // return 的是一個 promise
    // 因為呼叫 axios 之後，會回傳一個 promise 物件，所以直接把這個 promise 繼續 return 出去
    // 這樣在 vue接到這個promise物件後，就可以用.then來做後續操作
    return apiHelper.post('/signin', {
      email,
      password
    })
  }
}