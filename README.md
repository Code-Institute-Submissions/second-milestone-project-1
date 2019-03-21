## Canada Crime Data Dashboard

## Overview of Project
From all Canada&apos;s crime reports that have occurred in different provinces every year my Crime Data Dashboard gives an insight on the Top 5 crimes that has occurred in Canada during the year 2008 to 2012 which are most likely to impact the inhabitants in Canada.

Here I have developed a visualization system using data from Ontario&apos;s Data Catalogue.


![IMAGE](assets/images/DashBoard.JPG)
## User experience (UX) design
The following features have been added to make the user experience interactive
- The Crime Data Dashboard is a single page application with a fixed top nav bar. 
- It provides &quot;at a glance&quot; results for policing topic areas and allows users to click through each area to learn more through visualizations.
- It is possible to navigate through the site using mouse or arrow keys. 
- The site provides graphs of various kinds which include Row Chart, Pie Chart, Bar Chart/Stack Charts , Number display and Select menu for refining search, thus  giving a visualized information about the crime rate for years 2008- 2012  in Canada.
- This charts are interactive in a way that it can be filtered based on any requirements of the client just on a click.
- The web page also provide a Reset button to clear any filters applied to the webpage 
- A scrolling Top button appears on the right of the webpage which appears once the user scrolls down the page.


#### User Stories
The various users of this Dash Board would be
- Police Service
- Crime Analyst

As any one of the users, he/she would be interested in finding information about the following

- Crime rates recorded based on Year,Provinces and a specific Crime type
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
- <b> Crime Selector</b>- Provides select options for users for the different crime rates reported.
- <b> Province Selector</b> - Drop down with the 10 provinces of Canada.
- <b>Top 5 Offence Row Chart</b>- displays the individual crime record reported. This row chart can be filtered by clicking any crime. This would in turn act as a filter changing the other visualization on the page.
- <b>Total crimes each year Bar chart</b>- This is a simple visualization displaying the total crimes reported each year.
- <b>Reported Crimes each province Pie Chart</b>- This chart displayed the crimes reported in the 10 provinces in Canada.
- <b>Stack Charts</b>- displays total crimes per category per year and vice versa
- <b>Reset button</b> is provided to cancel out any filters made.
- <b>Top button </b> a scrollable top button appears to the right of the page when the users scrolls along.
- <b>Footer</b> displays social media connector as  a clickable icon that can be directed to my github website and a back to top button that takes a user to the top of the page.

## Technologies used includes:
<b>HTML5</b>: to create structure of webpage.<br/>
<b>CSS3</b>: to style webpage, I used external stylesheet, file located in assets/css/style.css .<br/>
<b>Bootstrap v 3.3.7</b>- For css styling, I used grid and responsive behavior of controls.<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CDN link included from https://getbootstrap.com/docs/3.3/getting-started/.<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for controls and classes https://getbootstrap.com/docs/3.3/css/.<br/>
<b>Javascript  and JQuery</b>: Used Jquery for interactivity and client side chart rendering<br/>
<b>Google Fonts</b>: for additional font-family options https://fonts.google.com/. <br/>
Fonts used are Roboto|Yanone+Kaffeesatz<br/>
<b>Font Awesome</b>: for social media icons and envelope icon https://fontawesome.com/.<br/>
<b>JS Libraries to visualise, explore and filter datasets</b>
- d3.js- used to build charts
- crossfilter.js-filters data in csv file
- dc.js : makes d3 and crossfilter work swimmingly
- queue.js: Use to load data


## Testing
The single scrollable webpage is tested across the following browsers,
- Google Chrome (Testing successfully met requirements)
- Firefox (Testing successfully met requirements)
- Internet Explorer (Testing successfully met requirements)

