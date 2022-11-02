import joi from 'joi';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

class Config {
  env: Record<string, string | number>;

  constructor() {
    // validate env
    const envSchema = joi.object({
      NODE_ENV: joi.string().valid('development', 'production', 'test').required(),
      PORT: joi.number().default(3000),
    });

    const { value, error } = envSchema.validate(process.env, { allowUnknown: true });
    if (error) throw new Error(`Validation Error while parsing env: ${error.message}`);

    this.env = value;
  }
}

export default new Config();
