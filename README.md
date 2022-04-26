# SLST -  Share document and Contest 
Link to SLST - Frontend: https://github.com/FunDev-Team/SLST-frontend

API Document: https://github.com/FunDev-Team/SLST-frontend
<p align="center">
  <img src="https://github.com/FunDev-Team/SLST-frontend/blob/main/public/logo.png" width="100px" title="hover text">
</p>

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
