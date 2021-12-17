import { Api } from "../util/Api";

export const reverseTextService = async (value) => {
    let res = await Api().get(`/iecho?text=${value}`);
    return res;
}
