import { create } from 'zustand'

export interface UserInfo {
  nickname: string
  birthYear: string
  gender: GenderType
  profileImage: string
}

export type GenderType = 'FEMALE' | 'MALE' | 'NONE'

interface UserInfoState {
  userInfo: UserInfo
}

interface UserInfoActions {
  setUserInfo: (userinfo: UserInfo) => void
  deleteUserInfo: () => void
}

const defaultState: UserInfo = {
  nickname: '',
  gender: 'FEMALE',
  birthYear: '',
  profileImage: '1',
}

const isClient = typeof window !== 'undefined'

const getUserInfoFromLocalStorage = (): UserInfo => {
  if (!isClient) {
    return defaultState
  }
  const storedUserInfo = localStorage.getItem('userInfo')
  return storedUserInfo ? JSON.parse(storedUserInfo) : defaultState
}

const useUserInfo = create<UserInfoState & UserInfoActions>((set) => ({
  userInfo: getUserInfoFromLocalStorage(),
  setUserInfo: (userInfo: UserInfo) => {
    set({ userInfo })
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  },
  deleteUserInfo: () => {
    set({ userInfo: defaultState })
    localStorage.removeItem('userInfo')
  },
}))

if (!isClient) {
  useUserInfo.subscribe((state) => {
    localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
  })
}

export default useUserInfo