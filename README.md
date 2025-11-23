## 🎮 Rock Paper Scissors Lizard Spock!

![image](/assets/images/thebigbang1.jpg)

- A fun, interactive web-based game inspired by The Big Bang Theory TV show and the original Rock Paper Scissors Lizard Spock concept by Sam Kass.
Built in Visual Studio using HTML, CSS, and JavaScript, this project brings a challenging twist to the classic Rock Paper Scissors game.

### Fun Fact

- **Star Trek** originally aired when colour TVs were becoming mainstream, which is why the costume colours were very vibrant and visually striking.  

- Inspired by this, the **bright colour palette** in this project reflects that classic Star Trek aesthetic, giving the game a futuristic and energetic vibe.


![image](/assets/images/homepage1..png)

- Players compete against the computer, aiming to reach 15 points first to win. Each round tests your luck, logic, and strategy in this expanded five-choice game.

![image](/assets/images/homepagerules.png)

- Link to Game: https://brianjdowling101.github.io/Rock--Paper--Scissors--Lizard--Spock-/

## 🧭 User Stories

### 🎮 As a Player

- I want to easily understand and access the game rules, so I can quickly learn how each move interacts with the others.

- I want to select my choice (Rock, Paper, Scissors, Lizard, or Spock) with a single tap or click, so gameplay feels fast and smooth.

- I want to see instant feedback (win, lose, or draw), so I know how I performed each round.

- I want the game to track my score in real-time.


### External User Goals

- I want to play a quick, fun, and visually appealing game.

- I want clear instructions and feedback after every round.

- I want to see my score update dynamically as I play.

## Site Owner Goals

- To entertain users through an engaging and modern web game.

- To demonstrate front-end development and JavaScript logic skills.

- To deploy a well-tested, accessible, and visually appealing interactive website.

## 💻 Developer-Focused

- This project was created for the Dynamic Front-End Development Milestone to showcase:

-  Document Object Model (DOM) manipulation using JavaScript.

- Responsive layout using HTML5 and CSS3.

- Conditional logic and event handling.

- Accessibility and browser compatibility considerations.

- Version control and deployment with GitHub Pages.

## 🎨 Design Choices

- Theme: Inspired by The Big Bang Theory’s pop-culture humor and Star Trek:

- Colour Scheme: Bright and contrasting colors to reflect the playful tone of the game.

- Typography: Clean sans-serif fonts for modern readability.

- Layout: Simple and centered design with clear buttons and score display.

- Feedback: Dynamic results display (“You Win!”, “You Lose!”, “It’s a Tie!”) and score counters.

- The interface embraces a sci-fi aesthetic. A clean lines, bold icons, and dynamic animations.


## User Story Testing ✅
- Each user story was tested to ensure the game meets both player and site owner expectations:

### Player-Focused Testing
- **Understand and access game rules:** The rules were easy to find and understand. ✅ Pass
- **Select choice with one tap/click:** Click of a button: Rock, Paper, Scissors, Lizard, and Spock. ✅ Pass
- **See instant feedback:** Played rounds and observed results in real time. ✅ Pass
- **Track score in real-time:** Verified the score updated correctly after each round. ✅ Pass

### Device & Interface Testing
- **Mobile landscape mode support:** Opened the game on various mobile devices in landscape mode. ✅ Pass
- **Responsive and visually engaging interface:** Tested layout on desktop, tablet, and mobile. ✅ Pass
- **Clear instructions and feedback:** Played rounds and confirmed messages displayed correctly. ✅ Pass

> All user stories have been verified to ensure a smooth, engaging, and accessible gameplay experience.


## 🎮 Wireframe Summary: Rock, Paper, Scissors, Lizard, Spock Game

1. Overview

- A browser-based interactive game where players compete against the computer using the extended version of the classic Rock-Paper-Scissors rules — inspired by The Big Bang Theory TV show, where Sheldon Cooper popularized the “Rock, Paper, Scissors, Lizard, Spock” variation.

- The interface includes:

- A gameplay section

- A rules/instructions panel

- A feedback form

## Header Section

