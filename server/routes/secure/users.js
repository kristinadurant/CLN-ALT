const router = require('express').Router(),
  {
    getCurrentUser,
    updateCurrentUser,
    logoutUser,
    logoutAllDevices,
    deleteUser,
    uploadAvatar,
    updatePassword,
    getProfile
  } = require('../../controllers/users');

router.get('/me', getCurrentUser);
router.patch('/me', updateCurrentUser);
router.post('/logout', logoutUser);
router.post('/logoutall', logoutAllDevices);
router.delete('/me', deleteUser);
router.post('/avatar', uploadAvatar);
router.put('/password', updatePassword);
router.get('/profile/:id', getProfile);

module.exports = router;
