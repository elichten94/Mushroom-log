# The Mushroom Log
A forager's tracking tool

### :mushroom: :herb: &nbsp; Motivation:
If you're into foraging wild plants or fungi, you probably discover new spots every season. The Mushroom Log is a web app for anyone who wants to record their locations and pin observations.

### :computer: &nbsp; Requirements and setup:
- Node.js ≥ v14
- MySQL ≥ v5.7

After forking and cloning down the repo, create a `.env` file in the root directory with the same keys listed in `dotenv.example.txt` <br />

Create `googleConfig.js` in the root directory and copy in the contents of `googleConfig.example.js`. Add your Google Maps API key. <br />
**Do not commit `.env` and `googleConfig.js` to version control.** <br />

To run the app locally, exexcute the following from the project's root directory:
1. Install all necessary dependencies:
```shell
$ npm install
```
2. Seed the database schema:
```shell
$ mysql -u <username> -p <password> < database/schema.sql
```
3. Ensure the MySql server on your machine is running and then start the Node server:
```console
$ npm start
```
4. Build the React app:
```shell
$ npm run build
```
5. Open your browser to `http://localhost:3000`


