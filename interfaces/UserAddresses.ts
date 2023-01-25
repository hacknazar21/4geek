export interface IUserAddresses {
  id: number;
  address_name: string;
  phone_number: string;
  is_default_for_shipping: boolean;
  is_default_for_billing: boolean;
  country: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  city: string;
  district: string;
  street: string;
  house: string;
  apartment: string;
  entrance: string;
  floor: string;
  intercom?: any;
  postcode: string;
  notes: string;
}
