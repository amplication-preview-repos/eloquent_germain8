import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ScheduleWhereInput = {
  deliveryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  status?: "Option1";
};
