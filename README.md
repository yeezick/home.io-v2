# Home.io (2.0.0)

- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Home**, your safe place now accessible anywhere, anytime. Conceptualized from the iPhone widget screen in which the consumer would be able to view what they deem relevant. Home.io takes that feature out of your physical phone and brings it online so that at any moment in time, you'll be able to update yourself on the weather, local news, or even an inspirational quote to keep your day going. No matter where you are, you are always *welcome Home.*


<br>

## MVP


**Back-End**
- Build server with Ruby on Rails, exposing RESTful JSON endpoints
- Use Rails to define models for interacting with the database, through PostgreSQL
- Should be fully capable of CRUD
- Minimum of 3 tables in database
- Minimum of 1 relationship between tables
- Capable of User Authentication 

**Front-End**
- Must be built using React
  - Should render 8 different components
  - State should be passed effectively as a prop throughout (to relieve time complexity on rendering components)
- Consume & render data from Ruby on Rails API
- Allow full CRUD interaction with back end server


**Styling**
- Tackled with a mobile-first approach
- Styled, animated, & responsive with strictly CSS
- Layout design structured using Flexbox & Grid

**Linting** 
- Code should read like a book
  - Proper indentation
  - Semantic variable & class names following  <code>camelCase</code>, <code>snake_case</code>, <code>kebab-case</code>, & <code>PascalCase</code> conventions.
  - Follow the DRY principle
- Remove all <code>console.log()</code>s & commented out code
- Code that works but is not refactorable in the given timeframe should be flagged & supplemented with comments explaining the flag's purpose

**Deployment**
- Front-end deployed via Surge
- Back end deployed via Heroku 

**Procedural**
- Remain Agile
    - No blocks should be explained or implemented twice
    - Project should be broken into components that are logical and maintainable to promote further refactoring or additions.
- Establish branches based on production, development, & feature testing.
- Features should be committed on completion; compartmentalizing updates while containing bugs.


<br>


## Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Open-source JavaScript library to build the user interface.  |
|   React Router   | React library navigating the application through screens with the URL|
|  Rails  | Web development framework extending the object-oriented programming language, Ruby |
|     PostgreSQL      | Relational database built-in to Rails, categorizing data into rows and attributes as columns  |
|      Axios       | JavaScript library used to handle HTTP requests  |

<br>

## Wireframes

[Click here to view the wireframe](https://www.figma.com/file/6VAl95BOg5W9kDK3fvYOxt/home-io-v2?node-id=0%3A1)


## Component Tree

![Component Hierarchy](/readme-images/component-hierarchy.png)

## Component File Structure

``` structure

src
|__ public/
      |__ images
|__ components/
      |__ Layout
          |__ Layout.jsx
          |__ Layout.css
      |__ Header
          |__ Header.jsx
          |__ Header.css
      |__ Landing
          |__ Landing.jsx
          |__ Landing.css
      |__ User_signup
          |__ User_signup.jsx
          |__ User_signup.css
      |__ User_settings
          |__ User_settings.jsx
          |__ User_settings.css
      |__ User_home
          |__ User_home.jsx
          |__ User_home.css
      |__ Todo
          |__ Todo.jsx
          |__ Todo.css
      |__ Weather
          |__ Weather.jsx
          |__ Weather.css
      |__ News
          |__ News.jsx
          |__ News.css
      |__ Quote
          |__ Quote.jsx
          |__ Quote.css
      |__ Joke
          |__ Joke.jsx
          |__ Joke.css
      |__ Cat
          |__ Cat.jsx
          |__ Cat.css
      |__ Fact
          |__ Fact.jsx
          |__ Fact.css
      |__ Crypto
          |__ Crypto.jsx
          |__ Crypto.css
          
|__ services/
      |__ apiConfig.js

```

## Time Estimates


| Task <small>(in sequence)</small> |                            Description                            | Estimated Time | Time Invested |
| --------------------------------- | :---------------------------------------------------------------: | :------------: | :-----------: |
| WireFrame                         |                     Visualization of project                      |     3 hrs     |     3hrs      |
| README.md                         |                     Verbalization of project                      |     3 hrs     |     3hrs      |
| Back-end Skeleton                 |       Setting up Back end for CRUD implementation                 |     3 hrs     |     2hrs      |
| Back-end CRUD                     |                     Setting up & testing back-end CRUD            |     3 hrs     |     2hrs      |
| Front-end Skeleton                |               Via zombie components to test routing               |      3hrs     |     3.25hrs   |
| Home.jsx                          |                     Succesffully design & render home component   |     3 hrs     |     2hrs      |
| User_signup                       |                     Design and render sign up screen alllowing creation of users                      |     3 hrs     |     2hrs      |
| User_settings                     |                     Design & render settings screen, allowing for MVC communication with Settings Table                      |     3 hrs     |     2hrs      |
| Todo                              |                     Design & successfully implement full CRUD with Todo table                   |     3 hrs     |     2hrs      |
| Weather                           |                     Design final design of component rendering weather data                      |     3 hrs     |     2hrs      |
| News                              |                     New component should render news data                     |     3 hrs     |     2hrs      |
| Quote                             |                     Quote component should render from quote API                     |     3 hrs     |     2hrs      |
| Joke                              |                     Joke component should render from Joke data                     |     3 hrs     |     2hrs      |
| Crypto                            |                     Crypto component should render crypto data                     |     3 hrs     |     2hrs      |
| Cat                               |                     Cat component should render cat data                     |     3 hrs     |     2hrs      |
| Fact                              |                     Fact component should render fact data                     |     3 hrs     |     2hrs      |
| Polish Core Design                | A good time to take a step back and optimize application visually |      3hrs      |     6hrs      |
| Core Design II                    |                        Core Design Harder                         |      3hrs      |     3hrs      |
| Core Design III                   |                     Core Design feat. BootStrap                   |      3hrs      |     3hrs      |
| Core Design IV                    |                     Core Design feat. AOS                         |      3hrs      |     3hrs      |
| <strong>Total</strong>            |                         2 out 12 complete                        |     60hrs      |     6hrs   |

<br>

## ERD Model

![Entity Relationship Diagram](/readme-images/erd.png)

<br>

***

## Post-MVP

- API List screen

<!-- *** -->

<!-- ## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution. -->
