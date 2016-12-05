# CRC Live Count

This project is an Angular 2-based web application running on Georgia Tech Plesk servers. It keeps track of the current occupancy of the Campus Recreation Center (CRC) at Georgia Tech, overall occupancy and each section within the CRC. When there is no recent updated data provided by the CRC, the project runs a prediction algorithm to predict the occupancies. It also shows trends with line charts based on the history of occupancy.

## Getting Started


These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites


```
Npm 3.10.9 - https://www.npmjs.com/
Node.js 6.6.0 - https://nodejs.org/en/
Python 2.7.12 - https://www.python.org/downloads/release/python-2712/
Pandas 0.19.1  - http://pandas.pydata.org/pandas-docs/stable/install.html
```

### Installing

Clone the repository from 
```
https://github.com/jackli439/jdesign2.git
```
Navigate to src/ and run npm install to install the required packages.
Make sure the excel spreadsheet used by the application is placed in the root folder and named 
```
crc.xlsx
```
To start the local server, run npm start. This should start the server at http://localhost:5555. You can now navigate to that site using any web browser.

To run backend scripts manually, navigate to the root folder
Run the following to create the necessary data files used by the application
```
python backend.py
python prediction.py
```



## Deployment

This application should be deployed on the Plesk Web server. The prediction.py and backend.py scripts should be set to run repeatedly as scheduled tasks. Run backend.py however often you want to check for new data and run prediction.py for however often you want updated predictions. Should any past data be changed at any point, run backend.py -c to regenerate the data with the fix. Backend.py will ignore these fixes otherwise. 

## Built With


* Angular 2 - The web framework used
* Chart.js - The chart graphic for stats
* Python - Main framework for backend


## Authors

* **Jack Li** - Front end development
* **Royce Kim** - Front end development
* **Nimish Todi** - Back end development
* **Stephen Dao** - Front end development
* **Tyler Abney** - Back end development


## Unfinished Features


* Machine learning based predictions
* Administrative login to change data, areas


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments


* Campus Recreation Center at Georgia Tech for support
* Professors Robert Waters and Liz Hutter for guidance


