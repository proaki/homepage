import React, {useState, useCallback} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from './TextInput';


const FormDialog = () => {    
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[description, setDescription] = useState("");
    const[open, setOpen] = useState(false);  
      
  
    const handleOpen = useCallback(() => {
      setOpen(true)
    },[setOpen]);

    const handleClose = useCallback(() => {
      setOpen(false)
    },[setOpen]);

    const inputName = (event) => {
        setName(event.target.value)
      }
    const inputEmail = (event) => {
        setEmail(event.target.value)
      }
    const inputDescription = (event) => {
        setDescription(event.target.value)
      } 

    const validateEmailFormat = (email) => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return regex.test(email)
    }

    const validateRequiredInput = (...args) => {
        let isBlank = false;
        for (let i = 0; i < args.length; i=(i+1)|0) {
            if (args[i] === "") {
                isBlank = true;
            }
        }
        return isBlank
    };

    const submitForm = () => {
      const isBlank = validateRequiredInput(name, email, description)
        const isValidEmail = validateEmailFormat(email)

        if (isBlank) {
            alert('必須入力欄が空白です。')
            return false
        } else if (!isValidEmail) {
            alert('メールアドレスの書式が異なります。')
            return false
        } else {

        const payload = {
          text: 'お問い合わせがありました\n' +
                'お名前:' + name + '\n' +
                'Email:' + email + '\n' +
                'お問い合わせ内容:\n' + description
        }

        const url = 'https://hooks.slack.com/services/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'

        fetch(url, {
          method: 'POST',
          body: JSON.stringify(payload)
        }).then(() => {
          alert('送信が完了しました。追ってご連絡します！');
          setName("")
          setEmail("")
          setDescription("")
          
          return handleClose()
        })
      }
    }
      
      
    return(
      <div>
          <Button onClick={handleOpen} >お問い合わせ</Button>
          <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
          >
              <DialogTitle id="alert-dialog-title">{"お問い合わせフォーム"}</DialogTitle>
              <DialogContent>
                  <DialogContentText>
                      <TextInput
                        label={"お名前(必須)"} multiline={false} rows={1}
                        value={name} type={"text"} onChange={inputName}
                        />
                      <TextInput
                        label={"メールアドレス(必須)"} multiline={false} rows={1}
                        value={email} type={"email"} onChange={inputEmail}
                        />
                      <TextInput
                        label={"お問い合わせ内容(必須)"} multiline={true} rows={5}
                        value={description} type={"text"} onChange={inputDescription}
                        />

                  </DialogContentText>
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    キャンセル
                  </Button>
                  <Button onClick={submitForm} color="primary" autoFocus>
                    送信する
                  </Button>
              </DialogActions>
          </Dialog>
      </div>
    )
}


export default FormDialog