import { ICharacter } from '../../types/character.type'

export interface getAllPeopleRes {
  count: number
  next: string | null
  previous: string | null
  results: ICharacter[]
}
