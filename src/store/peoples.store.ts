import { createWithEqualityFn } from 'zustand/traditional'
import { ICharacter } from '../types/character.type'

interface IPeopleStore {
  peoples: Array<ICharacter>
  setPeoples: (value: Array<ICharacter>) => void
  page: number
  setPage: (value: number) => void
  isNextPage: boolean
  setIsNextPage: (value: boolean) => void
  liked: Array<{ url: string; gender: string }>
  setLiked: (value: Array<{ url: string; gender: string }>) => void
  characterId?: number
  setCharacterId: (value: number) => void
  character?: ICharacter
  setCharacter: (value: ICharacter) => void
}

export const usePeopleStore = createWithEqualityFn<IPeopleStore>(set => {
  return {
    peoples: [],
    page: 1,
    isNextPage: false,
    liked: [],
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
    setLiked: (value: Array<{ url: string; gender: string }>) => {
      set(() => {
        return {
          liked: value,
        }
      })
    },
    setCharacterId: (value: number) => {
      set(() => {
        return {
          characterId: value,
        }
      })
    },
    setCharacter: (value: ICharacter) => {
      set(() => {
        return {
          character: value,
        }
      })
    },
  }
})