##### Testing Tools Used
- W3C CSS Validation Service (https://jigsaw.w3.org/css-validator/).
-  W3C Markup Validation Service (https://validator.w3.org/).
-  Mobile Friendly Testing Tool(https://search.google.com/test/mobile-friendly
- Chrome Dev tools for inspect elements for styling purpose and media queries


## Testing scenarios
Selection of a proper dataset was an initial problem when I decide to go with the Dashboard project.
Finally I got my eyes on the Crime Data dashboard for Chicago and thought it would be great to do a dashboard for Canada. While researching I came across datasets which had huge amount of information which made it quite impossible for me to work it. 
Finally I got a dataset which I pivoted to work best to the Crime dashboard I wanted to create.
This included creating a sample testpage in html of all kinds of graphs I could create with the information in hand and testing if it worked as per what I required. Here I didnt focus on designing

[Link to sample testpage](https://www.dropbox.com/s/1y1rpgajj7gxk7n/SampleHtml.JPG?dl=0)

On the final webpage the following test has been performed
- Every chart on the webpage has been tested to be filtered and reflect the value in a tooltip when user moves cursor over the selection
- The responsive behavior of the website is been  in Google Chrome Developer tools responsive mode on Galaxy S5, Pixel 2, Pixel 2XL,iPhone 5/SE, iPhone 6/7/8, iPhone Plus 6/7/8, iPhone X, iPad, iPad Pro.
- I tried making the charts resizable over the various devices but had issues with overlapping and extra width creation in the nav bar. So to solve this issue I added a css property of  overflow-x: scroll; when the website is been viewed on mobiles or ipad.
- I tried various layouts during design process and found the it better to have two graphs side by side, this worked well with reponsiveness and also made the webpage look neat and less cluttered.
- Color codes have been use to make the charts more consistent to reduces the mental effort users have to make to understand what they are seeing.
- Reset Button is been tested to check if the filters get reset.
- The scrollable Top button is tested to check of it appears when the page is been scrolled Javascript code has been used to activate this feature

### Test Cases
                    
Selections  | Expected Value | Actual Value
------------- | -------------
Total crimes per 100,000 inhibitiants  | 57,479.03 | 57,479
Year Selected: 2008  | 11,816.13 | 11,816
Province Selected: Alberta  | 5451.56 | 5451
Crime Type Selected: Assault  | 32566.09 |  32566
Year Selected : 2009 <br>Crime type : Assault</br>| 6752.30 | 6752 
Year Selected : 2010 <br>Crime type : Assault</br> Province: Saskatchewan| 1186.37| 1186


## Deployment

Project is built and developed on [Cloud9](https://c9.io/) workspace

The files have been edited in this development instance. When ready, the changes were "deployed" to the staging instance. After user acceptance and testing, deploy again, this time to production. I used git and GitHub pages for deployment. 

The following steps are followed to deploy the pages:
1. Initialised the local directory in my project as a git repository used the cloud9 terminal to perform this step
`$git init`
2. Added the files in the local repository created. And staged them for `commit $git add .`
3. Commited the files that I have staged in the local repository.
`$git commit –m ”Initial commit”`
This step is perfomed for any changes I have done to sections in webpages and stylesheets as well as the images and audios folder.
4. Created a new repository in Github and in the terminal, added the URL for the remote repository where your local repository will be pushed.
5. On major changes I have pushed the changes in the local repository to GitHub. 
`$git push origin master`


On Github 
Click Settings of the repository hosting the project and generated the external link.<br/>
[Link to Github pages](https://github.com/nadia-solution-tracker/second-milestone-project)<br/>
[Link to Final Project](https://nadia-solution-tracker.github.io/second-milestone-project/)<br/>

## Credits
I took inspiration for this project from the Crime Dashboard in Chicago https://towardsdatascience.com/analyzing-crime-with-python-8b28252559ce


#### Content
This project is been developed from the codes learnt throughout the course of Introduction to Data Visualiization design from the videos of Code Insitute. 
Also referred Bootstrap documentation and W3schools
For ReadMe file referred README MARKUPS https://pandao.github.io/editor.md/en.html
Data for this Dashboard has been fetched from https://www.ontario.ca/data/violent-crime-rates which I further modifed.

#### Media
For the favicon icon https://www.favicon.cc/?action=icon&file_id=58538


## Acknowledgements
I would extend my sincere thanks to my mentor for giving me ideas on optimizing my webpage, However all the work was done by me with references made to links as mentioned in &quot;Credits&quot; and referring &quot;Code Institute Mini Project&quot; videos.
