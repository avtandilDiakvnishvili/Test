import React from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomCard from 'components/CustomCard' // Import the CustomCard component

const MainForm = () => {
  const history = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState('');


  const cardsData = [
    { id: 1, title: 'Card 1', category: 'Category A', status: 'Active' },
    { id: 2, title: 'Card 2', category: 'Category B', status: 'Inactive' },
    { id: 3, title: 'Card 3', category: 'Category C', status: 'Active' },
    { id: 4, title: 'Card 4', category: 'Category D', status: 'Inactive' },
  ];

  // Function to handle detail button click
  const handleDetailClick = (cardId) => {
    console.log(`Detail button clicked for card with ID: ${cardId}`);
    // Add your logic here
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNewCardClick = () => {
    history('/form-create');
  };

  return (
    <div>
      {/* Search input field */}
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px' }}
      />
      {/* New Card button */}
      <Button variant="contained" color="primary" onClick={handleNewCardClick} style={{ marginBottom: '20px' }}>
        New Card
      </Button>
      {/* Grid for displaying cards */}
      <Grid container spacing={2}>
        {/* Map through filtered cards and render a CustomCard for each item */}
        {cardsData.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
            <CustomCard
              title={card.title}
              category={card.category}
              status={card.status}
              onDetailClick={() => handleDetailClick(card.id)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MainForm;
