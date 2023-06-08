import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const FavoriteModal = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const [beerName, setBeerName] = React.useState("");

  React.useEffect(()=>{
    setOpen(props.isDialogOpen)
  },[props.isDialogOpen])
  const handleClose = () => {
    setOpen(false);
    props.onHandleClose()
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Favorite Beer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Beer Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event)=>setBeerName(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>{
            props.onHandleClose()
            props.getBeerName(beerName)}}
            >Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FavoriteModal