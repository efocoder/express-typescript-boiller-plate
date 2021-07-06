export const dbUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB}?retryWrites=true&w=majority`;

export const apiResponse = (
  code: number,
  msg: string,
  data?: any[] | Object
) => {
  return {
    code: code,
    message: msg,
    data: data,
  };
};
