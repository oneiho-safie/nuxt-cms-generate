export interface IListAPIBase<T> {
  count: number
  list: T[]
  offset: number
  total: number
}

export class ListAPIBase {
  count = 0
  list = []
  offset = 0
  total = 0
}
