import { ScheduleCreateNestedManyWithoutOrdersInput } from "./ScheduleCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customerId?: string | null;
  price?: number | null;
  productId?: string | null;
  quantity?: number | null;
  schedules?: ScheduleCreateNestedManyWithoutOrdersInput;
};
