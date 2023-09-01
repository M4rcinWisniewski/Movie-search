import { useState } from 'react';
import { Autocomplete, Box, TextField, List, ListItem, ListItemAvatar, Typography, IconButton } from '@mui/material';
import { Element, scroller } from 'react-scroll';
import SearchIcon from '@mui/icons-material/Search';

function MovieData() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const API_KEY = '44e1bb35dc135c1a7da2785e294674f0';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const searchEndpoint = '/search/movie';

  const scrollToSection = (List) => {
    scroller.scrollTo(List, {
      duration: 900,
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

  const handleButtonClick = () => {

      handleSearch();
      scrollToSection('List');
    
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
            <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column', gap:'3vh'}}><TextField
              sx={{ width: '30vw', marginTop: '5vh', minWidth:'230px' }}
              {...params}
              label="Search for a movie..."
              variant="standard"
              onKeyPress={handleKeyPress}
            /><IconButton  onClick={ handleButtonClick} sx={{fontSize:'1.2rem', borderRadius:'30px', transition:'.2s','&:hover':{color:'#fc8383'}}}>Search<SearchIcon  sx={{marginLeft:'10px'}}/></IconButton></Box>
            
          )}
        />
          

      </Box>
      <div 
        id='box'
        style={{
        background: '#fc8383',
        marginBottom: '10vh',
        marginTop: '5vh',
        boxShadow:' 0px 0px 20px 0px rgba(66, 68, 90, .7)',
        // borderRadius:'25px'
        
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
              margin: '5vw',
            }}
          >
            {searchResults.map(movie => (
              <ListItem key={movie.id} id="elements">
                <ListItemAvatar>
                  <img
                  
                    style={{
                      width: '10vw',
                      minWidth: '100px',
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
                }}><Typography id="title"sx={{
                    fontSize: '2rem',
                    color: '#ffffff'
                }}>{movie.title}</Typography>
                <Typography id="overview" sx={{color:'#dddddd'}}>{movie.overview}</Typography></Box>

              </ListItem>
            ))}
          </List>
        </Element>
      </div>
    </>
  );
}

export default MovieData;
