import { useState } from 'react';
import { Autocomplete, Box, TextField, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import { Element, scroller } from 'react-scroll';

function MovieData() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const API_KEY = '44e1bb35dc135c1a7da2785e294674f0';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const searchEndpoint = '/search/movie';

  const scrollToSection = (List) => {
    scroller.scrollTo(List, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const handleSearchSuggestions = (query) => {
    const url = `${BASE_URL}${searchEndpoint}?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setSuggestions(data.results.map(movie => movie.title));
      })
      .catch(error => {
        console.error('Error fetching suggestions:', error);
      });
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      return;
    }

    const url = `${BASE_URL}${searchEndpoint}?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
      scrollToSection('List');
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem' }}>
        <Autocomplete
          disableClearable
          options={suggestions}
          inputValue={searchQuery}
          onInputChange={(event, newValue) => {
            setSearchQuery(newValue);
            handleSearchSuggestions(newValue); // Fetch suggestions as you type
          }}
          renderInput={params => (
            <TextField
              sx={{ width: '30vw', marginTop: '5vh' }}
              {...params}
              label="Search for a movie..."
              variant="standard"
              onKeyPress={handleKeyPress}
            />
          )}
        />
      </Box>
      <div style={{
        background: '#f1f1f1',
        marginBottom: '10vh',
        marginTop: '5vh',
        boxShadow:' 0px 8px 50px -17px rgba(66, 68, 90, 1)',
        borderRadius:'25px'
      }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        <Element name="List">
          <List
            sx={{
              overflowY: 'auto',
              overflowX: 'hidden',
              height: '60vh',
              width: '60vw',
              margin: '5vw'
            }}
          >
            {searchResults.map(movie => (
              <ListItem key={movie.id}>
                <ListItemAvatar>
                  <img
                    style={{
                      width: '10vw',
                      marginRight: '1vw',
                    }}
                    onError="this.onerror=null; this.src='/images/image_not_available.png';"
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} // Use the actual poster path
                  />
                </ListItemAvatar>
                {/* <ListItemText primary={movie.title} secondary={movie.overview} /> */}
                <Box sx={{
                    display:'flex',
                    flexDirection:'column'
                }}><Typography sx={{
                    fontSize: '2rem'
                }}>{movie.title}</Typography>
                <Typography sx={{color:'#777777'}}>{movie.overview}</Typography></Box>

              </ListItem>
            ))}
          </List>
        </Element>
      </div>
    </>
  );
}

export default MovieData;
