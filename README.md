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
![releasePlan](https://user-images.githubusercontent.com/56567343/138219123-cfc4f4bd-83d3-4657-9b93-6a1cf0d44d93.png)
![updatedReleasePlan](https://user-images.githubusercontent.com/46057691/143723028-a8086ec2-4f83-4e8a-b23b-e276f0c913e6.png)

### Sprint plans
Inside scrum_resource folder

### Wireframe Drafts
[Available via Figma](https://www.figma.com/file/LUBg4mluBsOVX0mYmEDoPT/GPT-Wireframe?node-id=0%3A1)

### Instruction
1. Clone the repo into your local machine.
2. Install the dependencies first before starting the app, use `npm install` or `npm i`.
3. To run the frontend app, run `npm start` in frontend folder.
4. Backend is still under development...

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
        |- util.ts              # utility functions
        |- ...
    |- ...
```

### Credit
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<div>Image by <a href=https://www.pexels.com/@ann-h-45017?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels>Ann H</a> from <a href="https://www.pexels.com/" title="Pexels"> www.pexels.com</a></div>

### Disclaimer
