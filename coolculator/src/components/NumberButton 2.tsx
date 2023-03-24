type NumberButtonProps = {
    buttonLabel: string,
    handleNumberClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const NumberButton : React.FC<NumberButtonProps>= (props: NumberButtonProps)=> {

  const { handleNumberClick, buttonLabel } = props;

  return (
    <div onClick={handleNumberClick}>
      {buttonLabel}
    </div>
  )
}
