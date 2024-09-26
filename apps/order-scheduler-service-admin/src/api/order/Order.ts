import { Schedule } from "../schedule/Schedule";

export type Order = {
  createdAt: Date;
  customerId: string | null;
  id: string;
  price: number | null;
  productId: string | null;
  quantity: number | null;
  schedules?: Array<Schedule>;
  updatedAt: Date;
};
