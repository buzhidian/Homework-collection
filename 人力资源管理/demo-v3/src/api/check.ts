/**封装校验*/
/**login*/
export interface LoginForm {
  mobile: string
  password: string
}

/**状态码封装*/
export enum CODE {
  SUCCESS = 200,
  ERROR = 500
}
