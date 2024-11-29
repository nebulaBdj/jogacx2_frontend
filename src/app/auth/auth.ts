import Cookies from 'js-cookie'
import useUserInfo from '@/store/useUserInfo'
import { useRouter } from 'next/navigation'

export const useLogout = () => {
  const { push } = useRouter()
  const { deleteUserInfo } = useUserInfo()

  const logout = () => {
    deleteUserInfo()
    Object.keys(Cookies.get()).forEach((cookieName) => {
      Cookies.remove(cookieName)
    })

    push('/')
  }

  return { logout }
}
