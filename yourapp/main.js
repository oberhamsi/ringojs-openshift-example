exports.app = function(req) {
   return {
      status: 200,
      headers: {"Content-Type": "text/plain"},
      body: ["Hello Openshift World!"]
   };
};

if (require.main == module) {
   require("ringo/httpserver").main(module.id);
};