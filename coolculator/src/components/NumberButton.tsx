type NumberButtonProps = {
    buttonLabel: string,
    handleNumberClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const NumberButton : React.FC<NumberButtonProps>= (props: NumberButtonProps)=> {

  const { handleNumberClick, buttonLabel } = props;

  return (
    <div onClick={handleNumberClick} className="gen-button num-button">
      {buttonLabel}
    </div>
  )
}
