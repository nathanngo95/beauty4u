import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React from "react";
import data from "../data.json";
import Brand from "./Brand";
import Box from "@mui/material/Box";

type City = {
  code: number;
  codename: string;
  districts: any;
  division_type: string;
  name: string;
  phone_code: number;
};

export const BrandList = () => {
  const [citys, setCitys] = React.useState<City[]>([]);
  const [cityId, setCityId] = React.useState<number>(0);
  const [dataCurrent, setDataCurrent] = React.useState(data.brandList);

  React.useEffect(() => {
    fetch("https://provinces.open-api.vn/api/")
      .then((rs) => rs.json())
      .then((result) => {
        setCitys(result);
      });
  }, []);

  const handleChangeCity = (event: any) => {
    setCityId(event.target.value);
    setDataCurrent(
      event.target.value !== 0
        ? data.brandList.filter((item) => item.location === event.target.value)
        : data.brandList
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = new FormData(event.currentTarget);
    setDataCurrent(
      data.brandList.filter(
        (item) => item.brandName === result.get("brandName")
      )
    );
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={cityId}
          label="City"
          onChange={handleChangeCity}
          size="small"
        >
          <MenuItem value={0}>
            <em>All</em>
          </MenuItem>
          {citys.map((item, index) => (
            <MenuItem key={index} value={item.code}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120, marginTop: 0 }}>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 1, width: "100%", display: "flex", marginTop: 0 }}
        >
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField
              id="outlined-basic"
              label="Brand name"
              variant="outlined"
              size="small"
              name="brandName"
            />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Button type="submit" variant="outlined" startIcon={<SearchIcon />}>
              Search
            </Button>
          </FormControl>
        </Box>
      </FormControl>
      {dataCurrent && (
        <Grid container spacing={3} mt={1}>
          {dataCurrent.map((item, index) => (
            <Grid key={index} item xs={12} md={4} lg={4}>
              <Brand brandId={item.id} />
            </Grid>
          ))}
        </Grid>
      )}
      {dataCurrent.length === 0 && (
        <h2 style={{ width: "100%", textAlign: "center" }}>No datas</h2>
      )}
    </>
  );
};
