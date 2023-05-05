import axios from "axios";
import { base_url } from "../../../environment";
import { setArticles } from "./reducer";

export const getArticles = () => async (dispatch) => {
  try {
    const res = await axios.get(base_url + "article/getArticles");
    dispatch(setArticles(res.data));
  } catch (error) {
    console.log(error);
  }
};
