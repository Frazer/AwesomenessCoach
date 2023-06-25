const base_url = require("./config").server_base_url;
const Example = require("./models/example");

function homeRoute(route) {
  /**
   * "/": Home route
   *   GET:
   */
  route.get(async function (req, res) {
    const result = await Example.find(
      {}, 
      null, 
      { 
        sort: { 
          deadline: 1 
        } 
      }
    );
    res.json(result).status(200);
  });
}

function exampleRoute(route) {
  /**
   * "/test": Test route
   *   POST: 
   */
  route.post(async (req, res) => {
    // TODO
  });

  /**
   * PUT:
   */
  route.put(async (req, res) => {
    // TODO
  });

  /**
   * DELETE: 
   */
  route.delete(async (req, res) => {
    // TODO
  });
}

module.exports = (app, router) => {
  homeRoute(router.route("/"));
  exampleRoute(router.route("/test"));
  app.use(base_url, router);
};
