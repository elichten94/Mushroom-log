# The Mushroom Log
A forager's tracking tool

### :mushroom: :herb: &nbsp; Motivation:
If you're into foraging wild plants or fungi, you probably discover new spots every season. The Mushroom Log is for anyone who wants to record their locations and pin observations over time to uncover patterns in their findings.

### :computer: &nbsp; Requirements and setup:
- Node.js ≥ v14
- MySQL ≥ v5.7

After forking and cloning down the repo, create a `.env` file in the project's root directory with the same keys listed in `dotenv.example.txt` <br />

Create `googleConfig.js` and copy in the contents of `googleConfig.example.js`. Add your Google Maps API key. <br />
**Do not commit `.env` or `googleConfig.js` to version control.** <br />

To run the app locally, execute the following from the project's root directory:
1. Install all necessary dependencies:
    ```shell
    $ npm install
    ```
2. Seed the database schema:
    ```shell
    $ mysql -u <username> -p <password> < database/schema.sql
    ```
3. Start the Node server:
    ```console
    $ npm start
    ```
4. Build the React app:
    ```shell
    $ npm run build
    ```
5. Open your web browser to `http://localhost:3000`