- Title: “Rock, Paper, Scissors, Lizard, Spock”

- Positioned at the top center of the page.

![image](/assets/images/headersection.png)

## Main Game Area (Body Section)

- Main Game Area

- Player Choice Buttons:

- 5 interactive icons or buttons: 🤘 Rock, 📄 Paper, ✌️ Scissors, 🦎 Lizard, 🖖 Spock

- Each button triggers a JavaScript function to record the player’s choice.

- Computer Choice Display:

- Area showing the computer’s randomly generated choice (e.g., “Computer chose Spock!”).

- Results Display / Scoreboard:

- Text area or card showing round result (“You Win!”, “You Lose!”, “It’s a Draw!”)

- Ongoing Score Counter: Player vs Computer

![image](/assets/images/homepage1.png)


### 3. Rules Section

- Expandable or static box listing all rule interactions:

- Rock crushes Scissors and Lizard

- Paper covers Rock and disproves Spock

- Scissors cuts Paper and decapitates Lizard

- Lizard eats Paper and poisons Spock

- Spock smashes Scissors and vaporizes Rock

![image](/assets/images/rules.png)

### 4. Feedback Form

- Section or modal allowing players to share feedback about the game. An arrow points down to the feedback form.

![image](/images/feedbackformpt1.png)

- Form Fields:

- Name:

- Email:

- Message:

![image](/assets/images/feddbackformpt2.png)

- Submit Button triggers form validation and a thank-you message (e.g., “Thanks for your feedback!”)

![image](/assets/images/Thankyoumessage.png)

## Wireframe Diagram

Here’s a visual representation of the layout and flow of the game:

![image](/assets/images/thewireframediagram.jpg)

- **Note:** This wireframe was made using Microsoft Word and hand-drawn sketches. It illustrates the structure of the header, main game, rules section, feedback form.

**⚠️ Note:** Based on user feedback, the "Play Again" button has **been removed** from the game interface.


## 🚀 Future Features

- Best of 5 or Timed Challenge modes.

- Sound effects and animations for win/loss events.

- Local storage for tracking high scores.

- Multiplayer mode or Boss difficulty levels. Take on different characther from the show.

- Enhanced Footer Bar — add themed social media icons, copyright mark, and maybe character quotes.

### Testing

## HTML, CSS & Javascript Validation

- W3C HTML Validator: All pages now pass validation.
Previously, three stray code errors were detected and have since been corrected. The site now validates with zero errors.

- W3C HTML Validator pass validation. No errors or warnings were found. The site now validates with zero errors.

![image](/assets/images/htmlpass.png)


- W3C CSS Validator pass validation. No errors or warnings were found. The site now validates with zero errors.  

![image](/assets/images/csspass.png)

- JavaScript code now passes the validator. Previously, there were 22 warnings reported. They have since been corrected. The site now validates with zero errors.

![image](/assets/images/javascript2pass.png)

![image](/assets/images/js.hintpass.png)

## Accessibility Testing

The game was designed with accessibility in mind, including:

- **High-contrast coloUr schemes** for better readability.

- **Readable fonts** for users with visual impairments and dyslexia.


✅ **Lighthouse Accessibility Audit & Improvements**

- Previously, the website had **3 contrast-related accessibility errors** identified by the WAVE accessibility checker. These issues affected text readability, particularly in the headings. Add black padding to resolve the issue.

- All **3 contrast issues have now been fully resolved**.  
- Text visibility and contrast have been improved across all areas to meet accessibility standards, ensuring a better experience for all users.


- Designed for accessibility, it includes high-contrast colour schemes and readable fonts Lighthouse accessibility audit:

- Previously, the website had 3 contrast-related accessibility errors identified by the WAVE accessibility checker. These issues affected text readability, particularly in the headings.

-All 3 contrast issues have now been fully resolved. Text visibility and contrast have been improved across all areas to meet accessibility standards and ensure a better experience for all users.

![image](/assets/images/lighthousetesting.png)

✅ **Accessibility Results**

- ✅ No errors were detected in the WAVE tool report for the page:

- Link to Game: https://brianjdowling101.github.io/Rock--Paper--Scissors--Lizard--Spock-/

