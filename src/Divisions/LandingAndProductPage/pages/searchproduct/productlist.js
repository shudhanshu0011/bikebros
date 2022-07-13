import React, { useContext } from "react";
import "./productlist.css";
import Product from "../../components/product/product";
import Context from "../../store/Context";
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
import { Button } from "../../components/button/button";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 272,
  },
}));
function ProductList() {
  const classes = useStyles();

  const context = useContext(Context);

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
    <div className="container12">
      <div className="searchupdate">
        <div className="iinfo">
          <div className="iiinfo">
            <span>Book bike in easy steps</span>
            <div>
              Renting a bike brings you freedom, and we'll help you find the
              best bike for you at a great price.
            </div>
            <div className="starico">
              <img src="https://raw.githubusercontent.com/shudhanshu0011/Mini-Project/f99fedd9e430be52b393eed4ecfbc7a6bc22ed99/img/star-solid.svg" />
              <img src="https://raw.githubusercontent.com/shudhanshu0011/Mini-Project/f99fedd9e430be52b393eed4ecfbc7a6bc22ed99/img/star-solid.svg" />
              <img src="https://raw.githubusercontent.com/shudhanshu0011/Mini-Project/f99fedd9e430be52b393eed4ecfbc7a6bc22ed99/img/star-solid.svg" />
              <img src="https://raw.githubusercontent.com/shudhanshu0011/Mini-Project/f99fedd9e430be52b393eed4ecfbc7a6bc22ed99/img/star-solid.svg" />
              <img src="https://raw.githubusercontent.com/shudhanshu0011/Mini-Project/f99fedd9e430be52b393eed4ecfbc7a6bc22ed99/img/star-solid.svg" />
              <div>Trusted by millions of customer</div>
            </div>
          </div>
        </div>
        <div className="updatesec">
          <div className="updatecard">
            <div className="updatecard1">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className="updateinput">
                  <FormControl className={classes.formControl} margin="normal">
                    <InputLabel>Select City</InputLabel>
                    <Select>
                      <MenuItem value={"Mysore"}>Mysore</MenuItem>
                      <MenuItem value={"Dehradun"}>Dehradun</MenuItem>
                      <MenuItem value={"Goa"}>Goa</MenuItem>
                      <MenuItem value={"Guwahati"}>Guwahati</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="updateinput">
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
                </div>
                <div className="updateinput">
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
                </div>
              </MuiPickersUtilsProvider>
            </div>
            <div className="updatecard1">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className="updateinput">
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
                </div>
                <div className="updateinput">
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
                </div>
              </MuiPickersUtilsProvider>
              <div className="updateinput">
                <div className="updateinput1">
                  <Button
                    className="productsearch"
                    type="button"
                    buttonStyle="btn--primary--solid"
                    buttonSize="btn--large"
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filterAndResult">
        <div className="filterarea1">
          <div className="filterarea">
            <div className="filtercard">
              <div className="filterheader">Filter by :</div>
              <div className="fltrmodel">
                <div className="fltrhdr">Brands</div>
                <div className="fltrprices">
                  <div>
                    <label>
                      <input type="checkbox" />
                      <span>Royal Enfield</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="checkbox" />
                      <span>KTM</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="checkbox" />
                      <span>Avengers</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="checkbox" />
                      <span>Pulsar</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="checkbox" />
                      <span>Activa</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="fltrprice">
                <div className="fltrhdr">Price</div>
                <div className="fltrprices">
                  <div>
                    <label>
                      <input type="checkbox" />
                      <span>0 - Rs. 500</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="checkbox" />
                      <span>Rs. 500 - Rs. 1000</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="checkbox" />
                      <span>Rs. 1000 - Rs. 1500</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="checkbox" />
                      <span>Rs. 1500 - Rs. 2000</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="checkbox" />
                      <span>Rs. 2000 +</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="fltrreviews">
                <div className="fltrhdr">Reviews</div>
                <div className="fltrprices">
                  <div>
                    <label>
                      <input type="checkbox" />
                      <span>5 star</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="checkbox" />
                      <span>4 star +</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="checkbox" />
                      <span>3 star +</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="checkbox" />
                      <span>2 star +</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="checkbox" />
                      <span>1 star +</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="searchresultarea">
          <div className="searchresultarea1">
            {context.products.map((p) => (
              <Product
                key={p.id}
                id={p.id}
                imageurl={p.imageurl}
                price={p.price}
                model={p.model}
                date={p.date}
                city={p.city}
                addProductToCart={context.addProductToCart}
              ></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
