
var p=require('bluebird')

module.exports = function (config) {

  var cmdpost = require("win-commandpost")(config);

  /**
   *
   * @param param
   * @param.projectName
   * @param.roleName
   * @param.key
   * @returns {*}
   */
  return  function (req,res) {
    return p.resolve()
      .then(function(){
        return cmdpost.updateInstance(req.body)
      })
      .then(function (result) {
        res.send(result).status(200)
      }, function (err) {
        res.send(err).status(500)
      })
  }
};


