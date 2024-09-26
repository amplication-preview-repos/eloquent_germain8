import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ScheduleCreateInput = {
  deliveryDate?: Date | null;
  order?: OrderWhereUniqueInput | null;
  status?: "Option1" | null;
};
