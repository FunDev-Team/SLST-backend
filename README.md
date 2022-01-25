# SLST -  Share document and Contest 
<p align="center">
  <img src="https://github.com/FunDev-Team/SLST-frontend/blob/main/public/logo.png" width="100px" title="hover text">
</p>

## :office: Table of contents
* [Project infomation](#project-infomation)
* [FunDev - Team](#funDev-Team)
* [Prerequisites](#prerequisites)
* [Guide](#guide)
* [Project structure](#project-structure)
* [Contact](#contact)

## :memo: Project infomation
 * SLST : Self-Learn Self-Taught
 * SLST is a non-profit website where free materials are shared. Besides, you can also try your hand at selected and continously updated tests.

## :family_man_boy_boy: FunDev - Team
  FunDev is a group of information technology students from HCMUS and CTU, the goal of developing a project to help the student community develop more. 

## :old_key: Prerequisites
Before you start, ensure you meet the following requirements:
  - [x] You have intalled the Visual Studio Code or any other Javascript enabled enviroment.
  - [x] You also have to install NodeJS LTS and npm
  - [x] You have a basic understand of Typescript, Tailwind.

## :page_with_curl: Guide:
### Cloning the project to your local
  - Open Git bash
  - Paste folllowing command:
```
$ git clone https://github.com/FunDev-Team/SLST-frontend.git
```
  
### Running on local using npm
 #### Install
  At the terminal, paste the command:
```
$ npm install
```
 #### Usage
   - After installing enviroment, using command to run:
```
$ npm run 
```
   - Click url : http://localhost:3000 to run on local.
  
### Deloying on netlify by drag and drop
  - Step 1 : At the terminal, create file build:
``` 
$ npm run build 
```
  - Step 2 : Open netlify and log in netlify in browser
  - Step 3 : Drag and drop the newly created build file into the upload section on netlify to proceed with deloy project

## :books: Project structure
  ### I. Functions of the website
  | Function name | Specific implemantation |
  | ------------- | :-----------------------: |
  | Home | Home page of website, performing blog posts |
  | About | Information about the website design team and the message |
  | Exam | Organizing mock tests on the website |
  | TaiLieu | Organizing materials |
  | Admin | Providing admin rights to add or remove materials and tests |
    
  ### II. Program directory structure 
  Present only the important files and need to know in the project:
  1. public : Files about icons and images used in the website interface, images can be viewed on the website by the url of that image.
  2. src :
    - api : query to a set of functions in use. Contains api files to call to the server.
    - acountsApi.tsx : collecting api calls to the admin
      - docsAPI.tsx : get informations about materials
      - examsApi.tsx : get API about tests and questions in every test.
    - components : includes shared components such as Header, Footer...
    - pages : contains the program's pages including: Home, About, Admin, Exam, TaiLieu
      - About : About-page component which provide information of website like Project, Members, Users
      - Admin : Admin-page component allow to access admin rights
      - Home : Home-page component
      - Exam : Exam-page component manage tests
      - TaiLieu : TaiLieu-page component
          
## :phone: Contact
  - HongTan: [Facebook](https://www.facebook.com/hongtan1422002/)
  - DuyKhuong: [Facebook](https://www.facebook.com/profile.php?id=100014937931401)
  - HuuLoc: [Facebook](https://www.facebook.com/huynh.h.loc.92/)
  
## :copyright: License
  Copyright © 2022 FunDev - Team
