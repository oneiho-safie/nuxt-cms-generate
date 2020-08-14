export interface IAppCommonMessage {
  string: string
  description: string
}

export class AppCommonMessage implements IAppCommonMessage {
  string = ''
  description = ''
}