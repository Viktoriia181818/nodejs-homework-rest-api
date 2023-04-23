const Joi = require("joi");

const registerSchema = Joi.object({
  subscription: Joi.string(),
  email: Joi.string().required().messages({
    message: "Validation error! Email invalid",
  }),
  password: Joi.string().min(6).required().messages({
    message: "Validation error! Password invalid",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().required().messages({
    message: "Validation error! Email invalid",
  }),
  password: Joi.string().min(6).required().messages({
    message: "Validation error! Password invalid",
  }),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string().valueOf("starter", "pro", "business").required(),
});

const verifySchema = Joi.object({
  email: Joi.string().required().messages({
    message: "missing required field email",
  }),
});

module.exports = {
  registerSchema,
  loginSchema,
  subscriptionSchema,
  verifySchema,
};