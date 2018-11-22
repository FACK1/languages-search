# languages-search
languages-search

### What is languages-search?

It's a webapp that enables the user to look for languages that correspond to a character being entered into the input field. For example, if the user entered the letter (c) they would get Chinese, Cantonese,... etc etc. 

### User story.
1- Enter a character into the input field.
2- Get the first five results corresponding to it. 

### File Structure.
**Public**

1- index.html, main.css, main.js and test.js.

**Src**
2-server.js, handler.js, router.js and the txt file of data. 

### Work Plan

We didn't focus on the design aspect of our website as much as we wanted to focus on the topic of this week, which is servers. So what we did was, at first we divided ourselves into pairs to work on front-end and back-end. Then after having a rough idea about what to do and where to go from there, we decided to work together on the logical aspect of things. So each one of us would try to offer a solution, and we would try it out, and see if it works. 

### Issues we faced

At the end of our project we discovered that the data we had sent back to us wasn't processed, and that we processed it in the front-end. Which isn't what the assigment wants. I don't imagine we managed tp fix that issue yet. Because it was at the end of the day adn we didn't wanna break anything. 

### How to run our site on your machine?

1- Clone this repo.

2- Open your command line, and navigate to this project's folder.

3- Type in: **npm install**.

4- Then: **npm init**. Press enter on everything, this isn't very important to know (to you).

5- Then type in: **node src/server.js** to run the server. You should get a msg that tells that the server is running on port 9000.

6- Open your browser and type in: **localhost:9000**. Press enter.

7- Your browser should display our site!

8- Now type in any character you want. (a) for example, and see the tope five results that correspond to this letter display on your screen!



