import React, { useState } from 'react'
import cn from 'classnames';
import { MdAdd } from 'react-icons/md'


import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export default function WhatsappFAB({ actions }) {

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const phoneNumber = "50364285647";
    const message = '¡Hola! Estoy interesado en conocer mas.';

    const whatsappUrl = isMobile
        ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

        : `https://web.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;
    ;

    const handleOpenWhatsapp = () => {

        window.open(whatsappUrl, '_blank');


    }


    return (
        <Box
            sx={{
                '& > :not(style)': { m: 1 },
                position: 'fixed',
                right: '20px', // Ajusta la posición del elemento flotante desde el lado derecho
                bottom: '20px', // Ajusta la posición vertical desde abajo
            }}
        >
            <Fab aria-label="add"
            color='primary'
                onClick={handleOpenWhatsapp}
                sx={{
                    backgroundColor: "#00BD07",
                    color: "#ffffff"
                }}
            >
                <WhatsAppIcon />
            </Fab>

        </Box>
    );
}
