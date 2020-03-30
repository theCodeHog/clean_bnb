import React, { createContext, useState, useEffect } from "react";

export const ResidenceContext = createContext();

export default function ResidenceContextProvider(props) {
  const [residences, setResidences] = useState(null);
  const [residencesSearchResults, setResidencesSearchResults] = useState(null);
  const [residence, setResidence] = useState(Object);
  const [address, setAddress] = useState(Object);
  const [residenceImages, setResidenceImages] = useState("");

  const fetchResidence = async () => {
    let res = await fetch("/rest/residences/");
    try {
      res = await res.json();
      setResidences(res);
      console.log(res);
    } catch {
      console.log("Not authenticated");
    }
  };

  const fetchResidenceDetails = async id => {
    let res = await fetch("/rest/residence/" + id);
    res = await res.json();
    setResidence(res);
    setAddress(res.address);
  };

  const fetchResidenceImages = async id => {
    let res = await fetch("/rest/images/" + id);
    res = await res.json();
    setResidenceImages(res);
  };

  const fetchResidenceSearchResults = async val => {
    let res = await fetch(
      "/rest/residences/" + val.destination + "/" + val.numberofguests
    );
    console.log(res + "1");
    res = await res.json();
    console.log(res + "2");
    setResidences(res);
  };

  const values = {
    residences,
    fetchResidence,
    setResidences,
    residence,
    setResidence,
    fetchResidence,
    fetchResidenceImages,
    residenceImages,
    residencesSearchResults,
    fetchResidenceSearchResults,
    fetchResidenceDetails,
    address
  };

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  );
}
