import React, { useContext } from 'react'
import { ResidenceContext } from '../contexts/ResidenceContextProvider'

function ResidenceCard() {

  const { residences } = useContext(ResidenceContext)

  if (residences) {
    const list = () => {
      return residences.map((residence, i) => {
        return (
        
          <div className="row text-left residenceCard mb-3">
            <div className="col-4 col-lg-2 col-md-3 prevImage">
              <img
                className="cardImage"
                src={residence.image}
                alt="residence-preview"
              />
            </div>
            <div className="col-7">
              <p className="golden mt-3 mb-0 residenceDetailsTitle">
                {residence.id}
              </p>
              <p className="golden residenceDetailsCommonDetails">
                {residence.maxGuests} guests - {residence.numberofbeds} beds -
          {residence.rooms} rooms
        </p>

              <div className="golden residencePriceDetails">
                <p>
                  {residence.pricepernight} kr
            <span className="residenceDetailsCommonDetails"> per night </span>
                </p>
              </div>
            </div>
          </div>


        )
      })
    }
  

    return (
      <>
        {list()}
      </>
    )
  }

  return null;
}

export default ResidenceCard;
