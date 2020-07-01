[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

![GitHub contributors](https://img.shields.io/github/contributors/jonkesler/burger)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jonkesler/burger?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/jonkesler/burger)

# Eat-Da-Burger



## Description 
    
Eat-Da-Burger allows the user to create new burgers and when ready they can devoure them.  This application uses Node.js, Express, MySQL, and Handlebards. 

This application uses a front end implemented with HTML/CSS and the backend implemented with Node.js and Express. HTML templating is done with the help of Handlebars.

The user may enter any burger name to add it to the menu. This also adds the new burger entry into the MySQL database. The initial burger entry is added as with the devoured field set to false on the menu and placed on the left side of the screen. The user may then devoure any burger by clicking the devoure button next to it, which moves it into the right side of the screen and updates its status accordingly in the database.
    
    
## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Contact](#contact)
    
    
## Installation
    

To run the application locally, first clone this repository with the following command.

        git clone git@github.com:jonkesler/burger.git for the SSH Repository 
        or 
        git clone https://github.com/jonkesler/burger.git for the HTTPS Repository
        
Next, install the application dependencies.

        With Visual Studio, navigate to the Burgers directory created when you cloned the Repository.
        Right click on the server.js file and open a terminal.
        run npm install

Next, install the database.

        Open the db folder then the schema.sql file.  Copy the contents and run in MySQL.  
        Next open the seeds.sql file and copy and run it's contents in MySQL.
        
Finally, run the node server locally.

        node server
        
Now, open the local application on port 8080 at the URL: `http://localhost:8080`.

**Enjoy and have a burger!**


      
## Demo

The demo of the burger eating application can be found [here](https://---------.herokuapp.com/).



## License

This Project uses a MIT License License.


## Contributing
    
Jon Kesler
    
    
## Contact

If you would like to contribute to this project please contact: 
  Jon Kesler 
  Email:jkesler@hotmail.com   


Web URL: https://jonkesler.github.io/burger/

Repository URL: https://github.com/jonkesler/burger.git

Repository SSH: git@github.com:jonkesler/burger.git



