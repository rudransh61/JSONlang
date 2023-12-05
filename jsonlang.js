import * as jsonlang from './src/index.mjs';
import { readFile } from 'fs/promises';

const jsonFilePath = './helloworld.json';
// var parsedObject = '';
async function readAndParseJsonFile(jsonFilePath) {
  try {
    const data = await readFile(jsonFilePath, 'utf8');
    const parsedObject = JSON.parse(data);
    console.log(parsedObject);

    const output = jsonlang.start(parsedObject);
    var jsonoutput = JSON.stringify(output);
    console.log(jsonoutput);

  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
  }
}

// Usage
readAndParseJsonFile(jsonFilePath);

// console.log(parsedObject);
