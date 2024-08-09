import { TouchableOpacity } from 'react-native'

type ButtonProps = {
  onPress: () => void
  disabled?: boolean
  styleClassName?: string
  children: JSX.Element | JSX.Element[]
}

const DefaultButton = ({
  onPress,
  disabled,
  styleClassName,
  children,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (!disabled) {
          onPress()
        }
      }}
      className={
        styleClassName ??
        'w-full bg-black flex items-center justify-center h-14 rounded-full'
      }
    >
      {children}
    </TouchableOpacity>
  )
}

export default DefaultButton
