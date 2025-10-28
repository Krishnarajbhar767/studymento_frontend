import { authEndpoints } from "@/app/lib/endpoints";
import { servicesWrapper } from "@/app/lib/help.utils";
import { api, ApiResponse } from "@/app/lib/utils/axios";

import { RegisterRequest } from "@/app/service";
// export const authService = {
//     signup: servicesWrapper(async (payload: RegisterRequest) => {
//         const res = await api.post(authEndpoints.register, payload);
//         return res;
//     }),
// };
