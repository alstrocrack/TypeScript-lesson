// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();
import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

type GoogleGeocodingResponse = {
  results: {geometry: {location: {lat: number, lng: number}}}[],
  status: 'OK' | 'ZERO_RESULT'
}

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // Google API

  axios.get<GoogleGeocodingResponse>(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`
  ).then((response) => {
    if (response.data.status !== 'OK') {
      throw new Error('cannot get coodonates.')
    }
    // const coordinates = response.data.results[0].geometry.location;
  }).catch(err => {
    alert(err.message);
    console.log(err);
  })
}

form.addEventListener('submit', searchAddressHandler); 