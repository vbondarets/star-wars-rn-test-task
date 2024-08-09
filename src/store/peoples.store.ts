import { createWithEqualityFn } from 'zustand/traditional'
import { ICharacter } from '../types/character.type'

interface IPeopleStore {
  peoples: Array<ICharacter>
  setPeoples: (value: Array<ICharacter>) => void
  page: number
  setPage: (value: number) => void
  isNextPage: boolean
  setIsNextPage: (value: boolean) => void
}

export const usePeopleStore = createWithEqualityFn<IPeopleStore>(set => {
  return {
    peoples: [],
    page: 1,
    isNextPage: false,
    setPeoples: (value: Array<ICharacter>) => {
      set(state => {
        return {
          peoples: [...state.peoples, ...value],
        }
      })
    },
    setPage: (value: number) => {
      set(() => {
        return {
          page: value,
        }
      })
    },
    setIsNextPage: (value: boolean) => {
      set(() => {
        return {
          isNextPage: value,
        }
      })
    },
  }
})
