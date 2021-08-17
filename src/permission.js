import router from './router'
// import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
  const token = getToken()
  if (!token) {
    next('/login')
  }
})
