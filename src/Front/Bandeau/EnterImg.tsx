import { Box } from '@mui/material';
import image_3 from './img/image_3.png';
import PLAY_1 from './img/PLAY_1.png';
import styled from 'styled-components';

const Square = styled.div`
  width: 101.1%;
  height: 288px;
  background: #FAF6EE;
  margin-top: -50px;
`;
const EnterImg: React.FC = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box 
        sx={{ 
          position: 'relative',
          width: 1240, 
          height: 570, 
          overflow: 'hidden',
          borderRadius: '30px',
          backgroundImage: `url(${image_3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginRight: 3,
          marginTop: '-8%',
        }}
      >
        <Box 
          sx={{ 
            width: 104, 
            height: 103, 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '30px',
            backgroundImage: `url(${PLAY_1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Box>
      <Square />
    </Box>
  );
};

export default EnterImg;
