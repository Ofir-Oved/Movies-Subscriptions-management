import * as React from 'react';
import Box from '@mui/material/Box';
import cameraIcon from './film-movie-icon.png';

export function SitemarkIcon() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <img src={cameraIcon} alt="Camera icon" style={{ width: 32, height: 32 }}/>
      <Box 
        component="span" 
        sx={{ 
          fontSize: '18px', 
          fontWeight: 'bold', 
          color: 'black',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        Movies &amp; Subscriptions Management
      </Box>
    </Box>
  );
}