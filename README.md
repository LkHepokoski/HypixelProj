# HypixelProj

## Description
This project was inspired by SkyCrypt's website for Skyblock statistics and player API information. It was started by myself and 2 other friends (Dora & Ike) whom I played Hypixel Skyblock with. The goal was to create a website that could display and update regularly with Hypixel Dungeons profit chances and item values in real-time to get the highest chance of profit. The project was also started in late August, 2023 as part of a Full-Stack Development course and utilizes Node, React, Google App Scripts, Express, MySQL, and JavaScript.

## Home Page

![homepage](https://github.com/LkHepokoski/HypixelProj/assets/93214397/66196308-156c-43a1-bd69-f92a309f0e0f)

## About Page

![aboutpage](https://github.com/LkHepokoski/HypixelProj/assets/93214397/8c55bf25-ad5e-40b3-9f39-6833accc4283)

## Items Page

![itempage](https://github.com/LkHepokoski/HypixelProj/assets/93214397/3c92c76b-3146-4eb4-b768-78b6f3bf5c5f)

## Floor Profit Page

![floorpage](https://github.com/LkHepokoski/HypixelProj/assets/93214397/558a5c8e-64d3-435c-8f45-1cdd9ef2fa03)

## S+ Page

![spluspage](https://github.com/LkHepokoski/HypixelProj/assets/93214397/aa872579-300e-4cdf-bd5b-7b844c9753f7)

## Non-S+ Page

![nonspage](https://github.com/LkHepokoski/HypixelProj/assets/93214397/4e90cc3f-6651-45ce-a3cb-1a8707b96756)

## Floor-Differences Page

![image](https://github.com/LkHepokoski/HypixelProj/assets/93214397/44c3a9f3-9fa6-47b4-a17e-684632cc244c)

Note: This page shows only the items that are of different drop rates on the S+ floor (compared to the Non-S+ floor) and items that are excluse to the S+ floor.

## Developer Notes
Note that a lot of design and framework choices were made in accordance to complete the full-stack course requirements, the use of a MySQL database could be avoided and instead a simple JSON file could be pulled/created and updated regularly from the Google Sheets file. Likewise, scrolling and search elements along with resizing of the tables could be included, however these caused issues and due to lack of time were not implemented.
Google Sheets could likewise be avoided and all calculations could be done within functions in the program, however this would cause too much strain on the backend and therefore took up too much CPU usage, especially when recalculating values. You can run dbinsert.js after setting up your MySQL database with the .sql file provided and it shall insert all current values from the Google Sheet into your local database, and then running the dbupdate.js file will periodically update your values and reflect those changes on the webpage every 6.5 minutes. The website could also be hosted online, but currently is locally hosted due to time constraints. Simply install all dependencies and then npm run the client and server in the terminal to spool up the project.

# Credits:
* Laurence Svekis: https://www.udemy.com/course/sheet-data-ajax/ https://github.com/theotrain/load-google-sheet-data-using-sql
* Dan Dascalescu: https://stackoverflow.com/a/77391841
* SkyCrypt Team: https://github.com/SkyCryptWebsite/SkyCrypt



