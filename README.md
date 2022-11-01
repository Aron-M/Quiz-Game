# THE POD HOUSE

<img src="assets/images/am-i-responsive-PP2.png" alt- Am I Responsive />

https://aron-m.github.io/SLIGO-POD-HOUSE-RENTAL-MOBILE-FIRST/

MATH QUIZ is a web application designed to test a user's knowledge in addition-based mathematics by presenting a multiple choice quiz, consisting of 5 questions, each containing 3 options as answers. The user must attempt to answer as many questions correctly to test their aptitude.

## User Experience (UX)
## User Stories

* As user visiting the website I want to be able to participate in a math-based quiz
* As user visiting website I want to navigate easily through the website.
* As user I want to see rules or instructions how to use and navigate through the application.
* As user I want to see landing page and navigate through it.
* As a user I want to clearly see the various questions asked, together with various options to choose the answer from.
* As user I want to see my score after I have finished the quiz.
* As user I want to revert back to the home page once I am done with the quiz


# Website Goals
* Create a quiz based challenge for the user
* Provide various multiple choice questions
* Include a variety of options too choose an answer from.
* The difficulty of the questions to increase with each following question.
* Have the user be able to answer all questions in succession.
* Provide the user with a final score.
* Let the user be able to revert back to the start if they choose to do the quiz again.

### Design
#### Colors:

* Colors used on the website are:

*  rgb(35, 35, 146); dark blue

*  rgb(35, 161, 64); green

*  rgb(22, 106, 78); dark green

* White #ffffff;


#### Fonts:

Fonts used on website are 'Slackey' and 'Bubblegum-Sans' from google fonts. 
Backup fonts is sans-serif if main font cannot be loaded for any reason.

#### Images:

Only one image has been used. A cartoon professor was used for the home page.

Website structure

| Screen size | Breakpoint |
|---|---|
|small   |>= 350px (mobile-first design)|
|large	 |>= 830px|

Back to top

## Technology, Frameworks and Programs used.
### Languages

* HTML

* CSS

* JavaScript


#### Frameworks and Programs used.

Google fonts was used to pick and import fonts to my project.

* GitHub


GitHub was used to store my source code by git add . git commit and git push.

* Git


Git was used with GitPod to write down the code and push it to GitHub.

* Screenfly

Testing website.
Features
Responsive on all devices.
Interactive buttons

* Fontawesome

Fontawesome was used to obtain various icons used within the website, such as within the the INCLUDING section as well as THINGS TO DO section of the page.

* Am I Responsive

To test various screen-size responsiveness.

# SECTIONS OF WEBSITE

1. Home/Landing Page section
2. Question 1
3. Question 2
4. Question 3
5. Question 4
6. Question 5
7. Final page congartulating the user and showing final score


## Home/Landing Page

 - Home page will be the first window on display, showing the name of the quiz followed the rules and instructions and lastly a button to click, which toggles the start of the quiz.


    <img src="assets/images/quiz-home-page-one.png" alt= "home page"></img>


    - START BUTTON:

     <img src="assets/images/quiz-home-page-click-button.png" alt="start button" />


        PLEASE NOTE: Color of button turns orange when hovered over

    
<hr>

## Questions 1,2,3

QUESTION 1 | QUESTION 2 | QUESTION 3
 :---:|:---:|:---:
 ![](assets/images/question-1.png) | ![](assets/images/question-2.png) | ![](assets/images/question-3.png)

 - Color of the option buttons turn blue once hovered over, as showed in question 1.

## Questions 4,5

:---:|:---:|
 ![](assets/images/question-4.png) | ![](assets/images/question-5.png) |

- Notice how the difficulty of the questions increment with each passing question

- Once user clicks an answer for question 5, the page will be redirected to the final page.

## Final Page

<img src="assets/images/final-page.png" alt= "final page"></img>

* Final page shows a congratulations message and also *should* display the user's final score
* At the bottom, the 'back to home' button will redirect the user back to the home page

#### FOR MOBILE (280px-576px)
* All images flows top-down starting with 'Kitchen & Living Room' image, ending with 'Shower & Sink'

#### FOR TABLET (576px-830px)
* Mini-hero image stays at the top and the other 4 images are then wrapped to show in rows of 2 each.

#### FOR FULL SCREEN (830px-1000px)

* All images are flexed in a row order stretching from left to right

MOBILE | TABLET | FULL SCREEN 
 :---:|:---:|:---:
 ![](documentation/mobile-images.png) | ![](documentation/tablet-images.png) | ![](documentation/images-full-screen.png)

### FEATURES LIST SUB-SECTION

* The FEATURES LIST is the second part of THE POD section. The list includes 6 features, each containing an icon abtained at Fontawesome.

 MOBILE | TABLET | FULL SCREEN 
 :---:|:---:|:---:
 ![](documentation/includes-mobile.png) | ![](documentation/includes-tablet.png) | ![](documentation/includes-fullscreen.png)

## 'THINGS TO DO' SECTION

This section includes 6 images of various activities and things to do within the nearby area of the tiny-house. This provides information to the user of what they can look forward to doing around the nearby area.

