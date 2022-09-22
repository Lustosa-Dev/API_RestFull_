import { body } from "express-validator";

export const movieCreateValidation = () => {
  return[
    body("title")
      .isString()
        .withMessage("o titulo é obrigatório") 
        .isLength({ min: 5})
        .withMessage("o titulo precisa ter  no minimo 5 caracteres"),
    body("rating")
      .isNumeric()
      .withMessage("A nota precisa ser um número")
      .custom((value: number) => {
        if(value < 0 || value > 10){
          throw new Error("A nota precisa estar entre 0 e 10")
        }
        return true
      }),
    body("description")   
      .isString()
      .withMessage("A descrição é obrigatória !"),
    body("direction")
      .isString()
      .withMessage("O nome do diretor é obrigatório."),
    body("poster")
      .isURL()
      .withMessage("O poster precisa ser uma URL.")    
  ]
} 