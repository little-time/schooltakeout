import axios from 'axios'

const loginIn = (data) => {
  return axios({
    url: '/api/user/login',
    method: 'post',
    data
  })
}
export default {
  loginIn
}