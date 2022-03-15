import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function SideCard(props) {

    const {
        title = 'No Title',
        icon,
        onClick,
        selected,
        time= '0:00'
    } = props;

  return (
    <Card sx={{ display: 'flex', mb: 1, cursor: 'pointer', borderWidth: 2, borderColor: selected ? 'primary.main' : 'white', height: 70 }} variant="outlined" onClick={onClick}>
        {
            icon && <CardMedia
                component="img"
                sx={{ width: 120}}
                image={icon}
                alt="Live from space album cover"
            />
        }
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', p: 1 }}>
          <Typography component="div" variant="subtitle2" sx={{lineHeight: 1}}>
            {title}
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            {time}
        </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

SideCard.defaultProps = {
    onClick: () => {}
}
