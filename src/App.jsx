import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import PageTemplate from 'components/PageTemplate';
import ImageContainer from 'components/ImageContainer';
import ImageItem from 'components/ImageItem';
import Loader from 'components/Loader';
import { getRandomPhotos } from 'lib/api/photos';
import { shuffle } from 'lib/utils';
import usePromise from 'lib/hooks/usePromise';

const App = () => {
  const [imageLoad, _setImageLoad] = useState({
    ready: false,
    total: 0,
    loaded: 0,
  });

  const imageLoadRef = useRef(imageLoad);
  const setImageLoad = data => {
    imageLoadRef.current = data;
    _setImageLoad(data);
  };

  const [photos, _setPhotos] = useState({ origins: [], total: [] });
  const photosRef = useRef(photos);
  const setPhotos = data => {
    photosRef.current = data;
    _setPhotos(data);
  };

  const [, response, error] = usePromise(() => {
    const query = 'dogs';
    const count = 30;
    return getRandomPhotos({ query, count });
  }, []);

  const onScroll = () => {
    const { innerHeight, scrollY } = window;
    const { offsetHeight } = document.body;

    if (
      innerHeight + scrollY >= offsetHeight - 1000 &&
      imageLoadRef.current.ready
    ) {
      const nextPhotos = shuffle(photosRef.current.origins);
      setImageLoad({
        ...imageLoadRef.current,
        ready: false,
        total: photosRef.current.total.length + nextPhotos.length,
      });
      setPhotos({
        origins: [...photosRef.current.origins],
        total: photosRef.current.total.concat(nextPhotos),
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (response && response.data) {
      setPhotos({ origins: [...response.data], total: [...response.data] });
      setImageLoad({
        ...imageLoad,
        total: response.data.length,
      });
    }
  }, [response]);

  const onLoadImage = useCallback(() => {
    setImageLoad({
      ...imageLoad,
      loaded: imageLoad.loaded + 1,
      ready: imageLoad.loaded + 1 === imageLoad.total,
    });
  }, [imageLoad]);

  const photosWithId = useMemo(
    () =>
      photos.total.map((photo, i) => ({
        ...photo,
        id: i,
      })),
    [photos.total],
  );

  const images = useMemo(
    () =>
      photosWithId.map(photo => (
        <ImageItem key={photo.id} photo={photo} onLoad={onLoadImage} />
      )),
    [photosWithId, onLoadImage],
  );

  return (
    <>
      <PageTemplate>
        <ImageContainer error={error}>{images}</ImageContainer>
      </PageTemplate>
      <Loader visible={!imageLoad.ready} />
    </>
  );
};

export default App;
