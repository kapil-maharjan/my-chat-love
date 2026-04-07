const footballTeam = {
  team: 'Manchester United', year: 1999, headCoach:'Sir Alex Ferguson', 
  players: [ 
    { name: 'Peter Schmeichel', position: 'goalkeeper', isCaptain: false }, 
    { name: 'Raimond Van Der Gouw', position: 'goalkeeper',isCaptain: false},
    { name: 'Gary Neville', position: 'defender', isCaptain: false},
    {	name: 'Wesley Brown', position: 'defender', isCaptain: false},
    { name: 'Jaap Stam', position: 'defender', isCaptain: false},
    { name: 'Ronny Johnsen', position: 'defender', isCaptain: false},
    { name: 'Denis Irwin', position: 'defender', isCaptain: false},
    { name: 'David Beckham', position: 'midfielder', isCaptain: false},
    { name: 'Ryan Giggs', position: 'midfielder', isCaptain: false},
    { name: 'Roy Keane', position: 'midfielder', isCaptain: true},
    { name: 'Paul Scholes', position: 'midfielder', isCaptain: false},
    { name: 'Nicky Butt', position: 'midfielder', isCaptain: false},
    { name: 'Andrew Cole', position: 'forward', isCaptain: false},
    { name: 'Terry Sheringham', position: 'forward', isCaptain: false},
    { name: 'Dwight Yorke', position: 'forward', isCaptain: false},
    { name: 'Ole Gunnar Solskjaer', position: 'forward', isCaptain: false}
  ]
};
document.querySelector('#head-coach').innerText = footballTeam.headCoach;
document.querySelector('#team').innerText = footballTeam.team;
document.querySelector('#year').innerText = footballTeam.year;

// Test

// Select the container for player cards and the filter dropdown
const playerCardsContainer = document.getElementById('player-cards');
const positionFilterDropdown = document.getElementById('players');

// Function to create a player card HTML string
const createPlayerCardHTML = (player) => {
  const captainStatus = player.isCaptain ? " (Captain)" : "";
  return `
    <div class="player-card">
      <h2>${player.name}${captainStatus}</h2>
      <p>Position: ${player.position}</p>
    </div>
  `;
};

// Function to render players based on a filter position
const renderPlayers = (players) => {
  playerCardsContainer.innerHTML = ''; // Clear existing cards

  // Filter players if a specific position is selected
  const filteredPlayers = players === 'all'
    ? footballTeam.players
    : footballTeam.players.filter(player => player.position === players);

  // Generate HTML for filtered players
  const playersHTML = filteredPlayers.map(createPlayerCardHTML).join('');

  // Insert the generated HTML into the container
  playerCardsContainer.innerHTML = playersHTML;
};

// Function to handle the dropdown menu change event
const handleFilterChange = (event) => {
  const selectedPosition = event.target.value;
  renderPlayers(selectedPosition);
};

// Attach the event listener to the dropdown menu
positionFilterDropdown.addEventListener('change', handleFilterChange);

// Initial rendering of all players when the page loads
renderPlayers('all');
