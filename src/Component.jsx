import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Component.css'
import AppleIcon from '@mui/icons-material/Apple';
function Component() {
  return (
    <div>Component

   <AppleIcon style={{ fontSize: 40 }} className='apple'/>
   <button className='btn btn-success'>OK</button>
    </div>
  )
}

export default Component

