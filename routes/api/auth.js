const express = require("express");
const router = express.Router();
const validateBody = require("../../utils/validateBody");
const {
  registerSchema,
  loginSchema,
  subscriptionSchema,
  verifySchema,
} = require("../../schemas/user");
const ctrl = require("../../controllers/auth");
const authenticate = require("../../middlewares/authenticate");
const upload = require("../../middlewares/upload");

router.post("/users/register", validateBody(registerSchema), ctrl.register);
router.post("/users/login", validateBody(loginSchema), ctrl.login);
router.post("/users/logout", authenticate, ctrl.logout);
router.get("/users/current", authenticate, ctrl.getCurrent);
router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

router.patch(
  "/users",
  authenticate,
  validateBody(subscriptionSchema),
  ctrl.updateSubscription
);
router.get("/users/verify/:verificationToken", ctrl.verifyEmail);
router.post(
  "/users/verify",
  validateBody(verifySchema),
  ctrl.resendEmail
);

module.exports = router;