/* eslint-disable unicorn/consistent-function-scoping */
import { RouterKeys } from '../router/keys'
import { navigationRef } from '../router/root-navigation'
import { usePeople } from './people.hook'

interface useNavigationReturn {
  goBack: () => void
  goCharacter: (id: number) => void
}
export const useNavigation = (): useNavigationReturn => {
  const { handleSetCharacterId } = usePeople()
  const goBack = () => {
    navigationRef.goBack()
  }
  const goCharacter = (id: number) => {
    handleSetCharacterId(id)
    navigationRef.navigate(RouterKeys.CHARACTER)
  }
  return {
    goBack,
    goCharacter,
  }
}
