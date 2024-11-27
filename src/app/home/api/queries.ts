import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import {
  getHomeData,
  getQuickList,
  patchQuickStart,
  postQuickStart,
} from './api'
import { QuickStart, QuickStartRequest } from './type'

export const useGetHomeData = () =>
  useSuspenseQuery({
    queryKey: ['home'],
    queryFn: () => getHomeData(),
    select: (data) => data.data,
  })

export const useGetQuickList = (key: number) =>
  useSuspenseQuery({
    queryKey: ['quick-list', key],
    queryFn: () => getQuickList(),
    select: (data) => data.data,
  })

export const usePostQuickStart = () => {
  return useMutation({
    mutationKey: ['quick-start'],
    mutationFn: (data: QuickStartRequest) => postQuickStart(data),
  })
}

export const usePatchQuickStart = (id: number) => {
  return useMutation({
    mutationKey: ['quickstart-edit'],
    mutationFn: (data: QuickStart) => patchQuickStart(data, id),
  })
}
