type CalcButtonProps = {
  buttonLabel: string,
  handleCalcClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const CalcButton : React.FC<CalcButtonProps>= (props: CalcButtonProps)=> {

  const { handleCalcClick, buttonLabel } = props;

  return (
    <div onClick={handleCalcClick} className="gen-button calc-button">
      {buttonLabel}
    </div>
    )
}
