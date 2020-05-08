import * as yup from 'yup'


export const nameValidation = yup
	.string()
	.required('Este é um campo Obrigatório')
  .nullable(false)

  export const surnameValidation = yup
	.string()
	.required('Este é um campo Obrigatório')
	.nullable(false)


export const emailValidation = yup
	.string()
	.email('Introduzir Email Válido')
	.nullable(false)
	.required('Este é um campo Obrigatório')


export const passwordSchema = yup
	.string()
	.required('Este é um campo Obrigatório')
	.min(6, 'A password deve ter no mínimo 6 carateres')
