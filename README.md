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

### Release plan
![releasePlan](https://user-images.githubusercontent.com/56567343/136741075-aad6513e-9967-4708-9c37-b0d5b205dbbc.png)

### Sprint plans
Inside scrum_resource folder

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
    |- index.ts                     # main file/server
    |- config/                      # config files
    |- interfaces/                  # typescript interfaces
    |- models/                      # mongoDB models
    |- routes/                      # Rest endpoint Routes
    |- controllers/                 # Rest endpoint controllers
    |- services/                    # functions folder for handling business logic
|- frontend/                 # -> Front end
    |- public/
    |- src/
        |- pages/               # pages
        |- redux/
            |- ...states/reducers folders
            |- ...
            |- hooks.ts                 # redux selector and dispatch simplified for ts
            |- store.ts                 # redux store
        |- App.css                   # place to put css if needed
        |- App.tsx                   # frontend app start point
    |- ...
```

### Credit
Icon: <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>


### Disclaimer
