import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { onToggleModal, removeCart } from '../../redux/slices/productSlice';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const initialState = {
  phone: '',
  address: ''
}

export default function MyModal({ postOrderProducts }) {

  const { open, } = useSelector(state => state.products);

  const [form, setForm] = useState(initialState);
  
  const dispatch = useDispatch();

  const handelChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleClose = () => dispatch(onToggleModal(false))

  const onOrderPost = async () => {
    await postOrderProducts(form)
    setTimeout(() => {
      dispatch(onToggleModal(false))
      dispatch(removeCart())
    }, 1500)
  }


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Оформить
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '10px' }}>
              <TextField
                name="address"
                value={form.address}
                onChange={handelChange}
                id="outlined-basic"
                label="Адрес"
                variant="outlined" />
              <TextField
                name="phone"
                value={form.phone}
                onChange={handelChange}
                id="outlined-basic"
                label="Телефон номер"
                variant="outlined" />
            </div>
            <div>
              <Button onClick={onOrderPost}>Оформить</Button>
              <Button onClick={() => dispatch(onToggleModal(false))}>Отмена</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}