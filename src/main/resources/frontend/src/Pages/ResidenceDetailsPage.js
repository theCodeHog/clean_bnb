//REACT
import React, { useContext, useEffect, useState } from "react";
import { Button, FormGroup, Input } from "reactstrap";
import { useParams } from "react-router-dom";

//CONTEXTPROVIDERS
import { ResidenceContext } from "../contexts/ResidenceContextProvider";
import { AmenityContext } from "../contexts/AmenityContextProvider";

//COMPONENTS
import SearchBar from "../components/SearchBar";
import Calender from "../components/Calender";
import CarouselComponent from "../components/CarouselComponent";

//REACT ICONS
import { FaSwimmingPool, FaSnowflake, FaBath, FaTv, FaWifi, FaTemperatureLow } from 'react-icons/fa';
import { MdLocalLaundryService, MdLocalDrink, MdStreetview } from 'react-icons/md';


function ResidenceDetailsPage() {
  let { id } = useParams();
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const {
    residence,
    address,
    residenceImages,
    fetchResidenceImages,
    fetchResidenceDetails,
  } = useContext(ResidenceContext);
  const { residenceAmenity, fetchResidenceAmenity } = useContext(AmenityContext)

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    fetchResidenceDetails(id);
    fetchResidenceImages(id);
    fetchResidenceAmenity(id);
  }, []);

  function confirmPolicies() {
    var checkBox = document.getElementById("policies");
    /* if (checkBox.checked == true) {
      //allow client to book the residence
    } else {
      //don't allow client to book the residence
    } */
  }

  return (
    <div>
      <SearchBar></SearchBar>
      <div className="white">
        <div className="col-12 justify-content-center">
          <div className="residenceDetailsPageTitle golden text-center">
            {residence.title}
          </div>
          {/* <div className=" sliderContainer container col-12 col-lg-6">  </div> */}
        </div>
        <CarouselComponent></CarouselComponent>
        <div className="row m-4">
          <img
            width="60px"
            height="60px"
            src={residenceImages.imagePath}
            className="userImage mr-3"
          />
          <div className="residenceDetailsPageAddress golden mr-5">
            {address.city}, {address.city}
          </div>
          {/* <img width="60px" height="60px" src={residenceImages.imagePath} className="userImage mr-3" /> */}
          <h4 className="golden priceTag">
            ${residence.pricepernight}{" "}
            <span className="perNight">per night</span>
          </h4>
        </div>
        <hr></hr>
        <div className="row m-4">
          <div className="residenceDetailsPageDescription golden m-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            iaculis eleifend diam non consequat. Maecenas faucibus, est eleifend
            venenatis dictum, eros elit laoreet lorem, quis imperdiet tortor
            lectus quis mi. In molestie tincidunt ante, blandit vulputate nisi
            aliquet sed. Suspendisse sit amet eros tortor. Nam ex lorem, porta
            id gravida ut, dictum a risus. Nulla feugiat massa vel ex
            scelerisque, ut sollicitudin massa fermentum. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam tellus nisi,
            pharetra eu dui id. Ullamcorper laoreet elit.<br></br>
            <br></br>Vivamus pulvinar purus a velit dictum lobortis sit amet sit
            amet tortor. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Mauris nec gravida massa. Donec orci
            augue, pellentesque ac molestie eu, ultrices hendrerit ex. Aliquam
            lobortis, sem id condimentum semper, odio libero gravida velit,
            vitae bibendum libero dui quis lacus. Donec tincidunt, felis eu
            consectetur ultrices, sapien orci volutpat lectus, vel faucibus
            magna nibh a risus. Proin et felis ultrices nulla feugiat venenatis
            id vel risus.
          </div>
        </div>
        <hr></hr>
        <div className="row m-4">
          <div className="col-12 residenceDetailsPageAddress golden mr-5">
            Amenities
          </div>
          <div className="darkbrowntext row mt-3 ml-1">
            {residenceAmenity.balcony && <p className="col-6"><MdStreetview className="golden" /> Balcony</p>}
            {residenceAmenity.swimmingpool && <p className="col-6"><FaSwimmingPool className="golden" /> Swimming Pool</p>}
            {residenceAmenity.wifi && <p className="col-6"><FaWifi className="golden" /> WiFi</p>}
            {residenceAmenity.television && <p className="col-6"><FaTv className="golden" /> Television</p>}
            {residenceAmenity.bathtub && <p className="col-6"><FaBath className="golden" /> Bathtub</p>}
            {residenceAmenity.washingmachine && <p className="col-6"><MdLocalLaundryService className="golden" /> Washing Machine</p>}
            {residenceAmenity.fridge && <p className="col-6"><FaTemperatureLow className="golden" /> Fridge</p>}
            {residenceAmenity.freezer && <p className="col-6"><FaSnowflake className="golden" /> Freezer</p>}
            {residenceAmenity.dishwasher && <p className="col-6"><MdLocalDrink className="golden" /> Dishwasher</p>}
          </div>
        </div>
        <hr></hr>
        <div className="row m-4">
          <div className="col-12 residenceDetailsPageAddress golden mr-5">
            Availability
          </div>
          <Calender></Calender>
        </div>
        <hr></hr>
        <div className="row ml-4 mr-4 justify-content-center">
          <div className="col-12 residenceDetailsPageAddress golden ml-1.5">
            Guests
          </div>
          <div className="col-9 golden mt-3 mr-3">
            Amount of guests (including children):
            <FormGroup>
              <Input
                type="select"
                name="guestSelection"
                id="guestSelection"
                onChange={e => setNumberOfGuests(e.target.value)}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </Input>
            </FormGroup>
          </div>
          <div className="col-9 golden m-3">
            <b>Total price:</b>
          </div>

          <div className="row golden mb-3">
            <input
              type="checkbox"
              className="mt-1 mr-2"
              id="policies"
              onClick={confirmPolicies()}
            />
            Agree to the
            <a
              href="https://www.airbnb.com/help/topic/250/terms-policies"
              target="_blank"
              className="ml-1 policiesLink"
            >
              terms and policies
            </a>
          </div>

          <Button className="bookingButton mb-5 p-2">
            BOOK THIS RESIDENCE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ResidenceDetailsPage;
