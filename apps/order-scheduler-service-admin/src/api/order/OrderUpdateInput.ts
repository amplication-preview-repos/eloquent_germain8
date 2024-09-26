import { ScheduleUpdateManyWithoutOrdersInput } from "./ScheduleUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customerId?: string | null;
  price?: number | null;
  productId?: string | null;
  quantity?: number | null;
  schedules?: ScheduleUpdateManyWithoutOrdersInput;
};
