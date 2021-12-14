import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { Alert } from 'react-bootstrap';

function contact() {
    const [formData, setFormData] = useState({ name: '', username: '', message: '' });
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [confirmconnect, setConfirmconnect] = useState(false)
    async function handleSubmit(e){
        e.preventDefault();
        try {
            setError("")
            setLoading(true)
            await axios.post('https://medisocial.herokuapp.com/connect/', formData)
            setConfirmconnect(true)
        } catch {
            setError("Failed to connect, please check your network and try again")
            setLoading(false)
        }
    }
    const handleClickconfirmconnect = ()=>{
        setConfirmconnect(false)
      }
    return (
        <div>
    <p className="w-100 text-center mt-2">
    If you are facing any issue in creating an account in this Application or some other kind of issue, you can call on this no.
    <br/>
    Phone: 6306363669
    <br/>
    or</p>
    <Typography variant="h4" style={{left: '50%',}}>Leave a message</Typography>
                <br/>
            <Paper style={{padding: 'theme.spacing(2)',}}>
                <form autoComplete="off" style={{
                 display: 'flex',
                 flexWrap: 'wrap',
                 justifyContent: 'center',
                 bottom: 30
                 }} 
                 onSubmit={handleSubmit}>
                {error && <Alert variant="danger">{error}</Alert>}
                <TextField  variant="outlined" label="Enter your name" required fullWidth value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <TextField  variant="outlined" label="Enter your contact no. or mail id.." required fullWidth value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                <TextField  multiline rows={4} variant="outlined" label="Enter your message" required fullWidth value={formData.messsage} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                <Button disabled={loading} style={{ marginBottom: 10,}}variant="contained" color="primary" size="large" type="submit" fullWidth>Send</Button>
                </form>
            </Paper>
            <Dialog
        open={confirmconnect}
        onClose={handleClickconfirmconnect}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Message sent successfully,we will contact you soon"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClickconfirmconnect} color="primary" autoFocus>
           Okay
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default contact
