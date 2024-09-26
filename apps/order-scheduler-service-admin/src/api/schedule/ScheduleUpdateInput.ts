import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ScheduleUpdateInput = {
  deliveryDate?: Date | null;
  order?: OrderWhereUniqueInput | null;
  status?: "Option1" | null;
};
