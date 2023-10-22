import React from 'react';
import { Box, Modal, Toolbar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '../../components/list-item/list-item';
import { deleteItem, onToggleModal } from '../../redux/slices/productSlice';
import axios from 'axios';
import MyModal from '../../components/modal/modal';
const Cart = () => {
  const { cart } = useSelector(state => state.products);
  const dispatch = useDispatch();

  if (cart.length == 0) {
    return <h1 style={{ marginTop: '50px', textAlign: 'center' }}>Корзина пусто</h1>
  }

  const total = cart.reduce((acc, item) => acc + item.price, 0);
  let token = '1968761951:AAFRx23qyVOI9Xp4_dQI4W56TWbrMVorUkI';
  let api = 'https://api.telegram.org/bot'
  axios.defaults.baseURL = `${api}${token}/`;
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const postOrderProducts = async (form) => {
    try {
      await axios.post('sendMessage', {
        chat_id: '528774019',
        parse_mode: 'HTML',
        text: `Address: ${form.address}
          \nphone number: <a href="">${form.phone}</a>
          \n${cart.map(item => `\nproduct name: ${item.title}`)}
          \nобщая суммы: ${total}`
      })

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Toolbar sx={{ display: 'flex', flexDirection: 'column', }}>
      <h1 style={{ alignSelf: 'flex-start', marginTop: '50px' }}>общая суммы: $ {total}</h1>
      <button onClick={() => dispatch(onToggleModal(true))}>Оформить</button>
      <MyModal postOrderProducts={postOrderProducts}/>
      <Box sx={{
        marginTop: '50px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        display: 'flex'
      }}>
        {
          cart && cart.map(item => <ListItem
            color='#d63031'
            onClick={() => dispatch(deleteItem(item.id))}
            btnText='Удалить из корзину'
            key={item.id}
            display='block'
            {...item} />)
        }
      </Box>
    </Toolbar>
  );
};

export default Cart;