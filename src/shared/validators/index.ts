import Joi from 'joi';

const emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// name may contain spaces
const nameRegex = /^[a-zA-Z0-9 ]+$/;
// username start with @ and not contain space
const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,30}$/;


const emailSchema = Joi.object({
  email: Joi.string().email().required().regex(new RegExp(emailRegex)),
});


const nameSchema = Joi.object({
  name: Joi.string().required().regex(new RegExp(nameRegex)).min(2).max(30),
});


const worldSchema = Joi.object({
  world: Joi.string().required().min(2),
});


const linkSchema = Joi.object({
  link: Joi.string().required().min(6),
});


const textSchema = Joi.object({
  text: Joi.string().required().min(5)
});



const passwordSchema = Joi.object({
  password: Joi.string().required().regex(new RegExp(passwordRegex)).min(8).max(30),
});




export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const result = emailSchema.validate({ email });
  return result.error ? false : true;
}



export function isValidName(name: string): boolean {
  if (!name) return false;
  const result = nameSchema.validate({ name });
  return result.error ? false : true;
}



export function isValidPassword(password: string): boolean {
  if (!password) return false;
  const result = passwordSchema.validate({ password });
  return result.error ? false : true;
}


export function isValidText(text: string): boolean {
  if (!text) return false;
  const result =  textSchema.validate({ text });
  return result.error ? false : true;
}



export function isValidLink(link: string): boolean {
  if (!link) return false;
  const result = linkSchema.validate({ link });
  return result.error ? false : true;
}



export function isValidWorld(world: string): boolean {
  if (!world) return false;
  const result = worldSchema.validate({ world });
  return result.error ? false : true;
}



