import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

const useFetchData = (searchDatas) => {
  const [datas, setDatas] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [scrollDataLoading, setScrollDataLoading] = useState(false);
  const fetchNum = useRef(4);

  useEffect(() => {
    (async () => {
      window.scrollTo(0, 0);
      const { data } = await axios.get(
        `/collection?key=4CjxqO0N&p=${fetchNum.current}`,
      );
      setDatas(data.artObjects);
    })();
  }, []);

  useEffect(() => {
    setDatas(searchDatas);
  }, [searchDatas]);

  const fetchMoreDatas = useCallback(async () => {
    setFetching(true);
    setScrollDataLoading(true);
    fetchNum.current++;

    const newDatas = await axios.get(
      `/collection?key=4CjxqO0N&p=${fetchNum.current}`,
    );
    const fetchedDatas = newDatas.data.artObjects;
    const mergedData = datas.concat(...fetchedDatas);
    setDatas(mergedData);
    setFetching(false);
    setScrollDataLoading(false);
  }, [datas]);

  const handleScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (
      scrollTop + clientHeight + 416 >= scrollHeight &&
      fetching === false &&
      datas !== null
    ) {
      fetchMoreDatas();
    }
  }, [fetchMoreDatas, fetching, datas]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { datas, scrollDataLoading };
};

export default useFetchData;
