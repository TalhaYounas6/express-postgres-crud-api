import JOI from "joi";

const userScheme = JOI.object({
  name: JOI.string().min(3).required(),
  email: JOI.string().min(3).required(),
});

const validateInput = (req, res) => {
  const { error } = userScheme.validate(req.body);
  if (error)
    return res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });

  next();
};

export default validateInput;
