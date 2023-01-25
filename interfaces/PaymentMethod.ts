export interface IPaymentMethod {
  id: number;
  name: string;
  code: string;
  description: string;
  is_available: boolean;
}
