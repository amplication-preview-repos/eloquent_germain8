import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";

export type OrderWhereInput = {
  customerId?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  productId?: StringNullableFilter;
  quantity?: IntNullableFilter;
  schedules?: ScheduleListRelationFilter;
};
