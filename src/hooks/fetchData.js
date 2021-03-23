import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchData = () => {
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    (async () => {
      window.scrollTo(0, 0);
      const { data } = await axios.get(
        'https://www.rijksmuseum.nl/api/nl/collection?key=4CjxqO0N&ps=10',
      );
      setDatas(data.artObjects);
    })();
  }, []);
  return { datas };
};

export default useFetchData;
