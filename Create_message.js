const express = require('express');
const router = express.Router();
const GroupMessage = require('../models/GroupMessage');

router.post('/messages', (req, res) => {
  const { groupId, senderId, message } = req.body;

  GroupMessage.create({
    group_id: groupId,
    sender_id: senderId,
    message: message
  })
    .then(message => res.json(message))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
