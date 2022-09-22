import {Request, Response, NextFunction} from 'express';
import {validationResult} from 'express-validator';

export const validate = (req: Request, res: Response, Next: NextFunction) => {
  const errors = validationResult(req)
  if(errors.isEmpty()){
    return Next()
  }

  const extratecErrors: object[] = []
  errors.array().map((err) => extratecErrors.push({[err.param]: err.msg}));
  return res.status(422).json({
    errors: extratecErrors,
    
  })
}
