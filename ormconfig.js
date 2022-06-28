module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "migrations": ["./src/database/migrations/*.js"],
    "entities": ["./src/modules/**/entities/*.js"],
    "cli": {
      "migrationsDir": "./src/database/migrations"
    }
  }