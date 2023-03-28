import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
   
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '7d6edbb9b1msh66ab02fc32ab96dp154fb5jsnf22927a25a42',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
    
export const fetchFromApi = async (url) => {

 const {data} =   await axios.get(`${BASE_URL}/${url}`, options);
return data;

}
