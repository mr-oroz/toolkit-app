import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { productApi } from '../../redux/rtk-query/product-api';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
export default function Appbar() {
  const [value, setValue] = React.useState('')
  const navigate = useNavigate();
  const { cart } = useSelector(state => state.products);


  // isFetching когда поисковык enter нажимаешь тогда отправляет запрос резултат уведишь консоль
  const {data: searchData, isFetching} = productApi.useGetSearchProductsQuery(value);
  const navItems = [
    { id: 1, route: '/', title: 'Главная' },
    { id: 2, route: '/cart', title: 'Корзина' }
  ];

  const togglePage = (route) => {
    navigate(route)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // вот резултат 
    console.log(searchData);
    setValue('')
  }

  return (
    <Box s={{ flexGrow: 1 }}>
      <AppBar sx={{
        backgroundColor: '#5f27cd',
        position: 'initial !important',
        top: '0px'
      }} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <form onSubmit={handleSubmit}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <input type="submit" hidden />
          </form>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                onClick={() => togglePage(item.route)}
                key={item.id}
                sx={{ color: '#fff' }}>
                {item.title === 'Корзина' ? `${item.title} (${cart.length})` : item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}