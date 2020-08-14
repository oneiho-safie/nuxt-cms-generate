export interface IAPIRequestOrder {
  api: string
  data: any
  array: any
  useErrorModal: boolean
  params: any
  timeout: number
  include: string[]
  status: boolean
  formData: true
  target: any
}
