'use client'

import {
  ReactNode,
  createContext,
  useContext as ReactUseContext,
  useMemo,
  Context as ReactContext,
} from 'react'

interface ContextOptions<ContextType> {
  name: string
  errorMessage?: string
  defaultContextValue?: ContextType
  strict?: boolean
}

type GenerateContextReturnType<T extends object> = [
  ({ children, ...providerValues }: ProviderProps<T>) => JSX.Element,
  () => T,
  ReactContext<T>,
]

type ProviderProps<ContextValuesType extends object> =
  | (ContextValuesType & { children: ReactNode })
  | { children: ReactNode }

export default function generateContext<ContextType extends object>(
  options: ContextOptions<ContextType>,
) {
  const {
    name,
    errorMessage = `useContext: ${name}Context가 존재하지 않습니다. Provider를 설정해주세요.`,
    defaultContextValue = null,
    strict = true,
  } = options
  const Context = createContext<ContextType | null>(defaultContextValue ?? null)

  function useContext() {
    const context = ReactUseContext(Context)

    if (context !== null) {
      return context
    }

    if (defaultContextValue !== null) {
      return defaultContextValue
    }

    if (strict) {
      const error = new Error(errorMessage)
      error.name = `${name} ContextError`
      Error.captureStackTrace?.(error, useContext)
      throw error
    }

    return context
  }

  function Provider({
    children,
    ...providerValues
  }: ProviderProps<ContextType>) {
    const value = useMemo(
      () => (Object.keys(providerValues).length > 0 ? providerValues : null),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [...Object.entries(providerValues).flat()],
    ) as ContextType

    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  Context.displayName = name
  Provider.displayName = name

  return [
    Provider,
    useContext,
    Context,
  ] as GenerateContextReturnType<ContextType>
}
