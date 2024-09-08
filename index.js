import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
/* use inquirer npm package to get user input 
use qr-image npm to turn the user url into qr image 
create a text file to save the user input using native fs node module
*/

inquirer
  .prompt([{
      message : "Type in your URL: ",
      name: "URL"
    },])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    
    fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

