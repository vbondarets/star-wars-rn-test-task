/* eslint-disable unicorn/consistent-function-scoping */
import { navigationRef } from '../router/root-navigation'

interface useNavigationReturn {
  goBack: () => void
}
export const useNavigation = (): useNavigationReturn => {
  const goBack = () => {
    navigationRef.goBack()
  }
  return {
    goBack,
  }
}
