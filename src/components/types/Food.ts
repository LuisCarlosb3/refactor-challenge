export interface Food {
  id: string
  image: string
  name: string
  description: string
  price: number
  available: boolean
}
export interface AddNewFood {
  image: string
  name: string
  price: string
  description: string
}