- 🏆 AIM Score: 10 out of 10.  

- ⚠️ Manual testing is still necessary to ensure full compliance and optimal accessibility.

![image](/assets/images/wave..png)

## 🌐 Browser Compatibility

### Tested on:

- Google Chrome

- Mozilla Firefox

- Microsoft Edge

- Apple Safari

- All browsers displayed consistent performance and visuals.

### Responsive Testing

The game was designed to be fully responsive across devices and screen sizes.

![image](/assets/images/iamresponive.png)

🛠 **Manual & Stress Testing**

- The game was manually tested on multiple devices, including **desktop and mobile (landscape mode)**.  
- Friends and peers played the game to simulate **real-world usage**.  
- ✅ All tests passed: the game is **fully functional, readable, and responsive** under both normal and extended play sessions.


## 🚀 Deployment

- Deployed via GitHub Pages.

- Deployment Steps:

- Commit and push all project files to the GitHub repository.

- Navigate to Settings → Pages.

- Under “Source,” select main branch and /root folder.

- Click Save.

- The site is now live at the provided GitHub Pages URL.

- 🔗 Live Site: https://brianjdowling101.github.io/Rock--Paper--Scissors--Lizard--Spock-/

### Attribution

### Debugging

## 🧰 Technologies Used

- HTML5 – Game structure and semantic markup

- CSS3 – Styling, layout, and responsive design

- JavaScript (ES6) – Game logic, interactivity, and DOM manipulation

- Git & GitHub – Version control and repository management

- GitHub Pages – Deployment and live hosting

- Visual Studies– Initial design and layout planning

- IAmResponsive – Responsive design testing across devices

- Google Developer Tools (Lighthouse) – Accessibility, performance, and best practices testing

- WAVE – Web accessibility evaluation

- HTML & CSS Validators – W3C validation to ensure clean, standards-compliant code

- JavaScript Validators – JSHint and other tools to check JS syntax and quality

## 🧪 Testing Summary

### Manual Testing:

- Tested on desktop, tablet, and mobile (including landscape mode).

- Verified functionality in Chrome, Firefox, Edge, and Safari.

### Gameplay tested:

- Player choice selection (Rock, Paper, Scissors, Lizard, Spock).

- Real-time score tracking.

- Instant round feedback (win, lose, draw).

- Rules display and accessibility.

- Accessibility checks: Text readability, contrast, and responsiveness.

- Stress testing: Multiple consecutive rounds to confirm stability.

- Result: All manual tests passed ✅ Game is fully functional, responsive, and accessible.

## Automation Testing:

- HTML & CSS: All pages passed W3C validation with zero errors.

- JavaScript: Code validated with JSHint; zero errors or warnings.

- Accessibility: Lighthouse & WAVE audits passed; high contrast and readable fonts.

- Responsive Testing: Verified layout and functionality across devices (IAmResponsive).

- Browser Compatibility: Consistent performance on Chrome, Firefox, Edge, and Safari.

- Result: Automated tests confirm the site is standards-compliant, accessible, responsive, and fully functional ✅

⚠️ Note: During testing, the CodersTool JSON Validator
 recommended for feedback was temporarily down, so JSON validation could not be completed at that time.

## Credits & References

This project was inspired by:

- **The Big Bang Theory** – for introducing the “Rock, Paper, Scissors, Lizard, Spock” variation and its humor.  
- **Star Trek** – for the futuristic, console-style design inspiration.  

Special thanks and references:

- **Code Institute Notes** – for HTML, CSS, and JavaScript guidance, particularly for building the feedback form.  
- **Project Reference:** [Project 1 – Concrete Handbag by brianjdowling101](https://github.com/brianjdowling101/project-1-concrete-handbag) – used as inspiration for overall project structure and implementation. Very useful for Feedback from. Note: This Concrete Handbag is a pass project of Mine.
- **YouTube Tutorial:** [Build this Rock Paper Scissors game with JavaScript!](https://www.youtube.com/watch?v=3uKdQx-SZ5A) – provided additional guidance and examples for game logic.  


