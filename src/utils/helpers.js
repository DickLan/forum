import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'http://localhost:3000/api'

// 1.設定 baseURL => 當其他地方調用 axios 時會自動使用這裡設定好的 URL
// 2.使用具名匯出 => 在其他地方調用時，必須使用相同名稱 import apiHelper from './utils/helpers'
export const apiHelper = axios.create({
  baseURL: baseURL
})

export const Toast = Swal.mixin({
  Toast: true,
  position: 'top-middle',
  showConfirmButton: false,
  timer: 3000
})