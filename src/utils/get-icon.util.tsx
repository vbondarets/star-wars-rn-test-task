import { IconEnum } from '../types/icon.type'
import User from '../../assets/icons/user-icon-svgrepo-com.svg'
import Like from '../../assets/icons/like-svgrepo-com.svg'
import LeftArrow from '../../assets/icons/arrow-left-line.svg'

const getIcon = (type?: IconEnum) => {
  switch (type) {
    case IconEnum.USER: {
      return User
    }
    case IconEnum.LIKE: {
      return Like
    }
    case IconEnum.LEFT_ARROW: {
      return LeftArrow
    }
    default: {
      return <></>
    }
  }
}

export default getIcon
