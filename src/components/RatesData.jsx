// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// const Rates = ({ movieId }) => {
//   const [movieDetails, setMovieDetails] = useState(null);
//   const API_KEY = '4e1bb35dc135c1a7da2785e294674f0'; // Replace with your TMDb API key
//   const BASE_URL = 'https://api.themoviedb.org/3';

//   const getMovieDetails = (movieId) => {
//     const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;

//     return fetch(url)
//       .then((response) => response.json())
//       .catch((error) => {
//         console.error('Error fetching movie details:', error);
//       });
//   };

//   useEffect(() => {
//     getMovieDetails(movieId)
//       .then((data) => {
//         setMovieDetails(data);
//       });
//   }, [movieId]); // Update when movieId changes

//   return (
//     <div>
//       {movieDetails && (
//         <div>
//           <p>User Rating: {movieDetails.vote_average.toFixed(1)} / 10</p>
//         </div>
//       )}
//     </div>
//   )
// }
// Rates.propTypes = {
//   movieId: PropTypes.number.isRequired, // Validate movieId prop
// };
// export default Rates;
