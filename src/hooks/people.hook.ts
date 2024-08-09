import { useQuery } from 'react-query'
import { getError } from '../utils/get-error.util'
import { QUERY_KEYS } from '../consts/query-keys.const'
import { peopleService } from '../services/people/people.service'
import { usePeopleStore } from '../store/peoples.store'
import { ICharacter } from '../types/character.type'

type TUsePeopleReturn = {
  peoples: Array<ICharacter>
  handleLoadMore: () => void
}
export const usePeople = (): TUsePeopleReturn => {
  const { page, peoples, setPeoples, setIsNextPage, isNextPage, setPage } =
    usePeopleStore()
  useQuery({
    queryKey: [QUERY_KEYS.PEOPLE, page],
    queryFn: () => peopleService.getAllPeoples(page),
    onError: (error: any) => {
      getError(error)
    },
    onSuccess: data => {
      setPeoples(data.results)
      setIsNextPage(Boolean(data.next))
    },
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
  const handleLoadMore = () => {
    if (isNextPage) {
      setPage(page + 1)
    }
  }
  return {
    peoples,
    handleLoadMore,
  }
}
