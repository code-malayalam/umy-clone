import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import logo from '../logo.svg';

export default function SideCard(props) {

    const {
        onClick
    } = props;

  return (
    <Card sx={{ display: 'flex', mb: 1, cursor: 'pointer' }} onClick={onClick}>
        <CardMedia
            component="img"
            sx={{ width: 100 }}
            image={logo}
            alt="Live from space album cover"
        />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h7">
            Live From Space Live From Space Live From Space
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

SideCard.defaultProps = {
    onClick: () => {}
}
