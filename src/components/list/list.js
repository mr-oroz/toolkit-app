import { Box, Toolbar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../list-item/list-item';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/productSlice';
import { productApi } from '../../redux/rtk-query/product-api';

const List = () => {

  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch();

  // productService  создает сам useGetAllProductQuery этот функция типа useEffect

  // передаем пустую строку параметр и получаем дата и isError isLoading

  const {data, isError, isLoading} = productApi.useGetAllProductQuery('');
  

  if(isLoading) {
    return <h1>loading..</h1>
  }

  if(isError) {
    return <h1>error</h1>
  }
  return (
    <Toolbar>
      <Box sx={{
        marginTop: '50px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        display: 'flex'
      }}>
        {
          data && data.products.map(item => <ListItem
            btnText='Добавить в корзину'
            color='#0984e3'
            onClick = {() => dispatch(addToCart(item.id))}
            key={item.id}
            display='null'
            {...item} />)
        }
      </Box>
    </Toolbar>
  );
};

export default List;