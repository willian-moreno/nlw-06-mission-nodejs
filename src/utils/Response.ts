interface IResponse {
  success: boolean;
  status?: 'ok' | 'error' | 'warn' | 'info';
  statusCode: number;
  response: {
    message?: string | null;
    data?: any | null;
    previous?: string | null;
  };
}

interface IResponseParams {
  message?: string | null;
  status?: 'ok' | 'error' | 'warn' | 'info';
  statusCode: number | null;
  data?: any | null;
  previous?: string | null;
}

class Response {
  static success({
    message = '',
    status = 'ok',
    statusCode,
    data,
    previous,
  }: IResponseParams): IResponse {
    return {
      success: true,
      status,
      statusCode,
      response: {
        message,
        data,
        previous,
      },
    };
  }

  static error({
    message = '',
    status = 'error',
    statusCode,
    data,
    previous,
  }: IResponseParams): IResponse {
    return {
      success: false,
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
