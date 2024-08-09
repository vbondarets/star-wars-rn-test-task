import { useQuery } from 'react-query'
import { getError } from '../utils/get-error.util'
import { QUERY_KEYS } from '../consts/query-keys.const'
import { peopleService } from '../services/people/people.service'
import { usePeopleStore } from '../store/peoples.store'
import { ICharacter } from '../types/character.type'

type TUsePeopleReturn = {
  peoples: Array<ICharacter>
  handleLoadMore: () => void
  handleSetLike: (character: ICharacter) => void
  handleRemoveLike: (character: ICharacter) => void
  liked: {
    url: string
    gender: string
  }[]
  handleResetLikes: () => void
}
export const usePeople = (): TUsePeopleReturn => {
  const {
    page,
    peoples,
    setPeoples,
    setIsNextPage,
    isNextPage,
    setPage,
    liked,
    setLiked,
  } = usePeopleStore()
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
  const handleSetLike = (character: ICharacter) => {
    setLiked([...liked, { url: character.url, gender: character.gender }])
  }
  const handleRemoveLike = (character: ICharacter) => {
    setLiked(
      liked.filter(el => {
        return el.url !== character.url
      }),
    )
  }
  const handleResetLikes = () => {
    setLiked([])
  }

  return {
    peoples,
    handleLoadMore,
    handleSetLike,
    handleRemoveLike,
    liked,
    handleResetLikes,
  }
}
