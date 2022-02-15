import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import data from "../data.json";
import Brand from "./Brand";
import Orders from "./Orders";

export const MyBooking = () => {
  return (
    <>
      <h1>Booking Upcoming</h1>
      <Grid container spacing={3}>
        {/* Recent Brand */}

        {data.myBooking.map((item, index) => (
          <Grid key={index} item xs={12} md={4} lg={4}>
            <Brand disable={true} brandId={item.id} orderId={item.id}/>
          </Grid>
        ))}
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
