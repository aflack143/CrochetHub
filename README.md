# crochethub

## Description:
A central location for collection of crochet, knitting, and sewing projects.
[Link to project 2](https://github.com/aflack143/crochethub)

## Brief Example:


## Features:
**_Bronze_**:
* User profile page
    * Sign-up and Login Pages
    * Update option for content on page
    * List of Projects
* User project page
    * Intro Img or Hero
    * Include multiple fields of content

**_Silver_**:
* Author About me on project page
* Comments with user name/img

**_Gold_**:
* User Authentication
* User Favorite project
* Table for Stitch Type

## Technologies Used:
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "dotenv": "^10.0.0",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "method-override": "^3.0.0",
    "nodemon": "^2.0.7",
    "pg": "^8.6.0",
    "sequelize": "^6.6.2",
    "sequelize-cli": "^6.2.0"

## Getting Started:
<img src="https://user-images.githubusercontent.com/80013194/119910857-b36aa680-bf1d-11eb-8f02-1c0b16a24b40.jpg" width="500">
<img src="https://user-images.githubusercontent.com/80013194/119910859-b5cd0080-bf1d-11eb-8542-2d3a7424fb67.jpg" width="500">
<img src="https://user-images.githubusercontent.com/80013194/119910871-bc5b7800-bf1d-11eb-88e8-b67699fc2dbf.jpg" width="500">
<img src="https://user-images.githubusercontent.com/80013194/119910881-c0879580-bf1d-11eb-8f27-501494174f6c.jpg" width="500">
<img src="https://user-images.githubusercontent.com/80013194/119910885-c2515900-bf1d-11eb-925e-9062f23d8663.jpg" width="500">
<img src="https://user-images.githubusercontent.com/80013194/119910876-be253b80-bf1d-11eb-857b-ad1f498d79e2.jpg" width="500">

**_Key notes_**: 
* Members are not seeded due to password encryption. If you seed members then try to use their login credentials there will be an incorrect password error.
* Verify token is coded on server.js, inactive. When ready for user authentication this will be your starting point.

### Sources: 
[Dropdown functionality](https://www.w3schools.com/css/css_dropdowns.asp)<br>
[Text-shadowing](https://stackoverflow.com/questions/13426875/text-border-using-css-border-around-text)<br>
[extbox alignment](https://www.w3docs.com/snippets/html/how-to-align-labels-next-to-inputs.html)<br>
[Joining multiple tables](https://stackoverflow.com/questions/25880539/join-across-multiple-junction-tables-with-sequelize)<br>
[Resizing images for README](https://stackoverflow.com/questions/24383700/resize-image-in-the-wiki-of-github-using-markdown)
[User Authentication](https://git.generalassemb.ly/cfg-seir-2/jwt-auth?organization=cfg-seir-2&organization=cfg-seir-2)
[Radio Button Border](https://stackoverflow.com/questions/17541614/use-images-instead-of-radio-buttons)
[Dropdown values](https://stackoverflow.com/questions/8605516/default-select-option-as-blank)
[Full-size Background](https://www.w3schools.com/css/css3_backgrounds.asp)
[Popping out textbox when overing a name/link](https://stackoverflow.com/questions/54505305/textbox-on-mouse-hover)

In the beginning, I was having an issue with my ports after a system shutdown. I learned the quick way to kill the port when it thinks its already in use: kill-port 3000  (or the port# you are using)
[Kill Ports](https://www.npmjs.com/package/kill-port)