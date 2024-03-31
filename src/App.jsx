import { useEffect, useState } from 'react'
import SearchBar from "./components/searchBar/SearchBar"
import './App.css'


import  requestPhotosByQuery  from './components/services/api';
import Loader from './components/loader/Loader';
import  ErrorMessage  from './components/errorMessage/ErrorMessage';
import ImageGallery from './components/imageGallery/ImageGallery';


function App() {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");


  const handleSubmit=(value)=>{
    setQuery(value)
   }

  // useEffect(() => {
  //   // setIsloading(true)
  //   async function fetchPhotos() {
  //     try {
  //       setIsloading(true)
  //       const request = await requestPhotosByQuery()
  //       // console.log(request.data)
  //       setPhotos(request.data);
  //     } catch (error) {
  //       setIsError(true);
  //     } finally {
  //       setIsloading(false);
  //     }
  //   }
  //   fetchPhotos()
  // }, [])

useEffect(()=>{
if(!query.length) return;
async function fetchPhotosByQuery() {
  try {
    setIsloading(true)
    const request = await requestPhotosByQuery(query)
    // console.log(request.data)
    setPhotos(request.data);
  } catch (error) {
    setIsError(true);
  } finally {
    setIsloading(false);
  }
}
fetchPhotosByQuery()
}, [query])
  return (
    <>
      <SearchBar 
      onSubmit={handleSubmit}
      
      />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {photos && <ImageGallery photos={photos} />}
    </>
  )
}

export default App
