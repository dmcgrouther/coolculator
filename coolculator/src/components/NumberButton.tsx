type NumButtonProps = {
    buttonLabel: number
    isPressed: boolean
}

export const NumberButton : React.FC<NumButtonProps> = ({buttonLabel, isPressed}: NumButtonProps) => {
  return (
    <div>
      {buttonLabel.toString()}
    </div>
  )
}
