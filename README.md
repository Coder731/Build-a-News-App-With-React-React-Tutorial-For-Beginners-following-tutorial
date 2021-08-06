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

## References

### Video Tutorial
- [Build a News App With React | React Tutorial For Beginners]()
- "The Response object offers a lot of useful methods (all returning promises):

response.json() returns a promise resolved to a JSON object" [https://dmitripavlutin.com/javascript-fetch-async-await/#2-fetching-json](https://dmitripavlutin.com/javascript-fetch-async-await/)
- The DataTransfer.setData() method sets the drag operation's drag data to the specified data and type. If data for the given type does not exist, it is added at the end of the drag data store, such that the last item in the types list will be the new type. [DataTransfer.setData()](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData)