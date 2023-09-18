# Table of Contents
1. [Table of Contents](#table-of-contents)
2. [User Story](#user-story)
3. [Acceptance Criteria](#acceptance-criteria)
4. [Description](#description)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Walk Thru Video](#walk-thru-video)
8. [Contact](#contact)
9. [References](#references)


## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```
## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Description

We have developed Social network web app where  users can share their thoughts, react to friends' thoughts , and create a friend list.


```
## Installation
- Express.js
- Mongoose
- JavaScript native `Date` object.(for time stamps)
- Clone repo : git@github.com:Chongi23/Social-Network-API.git
- To install package.json, run "npm i" from root .
- Run "npm run dev" 
- Use insomnia to test routes 

## Usage
Use the following  to set up your  API routes:

CREATE user
 http://localhost:3001/api/users/

GET all users
 http://localhost:3001/api/users/

GET single user
 http://localhost:3001/api/users/:userId

UPDATE user
 http://localhost:3001/api/users/:userId

DELETE user
http://localhost:3001/api/users/:userId

ADD friend
http://localhost:3001/api/users/:userId/friends/friendId

REMOVE friend
http://localhost:3001/api/users/:userId/friends/:friendId

CREATE thought (don't forget to give it a reaction!)
http://localhost:3001/api/thoughts

GET all thoughts
http://localhost:3001/api/thoughts

GET single thought
http://localhost:3001/api/thoughts/:thoughtId

UPDATE thought 
http://localhost:3001/api/thoughts/:thoughtId

DELETE thought
http://localhost:3001/api/thoughts/:thoughtId

CREATE reaction
http://localhost:3001/api/thoughts/:thoughtId/reactions

DELETE Reaction
http://localhost:3001/api/thoughts/:thoughtId/reaction

## Walk Thru Video


## Contact
If you have any questions about this project, please contact me at <EMAIL> or visit my GitHub page here: https://github.com/Chongi23
Name : Krysta Gonzalez
<EMAIL> gnosisknows28@gmail.com

## References
- ASK BCS
- Tutoring - "Cory Yates" 

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
