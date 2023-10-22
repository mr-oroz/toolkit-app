import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
export default function ListItem(
  { thumbnail, title, rating, discountPercentage, price, description, brand, onClick, btnText, color, display }
) {
  
  return (
    <Card sx={{ width: 345, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          sx={{objectFit: 'contain'}}
          image={thumbnail}
          alt="green iguana"
        />
        <CardContent height="100">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            brand: {brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            {price} $
          </Typography>
          <Typography variant="body3" color="text.secondary">
            скидка: {discountPercentage}%
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          sx={{color: color, display: 'flex', alignItems: 'center', gap: '10px'}}
          onClick={onClick}
          size="small" 
          color="primary">
          {btnText}
          {display === 'null' ? <ShoppingCartOutlinedIcon sx={{fontSize: '18px'}}/> : <DeleteOutlineOutlinedIcon sx={{fontSize: '18px'}}/>}
        </Button>
      </CardActions>
    </Card>
  );
}