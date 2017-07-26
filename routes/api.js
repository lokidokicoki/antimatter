const Api = require(`../controllers/api`);
const express = require(`express`);
const router = express.Router();

/**
 * Map routes
 */
router.get(`/load`, Api.getManifest);
router.post(`/save`, Api.addManifest);

module.exports = router;
