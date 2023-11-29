// Specify the path to your JSON file
const jsonFilePath = 'path/to/data.json';

import 'src/index.js';
fetch(jsonFilePath)
  .then(response => {
   
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });
