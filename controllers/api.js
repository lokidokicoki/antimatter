const fs = require( `fs`);
const path = require(`path`);

const root = process.cwd();
const manifest = path.join(root, `/data/ships.json`);
/**
 * maps controller methods
*/
class Api {
  /**
   * Gets manifest
   * @method get
   * @param {Object} req request object
   * @param {Object} res response object
   * @param {Object} next next route handle
   */
  static getManifest(req, res, next) {
    fs.readFile(manifest, `utf8`, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          msg: `not so good`
        });
      }

      if (data) {
        return res.status(200).json(JSON.parse(data));
      }

      return res.status(500).json({
        msg: `no data`
      });
    });
  }

  /**
   * Add manifest
   * @method addManifest
   * @param {Object} req request object
   * @param {Object} res response object
   * @param {Object} next next route handle
   */
  static addManifest(req, res, next) {
    console.log(req.body);
    fs.writeFile(manifest, JSON.stringify(req.body), err => {
      if (err) {
        res.status(500).json({
          msg: `not so good`
        });
        console.log(err);
      } else {
        res.status(200).json({
          msg: `all good`
        });
      }
    });
  }
}

module.exports=Api;
