export default interface IMotorcycle {
  id?: string,
  model: string,
  year: number,
  color: string,
  status?: boolean | undefined,
  buyValue: number,
  category: string,
  engineCapacity: number
}