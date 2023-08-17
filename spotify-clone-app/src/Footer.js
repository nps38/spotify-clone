import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <p>Album and song details</p>
      </div>
      <div className="footer_center">
        <p>Player controls</p>
      </div>
      <div className="footer_right">
        <p>volume controls</p>
      </div>
    </div>
  )
}

export default Footer