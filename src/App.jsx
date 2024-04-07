import axios from 'axios';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

const App = () => {
  const [images, setImages] = useState({
    items: [],
    loading: false,
    error: false
  });

axios.defaults.baseURL = 'https://api.unsplash.com/';

  const searchArticles = async (query, page) => {
    const params = {
      client_id: 'F1ypMrdilY3mHoC1nQzrj7Khfn6zVOBxLlMMFY1g7ls',
      query: `${query}`,
      page: `${page}`,
      per_page: 12,
    };

    try {
      setImages({
        items: [],
        loading: true,
        error: false
      })

    const response = await axios.get('search/photos', { params });
      setImages(prevImages => {
        return { ...prevImages, items: response.data.results };
      });
    } catch (error) {
      setImages(prevImages => ({ ...prevImages, error: true }));
    } finally {
      setImages(prevImages => ({ ...prevImages, loading: false }));
    }
  };

  return (
    <div>
      <SearchBar onSearch={searchArticles} />
      {images.loading && <Loader />}
      {images.error && <ErrorMessage />}
      {images.items.length > 0 && <ImageGallery items={images.items} />}
      <Toaster />
    </div>
  );
};

export default App;