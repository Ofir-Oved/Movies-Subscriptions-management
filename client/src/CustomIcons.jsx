import * as React from 'react';
import Box from '@mui/material/Box';
import VideocamIcon from '@mui/icons-material/Videocam';

export function SitemarkIcon() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {/* Use Material-UI's built-in icon */}
      <VideocamIcon sx={{ fontSize: 32, color: 'black' }} />
      
      {/* Text beside the icon */}
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