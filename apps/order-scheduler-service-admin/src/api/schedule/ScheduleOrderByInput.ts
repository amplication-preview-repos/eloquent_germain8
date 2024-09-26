import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  createdAt?: SortOrder;
  deliveryDate?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
