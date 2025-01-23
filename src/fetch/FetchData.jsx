import { useState, useEffect } from "react";
import axios from "axios";
const FetchData = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
      if (responce) {
        setData(responce.data)
      }
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    fetchData()
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => setData(res.data))
    //   .catch((err) => console.log(err));

    // fetch('https://jsonplaceholder.typicode.com/users').then(res =>res.json()).then(data=>setData(data));
  }, []);
  return <>{JSON.stringify(data)}</>;
};
export { FetchData };
