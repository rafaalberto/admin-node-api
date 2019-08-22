module.exports = {
  host: '127.0.0.1',
  username: 'postgres',
  password: 'postgres',
  database: 'admin-api',
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};