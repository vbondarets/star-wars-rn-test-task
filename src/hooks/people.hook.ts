import { useQuery } from 'react-query'
import { getError } from '../utils/get-error.util'
import { QUERY_KEYS } from '../consts/query-keys.const'
import { peopleService } from '../services/people/people.service'

type TUsePeopleReturn = {}
export const usePeople = (): TUsePeopleReturn => {
  useQuery({
    queryKey: [QUERY_KEYS.PEOPLE],
    queryFn: () => peopleService.getAllPeoples(1),
    onError: (error: any) => {
      getError(error)
    },
    onSuccess: () => {},
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
  return {}
}
