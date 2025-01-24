const Joi = require('joi');

const validateTaskInput = (input) => {
  const schema = Joi.object({
    judul: Joi.string().required(),
    deskripsi: Joi.string().optional(),
    tanggalTenggat: Joi.date().optional(),
    status: Joi.string().valid('tertunda', 'sedang berlangsung', 'selesai').optional(),
  });

  const { error } = schema.validate(input);
  if (error) throw new Error(error.details[0].message);
};

module.exports = { validateTaskInput };
