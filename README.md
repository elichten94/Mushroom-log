# The Mushroom Log
A forager's tracking tool

### :mushroom: :herb: &nbsp; Motivation:
If you're into foraging wild plants or fungi, you probably discover new spots every season. The Mushroom Log is a web app for anyone who wants to record those on the map and pin observations.

### :gear: &nbsp; Built with:
- Frontend: React.js | Google Maps API | Webpack | Chakra UI
- Server: Node/Express
- Database: MySQL

### :computer: &nbsp; Requirements and setup:
- Node.js ≥ v14
- MySQL ≥ v5.7

After forking and cloning down the repo, create a `.env` file in the root directory with the same keys listed in `dotenv.example.txt` <br />

Create `googleConfig.js` in the root directory and copy in the contents of `googleConfig.example.js`. Add your Google Maps API key. <br />
Please ensure that `.env` and `googleConfig.js` are both gitignored. <br />

Run the following commands from the root directory:
```shell
$ npm install
```
to install all necessary dependencies
```shell
$ mysql -u <username> -p <password> < database/schema.sql
```
to seed the database schema
```shell
$ npm run build
```
to compile the React app and re-compile on save. <br />
Ensure the mysql server on your machine is running and then
```console
$ npm start
```
in a separate terminal window to start the node server.

###  :white_check_mark: &nbsp; Current version:
1. Click anywhere on the map to add an entry
2. Add a description about the place
3. Start entering the species you found
4. Add a note about the find - was it near the creek or trail head? Too much poison ivy? <br />
...and repeat!

Feedback is always appreciated. Please add any experienced bugs to the "Issues" tab with relevant context and how to reproduce the behavior.
