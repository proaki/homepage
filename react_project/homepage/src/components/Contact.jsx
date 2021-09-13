import React from 'react';
import { FormDialog } from './index';

const Contact = () => {
  return (
    <div className="contact-box" id="contact">
        <p>コンタクト</p>
        <div className="formdialog-box">
            <FormDialog />        
        </div>
    </div>
  )
}

export default Contact