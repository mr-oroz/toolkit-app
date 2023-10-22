import React from 'react';
import { Box } from '@mui/material';
import List from '../../components/list/list';
import { productApi } from '../../redux/rtk-query/product-api';
const Home = () => {

  const [addPostProduct] = productApi.useAddPostProductMutation()

  const handleClick = async () => {
    console.log('successfully');
    try {
      const response = await addPostProduct({ title: 'mac book air m1' }).unwrap();
      console.log('Post successfully created', response);
    } catch (error) {
      console.error('Failed to create the post', error);
    }
  };
  return (
    <Box sx={{flexGrow: 1}}>
      <button onClick={handleClick}>add product</button>
      <List/>
    </Box>
  );
};

export default Home;