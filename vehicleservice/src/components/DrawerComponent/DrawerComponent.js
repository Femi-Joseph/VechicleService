import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const DrawerComponent = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: 'rgba(79,195,34,1) ' },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {links.map((link, index) => {
            return (
              <ListItemButton
                onClick={() => setOpen(false)}
                key={index}
                divider
              >
                <ListItemIcon>
                  <ListItemText sx={{ color: 'white' }}>{link}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: 'auto', color: 'white' }}
        onClick={() => setOpen(true)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
