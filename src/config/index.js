import axios from "axios";

axios.defaults.baseURL = "http://ec2-13-203-28-32.ap-south-1.compute.amazonaws.com/api";

export const getParentsDataAPI = async (phone) =>
  axios.get(`/details/parent/${phone}`);
export const getChildrenDataAPI = async (phone) =>
  axios.get(`/child-users/filter?phoneNumber=${phone}`);
