import { Paper } from '@mui/material';
const ImageCarousel = (props) => {
  console.log('here');
  console.log(props);
  return (
    <Paper>
      <img style={{ width: '100%', height: '10%' }} src={props.pic}></img>
    </Paper>
  );
};
export default ImageCarousel;
