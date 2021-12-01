# GamePerformanceTracker
### Brief Description 
This project is to improve the gamer's experience on reviewing their games, and help them improve by letting them see the most important aspect of their games. All the game data would be obtained using Riot's API.  
### Project type 
Web App  
### Tech Stack (Preferably) 
* [React.js](https://reactjs.org/) 
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Material UI](https://mui.com/)
### Covered games 
* [League of Legends](https://www.leagueoflegends.com/en-us/)
* ...More to come

### Release plan
![image](https://user-images.githubusercontent.com/56567343/144186552-4157f489-0f2f-4c62-afed-c081b81f9a27.png)

### Sprint plans
Please navigate to the [scrum_resources](https://github.com/sunnydl/GamePerformanceTracker/tree/master/scrum_resource) folder.

### Wireframe Drafts
[Available via Figma](https://www.figma.com/file/LUBg4mluBsOVX0mYmEDoPT/GPT-Wireframe?node-id=0%3A1)

### Instruction
1. Set up your environment by properlly installing [Node.js](https://nodejs.org/en/)
2. Clone the repo into your local machine.
3. Install the dependencies first in both frontend and backend before starting the app, use `npm install` or `npm i`.
4. Get your Riot development key from [Riot Dev portal](https://developer.riotgames.com/), and paste it in `/backend/config/config.ts` in `RIOTAPIKEY` variable.
5. To run the frontend app, run `npm start` in frontend folder.
6. To run the backend app, run `npm run dev` in backend folder.
7. To build the whole application, first run `npm run build` in frontend folder, then `npm run build` in backend folder

### File Structure
```
./                        
|- ...
|- backend/                 # -> Back end
    |- index.ts                 # main file/server
    |- config/                  # config files
    |- riotApis/                # functions that used to call riotApis
    |- interfaces/              # typescript interfaces
    |- models/                  # mongoDB models
    |- routes/                  # Rest endpoint Routes
    |- controllers/             # Rest endpoint controllers
    |- services/                # functions folder for handling business logic
|- frontend/                # -> Front end
    |- public/
        |- emblems/                 # rank icon images
        |- controller.ico           # website icon
        |- UserNotFound.jpg         # error image
        |- ...
    |- src/
        |- components/          # components: navbar, body, footer...
        |- pages/               # pages: overview, match...
        |- redux/
            |- slices/              # redux slices
            |- hooks.ts             # redux selector and dispatch simplified for ts
            |- store.ts             # redux store
        |- App.css              # place to put css if needed
        |- App.tsx              # frontend app start point
        |- interfaces.ts        # typescript interfaces
        |- themes.ts            # app color palettes
        |- util.ts              # utility functions
        |- ...
    |- ...
```

### Credit
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<div>Image by <a href=https://www.pexels.com/@ann-h-45017?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels>Ann H</a> from <a href="https://www.pexels.com/" title="Pexels"> www.pexels.com</a></div>

### Disclaimer
Every aspect of this project was used and created for educational purposes.
