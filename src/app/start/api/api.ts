import Cookies from 'js-cookie'
import { http } from '@/api'
import useUserInfo, { UserInfo } from '@/store/useUserInfo'
import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const postOnboard = (data: Partial<UserInfo>) => {
  return http.post<UserInfo>({
    url: '/members/onboard',
    data,
  })
}

export const getNicknamePossible = (nickname: string) => {
  return http.get({
    url: `/members/check-nickname?nickname=${nickname}`,
  })
}

export const usePostOnboard = () => {
  const router = useRouter()
  const { setUserInfo } = useUserInfo()
  return useMutation({
    mutationFn: (data: Partial<UserInfo>) => postOnboard(data),
    onSuccess: ({ data }) => {
      const updatedUserInfo = { ...data, role: 'MEMBER' as const }
      setUserInfo(updatedUserInfo)
      Cookies.set('role', 'MEMBER')
      router.push('/home')
    },
    onError: (error) => {
      alert(error.message)
    },
  })
}

export const useGetNickname = (nickname: string) => {
  useSuspenseQuery({
    queryKey: ['nickname', nickname],
    queryFn: () => getNicknamePossible(nickname),
    select: (data) => data,
  })
}