* PLEASE NOTE: These images were sourced from FONTAWESOME and converted to .jpegs due to needing some of the icons' background colour within the icon in order to match the background of the webpgae. I did that by editing the downloaded icon and changing it in MS Paint, and then uploading those .jpegs to the 'assets' folder.

* All images were captioned directly uderneath the image.

MOBILE | TABLET | FULL SCREEN 
 :---:|:---:|:---:
 ![](documentation/thingstodo-mobile.png) | ![](documentation/thingstodo-tablet.png) | ![](documentation/thingstodo-fullscreen.png)

## BOOKING SECTION

#### FOR MOBILE

Booking form is implimented fairly basic, with NAME; EMAIL; DATE FROM; DATE TO; MESSAGE.

#### FOR TABLET

Layout keeps the same design and only stretches out a bit as the screen widens.

#### FOR PC

Layout stays the same, however LOCATION section moves to the right of the form section.

MOBILE | TABLET | FULL SCREEN 
 :---:|:---:|:---:
 ![](documentation/booking-mobile.png) | ![](documentation/booking-tablet.png) | ![](documentation/booking-fullscreen.png)


#### BOOKING DISPLAY ERROR:

<img src="documentation/booking-error.png" alt="booking-display-error" />

The DATES area should have had clearer directions, and should have been displayed as shown below.

#### FORM:

The form is responsive, with a message indicating that the useer's booking was succesful, and with a button to revert the user back to the main webpage.

<img src="documentation/form-return.png" alt="form-return" />

#### FORM DESIGN ERROR:

The design of the form return page is functional, however poorly designed and can be better styled. The return button especially was very hastily done due to time constraints.

## LOCATION SECTION

#### MOBILE

Location section sits right at the bottom, with address attached at the top of the map.
Map was retrieved from Google Maps.

#### TABLET

Location section is at the bottom, hugging the footer, with address attached at the top of the map.

#### FULL SCREEN

Location moves to the right of the row shared with the booking form.

MOBILE | TABLET | FULL SCREEN 
 :---:|:---:|:---:
 ![](documentation/location-mobile.png) | ![](documentation/location-tablet.png) | ![](documentation/booking-fullscreen.png)

#### FOOTER

Footer has been done styled with the same green background. Social media links have been added, however the links only go to the home pages of each platform.

<img src="documentation/footer.png" alt="footer" />

## KNOWN BUGS

As shown previously, there have been a fair few bugs identified and could not be rectified due to time constraints, namely:

* Sticky nav-bar has 'POD HOUSE' logo that doesn't stick to the left as screen size changes.
* Sticky bar hovers over every H1 anchored to the nav-icon within the sticky header.
* Form dates does not clearly convey 'TO' and 'FROM' information at each bar.
* Form return page is not well designed, and the 'return to main page' button is not styled to look like a button.
* A certain amount of CSS style rules within the code have not been cleaned up. Some style rules can be seen as redundant, overriding and/or unneccessary. 
* Validator errors have not been fixed due to time constraints.


#### VALIDATOR

<img src="documentation/validator-errors.png" alt="validator errors" />

Validator errors, were unfortunately not rectified due to time constraints.

# DISCLAIMER

During the creation of this webpage, I have encountered various learning curves where I have had to pivot and start again from the beginning. To be more specific, it happened twice where I stopped midway through creation to start fresh.

One of the main reasons were to change from full-screen-first to rather start developing from mobile-first.
In doing so, I then started a new repository and copied my old code as I saw fit within the new repository.

Therefore a big percentage of my commit history will not be shown within my final draft.

Here, I have attached the two previous attempts for your perusal. Here you will see the bulk of my previous commits and how the webpage grew from attempt to attempt, with code changing as I learnt better ways to achieve what I wanted to set out for.

#### ATTEMPT 1:

https://aronm-ballyconnellattr-dmo4rqa51ga.ws-eu67.gitpod.io/

#### ATTEMPT 2:

https://aronm-podhouseholidayr-nl656b9zy87.ws-eu67.gitpod.io/

Here you will see the progress of how the site developed, with access to my commit history.


# Deployment
Following writing the code then commiting and pushing to GitHub, this project was deployed using GitHub by the following steps.

1. Navigate to the repository on github and click **Settings**.
2. Then select **Pages** on the side navigation.
3. Select the None dropdown, and then click **Main**.
4. Click on the **Save** button.
5. Now the website is now live on 
6. If any changes are required, they can be done, commited and pushed to GitHub and the changes will be updated.

# Credits:

- Slack Community members such as Mr. Bim, Dave Horrocks, John Traas, Matt Bodden and Daisy_mentor for selflessly helping me with queries and questions.
- [Rohit Sharma](https://github.com/rohit_mentor) My helpful mentor.
- [Simen Daehlin](https://github.com/Eventyret) for helpful Masterclasses.
- [Google Maps](https://www.google.com/maps/) for google maps.
- [screenfly](https://screenfly.org/) for testing my website).
- [Fontawesome](https://fontawesome.com/kits) for icons.
- [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) Validation of CSS.
- [AmIresponsive](https://ui.dev/amiresponsive) for responsive look of my website.

