import API from "../utils/API";
export const fetchUser = async params => {
  const response = await API.get("/users", {
    params: params
  });
  console.log("API response", response.data);
  return response.data;
};
