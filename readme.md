# Caprica

## Installation:

1. **Install Node/npm.** Make sure you have Node.js 7.6.0+ or newer installed.
2. **Clone and install dependencies.**
   Run the following commands:
   ```
   git clone https://github.com/AkshayPathak/caprica.git
   cd caprica
   npm install
   ```
3. **Install Typescript.**
   Run the command:
   ```
   npm install -g typescript
   ```
4. **Install Knex.**
   Run the command:
   ```
   npm install -g knex
   ```
5. **If installing on new database, run migrations.**
   Run the command:
   ```
   knex migrate:latest
   ```
6. **Run the server.** To run the server, compile all .ts files and head into
   the js-build folder and run
   ```
   node server
   ```
