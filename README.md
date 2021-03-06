# Build-a-News-App-With-React-React-Tutorial-For-Beginners-following-tutorial
https://www.youtube.com/watch?v=jTk6XP4IgGs


## Comments
### What is use State and what does it do?
- A hook.
- Enable us to track the state of our RTeact component

### in video tutorial:

#### @5:24 use Effect

- [use Effect is another hook that will enable you to have the react live components.  You can access them in a function component.](https://youtu.be/jTk6XP4IgGs?t=324)

#### @5:34 use Effect

- [use Effect to call to get data from url](https://youtu.be/jTk6XP4IgGs?t=334)

#### @5:41 How does use Effect work?

- [it takes in a function, as the first value; and then it takes a dependency array as the second value](https://youtu.be/jTk6XP4IgGs?t=341)
- [so if you leave it as an empty array that means that: it will run after this component [the return block] has been mounted](https://youtu.be/jTk6XP4IgGs?t=348)

#### @6:04 use Effect (continued)
- [Integrate so that it runs component has mounted](https://youtu.be/jTk6XP4IgGs?t=364)

#### @6:34 useEffect Function
- [awaiting the result of what we get from fetch, which goes to url](https://youtu.be/jTk6XP4IgGs?t=400)

#### @6:45 useEffect Function (continued)
- [... and then return for us the response, and then we save it as resp](https://youtu.be/jTk6XP4IgGs?t=405)

#### @7:04 use json to save as object
- [use json to save the returned resp as an object named result](https://youtu.be/jTk6XP4IgGs?t=424)

#### @7:17 use set Data method
- [use set Data method pass in result](https://youtu.be/jTk6XP4IgGs?t=437)

## Notes
### On fetchData object variable and setData method
- [From this point in video...](https://youtu.be/jTk6XP4IgGs?t=437)
- [....and MDN Web Docs...](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData)
- ...it seems that fetchData is a variable (which is an object) that is using the setData method which takes the result variable as an argument.
- That is, fetchData is set to the result,
    - which has the response object, 
        - which has been "[resolved to a JSON object](https://dmitripavlutin.com/javascript-fetch-async-await/#2-fetching-json)".

### On Command Line Interface
- Project file opens in gitpod workspace
    - in folder
        Build-a-News-App-With-React-React-Tutorial-For-Beginners-following-tutorial
- For git:
    - Repository:
        - add commit and push commands in CLI from the above folder
- Attempting to run the News App from the folder above does not work
    - (Using the usual Live Server, as used when running directly from say an index.html file (not present here, but html contained in news-app/src/App.js))
- For running the News App:
    - In Command Line Interface:
        - Open a second Terminal (in gitpod):
            - change directory:
                - cd news-app
            - run command:
                - npm start
            - preview of src/App.js should open in Browser
- Can keep both CLI's open

### On data
- Tested App.js using npm start, per procedure in previous note as in [Video Tutorial just before @ 8:48](https://youtu.be/jTk6XP4IgGs?t=528)
    - Duplicated and modified return block of code in App.js
        - Added if statement to code 
        - second block - modified - used to handle if no data received
    - Debug: Add else statement to second block

## Bugs
### Resolved
#### Failed to compile
- Issue [3 occurrences]:
    - failing to compile App JavaScript file
- Solution [1st occurrence]:
    - Used code given at top of this website:
        - [reactjs.org Using the State Hook](https://reactjs.org/docs/hooks-state.html)
    - ... to check code in App JavaScript file
    - ensured correct use of inverted commas in first import statement
        - one at start and one at end
    - use commas not dotin import statement
- Solution [2nd occurrence]:
    - Used code given at top of this website:
        - [reactjs.org Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
    - ... to check code in App JavaScript file
    - changed curly brackets to parentheses
- Solution [3rd occurrence]:
    - Switched curly brackets to parentheses for the json method of the response object saved in resp variable

### Add else statement
- File path: news-app/src/App.js
- Problem:
    - Using Chrome Developer Tools:
        - Inspect Element:
            - checked object returned
            - [as per video tutorial before @ 9:06](https://youtu.be/jTk6XP4IgGs?t=546)
    - Duplicated code block
    - Used second block to handle if no data received
    - else statement missing
- Solution:
    - Added else statement [as above, as per video tutorial before @ 9:06](https://youtu.be/jTk6XP4IgGs?t=546)

## Unresolved
### In Console no data in returned Object
- Problem: 
    - Using Google Chrome Developer Tools:
        - Inspect Element
            - Console:
                - Object returns as two empty curly brackets
                    - When expanded:
                        - gives Prototype Object
                        - This seems to be the empty form of an object
- Expected Result:
    - [From Video Tutorial before @ 9:18](https://youtu.be/jTk6XP4IgGs?t=558)
        - Expected:
            - status: "ok"
            - in curly brackets
            - that is, in object

## References

### Video Tutorial
- [Build a News App With React | React Tutorial For Beginners]()
- "The Response object offers a lot of useful methods (all returning promises):

response.json() returns a promise resolved to a JSON object" [https://dmitripavlutin.com/javascript-fetch-async-await/#2-fetching-json](https://dmitripavlutin.com/javascript-fetch-async-await/)
- The DataTransfer.setData() method sets the drag operation's drag data to the specified data and type. If data for the given type does not exist, it is added at the end of the drag data store, such that the last item in the types list will be the new type. [DataTransfer.setData()](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData)