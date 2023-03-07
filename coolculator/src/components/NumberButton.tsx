type NumButtonProps = {
    buttonLabel: number
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const NumberButton : React.FC<NumButtonProps> = ({buttonLabel, handleClick}: NumButtonProps) => {
  return (
    <div>
      {buttonLabel.toString()}
    </div>
  )
}
