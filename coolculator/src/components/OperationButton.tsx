type OperationButtonProps = {
    buttonLabel: string,
    isOperationActive: boolean,
    handleOperationClick: (event: React.MouseEvent<HTMLDivElement>) => void
  }
  
  export const OperationButton : React.FC<OperationButtonProps>= (props: OperationButtonProps)=> {
  
    const { handleOperationClick, buttonLabel, isOperationActive } = props;
  
    return (
      <div onClick={handleOperationClick} style={{"visibility" : isOperationActive ? "hidden" : "visible" }}>
        {buttonLabel}
      </div>
      )
  }
  