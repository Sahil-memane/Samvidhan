// Function to start a game
async function startGame(endpoint) {
    try {
      const response = await fetch(`/start-${endpoint}`, {
        method: 'POST',
      });
      const data = await response.json();
      console.log(data.message);
  
      // Periodically check for game status
      const intervalId = setInterval(async () => {
        const statusResponse = await fetch(`/game-status?status=${endpoint}`);
        const statusData = await statusResponse.json();
  
        if (statusData.status === 'finished') {
          clearInterval(intervalId);
          // Redirect or refresh the page
          window.location.href = '/'; // Redirect to homepage or desired page
        }
      }, 2000); // Check every 2 seconds
  
    } catch (error) {
      console.error('Error starting the game:', error);
    }
  }
  
  // Bind the startGame function to buttons or events
  document.querySelector('#start-game-1-btn').addEventListener('click', () => startGame('game-1'));
  document.querySelector('#start-game-2-btn').addEventListener('click', () => startGame('game-2'));
  