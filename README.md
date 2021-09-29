# GamePerformanceTracker
### Brief Description 
This project is to improve the gamer's experience on reviewing their games, and help them improve by letting them see the most important aspect of their games. All the game data would be obtained using Riot's API.  
### Project type 
Web App  
### Tech Stack (Preferably) 
* React.js 
* Node.js 
* Express.js 
* MongoDB
* Material UI
### Covered games 
* League of Legends 
* ...More to come

### Instruction
1. Clone the repo into your local machine.
2. Install the dependencies first before starting the app, use `npm install` or `npm i`.
3. To run the frontend app, run `npm start` in frontend folder.
4. Backend is still under development...

### File Structure
```
./                        
|- ...
|- backend/                  # -> Back end
    |- ...
|- frontend/              # -> Front end
    |- public
    |- src
        |- components               # util components
        |- redux
            |- ...states/reducers folders
            |- ...
            - hooks.ts                 # redux selector and dispatch simplified for ts
            - store.ts                 # redux store
        |- views                    # display components
        - App.css                   # place to put all the css (for now, maybe forever)
        - App.tsx                   # testing ground (for now)
    |- ...
```
