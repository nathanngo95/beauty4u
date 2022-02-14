import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { useHistory } from "react-router";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

type DialogProps = {
  open: boolean;
  handleClose: () => void;
  disable?: boolean;
  brandId: number;
  orderId?: number;
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export const BookingDetail = (props: DialogProps) => {
  const { open, handleClose, disable, brandId, orderId } = props;
  let history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (disable) {
      axios
        .delete(`http://localhost:3004/myBooking/${orderId}`)
        .then((response) => console.log(response));
    } else {
      // event.preventDefault();
      const data = new FormData(event.currentTarget);

      const min = 1;
      const max = 10000;
      const id = min + Math.random() * (max - min);
      const dataSubmit = {
        id,
        brandId,
        date: data.get("date"),
        time: data.get("time"),
        name: data.get("name"),
        phone: data.get("phone"),
        staff: data.get("staff"),
        status: "booking",
      };

      axios
        .post("http://localhost:3004/myBooking", dataSubmit)
        .then((response) => console.log(response));
    }
    history.push("/");
  };

  const [staff, setStaff] = React.useState("");

  const handleChange2 = (event: SelectChangeEvent) => {
    setStaff(event.target.value as string);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Nail center
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container>
            <Grid p={1} item xs={6} md={6} lg={6}>
              <CardMedia
                component="img"
                height="250"
                image="https://aeros.vn/upload/menu/thumb/tiem-nail_thumb.jpg"
                alt="green iguana"
              />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Typography variant="body2" color="text.secondary">
                <b>Description :</b>Lizards are a widespread group of squamate
                reptiles, with over 6,000 species, ranging across all continents
                except Antarctica
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Address :</b> Truong Chi Cuong, Da Nang
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Price :</b> 5845897458
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Staff :</b> Vy Truc
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Service :</b> Nail
              </Typography>
            </Grid>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, width: "100%" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Customer name"
                name="name"
                autoFocus
                size="small"
                disabled={disable}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoFocus
                size="small"
                disabled={disable}
              />
              <TextField
                name="date"
                margin="normal"
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                fullWidth
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                disabled={disable}
              />
              <br />
              <TextField
                margin="normal"
                id="time"
                label="Alarm clock"
                type="time"
                name="time"
                defaultValue="07:30"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                sx={{ width: 150 }}
                size="small"
                disabled={disable}
              />
              <br />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-helper-label">
                  Staff
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={staff}
                  label="Staff"
                  onChange={handleChange2}
                  size="small"
                  name="staff"
                  fullWidth
                >
                  {names.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                autoFocus
              >
                {disable ? "Cancel" : "Booking"}
              </Button>
            </Box>
          </Grid>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};
