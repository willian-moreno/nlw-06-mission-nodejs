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
  status: string;
  statusCode: number | null;
  data?: any | null;
  previous?: string | null;
}

class Response {
  static set(params: IResponseParams): IResponse {
    return this._config(params);
  }

  static Response(params: IResponseParams): IResponse {
    return this._config(params);
  }

  static _config({
    message,
    status,
    statusCode,
    data,
    previous,
  }: IResponseParams): IResponse {
    const success = statusCode <= 399 ? true : false;
    return {
      success,
      status,
      statusCode,
      response: {
        message,
        data,
        previous,
      },
    };
  }

  constructor() {}
}

export { Response, IResponse, IResponseParams };
