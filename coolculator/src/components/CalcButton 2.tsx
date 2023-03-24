type CalcButtonProps = {
    buttonLabel: number | string
  }

export const NumberButton : React.FC<CalcButtonProps> = ({buttonLabel }: CalcButtonProps) => {
  return (
    <div>
      {buttonLabel.toString()}
    </div>
  )
}
