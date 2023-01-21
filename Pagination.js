const express = require('express');
const router = express.Router();
const GroupMessage = require('../models/GroupMessage');

router.get('/messages/:groupId', (req, res) => {
  const { groupId } = req.params;
  const { page, limit } = req.query;

  GroupMessage.findAll({
    where: { group_id: groupId },
    offset: (page - 1) * limit,
    limit: limit
  })
    .then(messages => res.json(messages))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
