type OperationButtonProps = {
    buttonLabel: string,
    handleOperationClick: (event: React.MouseEvent<HTMLDivElement>) => void
  }
  
  export const OperationButton : React.FC<OperationButtonProps>= (props: OperationButtonProps)=> {
  
    const { handleOperationClick, buttonLabel } = props;
  
    return (
      <div onClick={handleOperationClick}>
        {buttonLabel}
      </div>
      )
  }
  