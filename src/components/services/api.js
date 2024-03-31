import axios from "axios"

 const requestPhotosByQuery = async(query="") => {
  const request = await axios.get(
    `https://api.unsplash.com/photos/?client_id=VT075_hWDZhQiXOgOxIv7AToAKe5CqJjbaanzWqoFvM&query=${query}&per_page=12&page=1`
    )
    return request;
}

export default requestPhotosByQuery;