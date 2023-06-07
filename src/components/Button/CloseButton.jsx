import { IconX } from '@tabler/icons-react';
import { soundStateContext } from '../../App';
import { useContext } from 'react';

const CloseButton = (props) => {

  const { handleSoundEffect } = useContext(soundStateContext);

  const handleClick = () => {
  handleSoundEffect("ClickX");
  props.onClick();
  };
    return (
      <>
    
  
    <div className="outerCloseBtn" onClick={handleClick}>
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
  