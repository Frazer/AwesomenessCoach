module.exports = {
  server_base_url: "/api/",
  server_host_name: "http://localhost:4000",
  mongo_connection: process.env.MONGO_URL || "mongodb://localhost:27017/cloverchat"
};
  