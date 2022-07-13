import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./mainsearch.css";
import { Button } from "../button/button";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 272,
  },
}));

export const Mainsearch = () => {
  const classes = useStyles();

  const [PickedDate, setPickedDate] = React.useState(
    new Date("2022-02-18T12:00:00")
  );

  const handlePickedDateChange = (Date) => {
    setPickedDate(Date);
  };

  const [DropDate, setDropDate] = React.useState(
    new Date("2022-02-18T12:00:00")
  );

  const handleDropDateChange = (Date) => {
    setDropDate(Date);
  };

  const [pickedTime, setPickedTime] = React.useState(
    new Date("2022-02-18T12:00:00")
  );

  const handlePickedTimeChange = (Date) => {
    setPickedTime(Date);
  };

  const [dropTime, setDropTime] = React.useState(
    new Date("2022-02-18T12:00:00")
  );

  const handleDropTimeChange = (Date) => {
    setDropTime(Date);
  };

  return (
    <>
      <div className="container">
        <div className="search-box">
          <div className="main-search-box">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justifyContent="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="dialog"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker"
                  label="Pickup Date"
                  value={PickedDate}
                  onChange={handlePickedDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                ></KeyboardDatePicker>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Pickup Time"
                  value={pickedTime}
                  onChange={handlePickedTimeChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <KeyboardDatePicker
                  disableToolbar
                  variant="dialog"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker"
                  label="Dropoff Date"
                  value={DropDate}
                  minDate={PickedDate}
                  onChange={handleDropDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                ></KeyboardDatePicker>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Dropoff Time"
                  value={dropTime}
                  onChange={handleDropTimeChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <FormControl className={classes.formControl} margin="normal">
                  <InputLabel>Select City</InputLabel>
                  <Select>
                    <MenuItem value={"Mysore"}>Mysore</MenuItem>
                    <MenuItem value={"Dehradun"}>Dehradun</MenuItem>
                    <MenuItem value={"Goa"}>Goa</MenuItem>
                    <MenuItem value={"Guwahati"}>Guwahati</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </MuiPickersUtilsProvider>
            <div className="searchhbtn">
              <div className="searchtext">
                Search <span>Bikes</span>
              </div>
              <Link to="/productlist">
                <Button
                  className="productsearch"
                  type="button"
                  buttonStyle="btn--primary--solid"
                  buttonSize="btn--large"
                >
                  Search
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="howuse">
        <div className="cardarea">
          <div className="howusetext">How to Use</div>
          <div className="cardss">
            <div className="cardss1">
              <div className="usecard1">
                <div className="bikeimg">
                  <img src="https://github.com/shudhanshu0011/RentalBookingServices/blob/main/src/main/resources/static/images/motorcycle.png?raw=true"></img>
                </div>
                <div className="firsttext">
                  Select your Bike
                  <br />
                </div>
                <div className="secondtext">You can search & select bike.</div>
              </div>
              <div className="usecard2">
                <div className="bikeimg">
                  <img src="https://github.com/shudhanshu0011/RentalBookingServices/blob/main/src/main/resources/static/images/shopping-cart.png?raw=true"></img>
                </div>
                <div className="firsttext">
                  Add to Cart
                  <br />
                </div>
                <div className="secondtext">
                  Easily add multiple bike in your cart.
                </div>
              </div>
            </div>
            <div className="cardss2">
              <div className="usecard3">
                <div className="bikeimg">
                  <img src="https://github.com/shudhanshu0011/RentalBookingServices/blob/main/src/main/resources/static/images/location.png?raw=true"></img>
                </div>
                <div className="firsttext">
                  Pick Your Bike
                  <br />
                </div>
                <div className="secondtext">
                  Find the pickup location and pick a bike.
                </div>
              </div>
              <div className="usecard4">
                <div className="bikeimg">
                  <img src="https://github.com/shudhanshu0011/RentalBookingServices/blob/main/src/main/resources/static/images/distance.png?raw=true"></img>
                </div>
                <div className="firsttext">
                  Ride Anywhere
                  <br />
                </div>
                <div className="secondtext">We do not have kms limit.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
