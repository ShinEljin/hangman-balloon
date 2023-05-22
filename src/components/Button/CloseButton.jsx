import { IconX } from '@tabler/icons-react';

const CloseButton = (props) => {
    return (
      <>
    
  
    <div className="outerCloseBtn" onClick={props.onClick}>
        <div className="innerCloseBtn">
          <div className="closeBtn">
          <IconX size={45}  strokeWidth={5} />

          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default CloseButton;
  