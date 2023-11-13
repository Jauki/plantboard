export type FormSuccessResponse = {
  success: true;
  toast: string;
};

export type FormErrorResponse = {
  success: false;
  toast: string;
};

export type GeneralFormServerAction = (
  prevState: any,
  formHandler: FormData
) => Promise<FormSuccessResponse | FormErrorResponse>;
