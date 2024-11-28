const apiKey = 'pk_2fbf8250efd17d6952068aa1489226a1c079bc1d';
const url = 'https://dev.to/mukhilpadmanabhan/top-10-vscode-extensions-to-supercharge-your-workflow-3ige';

const apiUrl = `https://jsonlink.io/api/extract?url=${url}&api_key=${apiKey}`;

// Make a GET request using the Fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Process the JSON response
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });