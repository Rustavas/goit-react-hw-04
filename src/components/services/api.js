import axios from "axios"

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "VT075_hWDZhQiXOgOxIv7AToAKe5CqJjbaanzWqoFvM";
const searchParams = {
  client_id: ACCESS_KEY,
  query: "",
  page: 1,
  per_page: 12,
  orientation: "landscape"
};

const requestPhotosByQuery = async (query, page) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      ...searchParams,
      page,
      query
    },
  });
  return data;
}

export default requestPhotosByQuery;