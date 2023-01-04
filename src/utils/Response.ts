import { HttpStatusCode } from '@utils/HttpStatusCode';

interface IResponse {
  success: boolean;
  status: string;
  statusCode: number;
  response: {
    message?: string | null;
    data?: any | null;
    previous?: string | null;
  };
}

interface IResponseParams {
  message?: string | null;
  statusCode: number | null;
  data?: any | null;
  previous?: string | null;
}

class Response {
  static set(params: IResponseParams): IResponse {
    return this._config(params);
  }

  static _config({
    message,
    statusCode,
    data,
    previous,
  }: IResponseParams): IResponse {
    const success = statusCode <= 399 ? true : false;
    return {
      success,
      status: HttpStatusCode.getMessage(statusCode),
      statusCode,
      response: {
        message: this._firstLetterToUpper(message),
        data,
        previous,
      },
    };
  }

  static _firstLetterToUpper(message: string) {
    if (message && message.length)
      return message.charAt(0).toUpperCase() + message.slice(1);
    return message;
  }

  constructor() {}
}

export { Response, IResponse, IResponseParams };
