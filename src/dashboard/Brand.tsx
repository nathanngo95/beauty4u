import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { BookingDetail } from "./BookingDetail";

type BrandProps = {
  disable?: boolean;
  orderId?: number;
  brandId: number;
};

export default function Brand(props: BrandProps) {
  const { disable, brandId, orderId } = props;
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="100"
        image="https://aeros.vn/upload/menu/thumb/tiem-nail_thumb.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard Nail center
        </Typography>
        <Typography variant="body2" style={{ color: "red" }}>
          <b>Date :</b> 16 Mar, 2019
        </Typography>
        <Typography variant="body2" style={{ color: "red" }}>
          <b>Time :</b> 08h:00
        </Typography>
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
          <b>Status :</b> Booking
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClickOpen}>
          View detail
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      <BookingDetail
        open={openDialog}
        handleClose={handleClose}
        disable={disable}
        brandId={brandId}
        orderId={orderId}
      />
    </Card>
  );
}
