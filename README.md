## Canada Crime Data Dashboard

## Overview of Project
From all Canada&apos;s crime reports that have occurred in different provinces every year my Crime Data Dashboard gives an insight on the Top 5 crimes that has occurred in Canada during the year 2008 to 2012 which are most likely to impact the inhabitants in Canada.

Here I have developed a visualization system using data from Ontario&apos;s Data Catalogue.


![IMAGE](assets/images/Dashboard.jpg)
## User experience (UX) design
The following features have been added to make the user experience interactive
- The Crime Data Dashboard is a single page application with a fixed top nav bar. 
- It provides &quot;at a glance&quot; results for policing topic areas and allows users to click through each area to learn more through visualizations.
- It is possible to navigate through the site using mouse or arrow keys. 
- The site provides graphs of various kinds of graphs which include Row Charts, Pie Charts, Bar charts , Number display and Select menu for refining search, thus  giving a visualized information about the crime rate for years 2008- 2012  in Canada.
- This charts are interactive in a way that it can be filtered based on any requirements of the client just on a click
- The web page also provide a Reset button to clear any filters applied to the webpage as well a scrolling Top button on the right which shows once the user scrolls down the page.


#### User Stories
The various users of this Dash Board would be
- Police Service
- Crime Analyst

As any one of the users, he/she would be interested in finding information about the following

- Total crimes reported per 100,000 inhabitants for each year or collectively.
- From all the crimes reported which crime has the highest record reported.
- Total crime in each province of Canada.
- Statistics of individual crimes for each year and vice versa.
- The graphs can portray different pieces of information to users when different options are selected or when filters are applied.

For a Crime Analyst the dashboard could encourage further investigation, research and study to the subject that is being displayed.

## Wireframes for Desktop and mobile version
[Wireframes for Desktop Version](https://www.dropbox.com/s/9do41b7vp4l7avr/DesktopVersion1.jpg?dl=0)<br/>
[Wireframes for Desktop Version Continue](https://www.dropbox.com/s/o4evmz3e46o8szt/DesktopVersion2.jpg?dl=0)<br/>
[Wireframes fo Mobile Version](https://www.dropbox.com/s/x5nw1pabnu194ru/MobileVersion1.jpg?dl=0)<br/>
[Wireframes for Mobile Version Continue](https://www.dropbox.com/s/irnyosfytfmdwr4/MobileVersion2.jpg?dl=0)<br/>

## Features
Following features have been implemented for ease of use
- <b>Number Display</b>–Displays the total crimes reported per 100,000 inhabitants ,this value changes based on selection made using the year and crime selectors
- <b>Year selector</b>- Provides a drop down for users to make a selection on the years(2008-2012) to fetch the crimes reported information.
- <b>Top 5 Offence Row Chart</b>- displays the individual crime record reported. This row chart can be filtered by clicking any crime. This would in turn act as a filter changing the other visualization on the page.
- <b>Total crimes each year Bar chart</b>- This is a simple visualization displaying the total crimes reported each year.
- <b>Reported Crimes each province Pie Chart</b>- This chart displayed the crimes reported in the 10 provinces in Canada.
- <b>Stack Charts</b>- displays total crimes per category per year and vice versa
- <b>Reset button</b> is provided to cancel out any filters made.
- <b>Top button </b> a scrollable top button appears to the right of the page when the users scrolls along.
- <b>Footer</b> displays social media connector as  a clickable icon that can be directed to my github website and a back to top button that takes a user to the top of the page.

## Technologies used includes:
<b>HTML5</b>: to create structure of webpage.
<b>CSS3</b>: to style webpage, I used external stylesheet, file located in assets/css/style.css .
<b>Bootstrap v 3.3.7</b>- For css styling, I used grid and responsive behavior of controls.
       CDN link included from https://getbootstrap.com/docs/3.3/getting-started/.
       for controls and classes https://getbootstrap.com/docs/3.3/css/.
<b>Javascript  and JQuery</b>: Used Jquery for interactivity and client side chart rendering
<b>Google Fonts</b>: for additional font-family options https://fonts.google.com/. 
Fonts used are Roboto|Yanone+Kaffeesatz
<b>Font Awesome</b>: for social media icons and envelope icon https://fontawesome.com/.
<b>JS Libraries to visualise, explore and filter datasets</b>
- d3.js- used to build charts
- crossfilter.js-filters data in csv file
- dc.js : makes d3 and crossfilter work swimmingly
- queue.js: Use to load data