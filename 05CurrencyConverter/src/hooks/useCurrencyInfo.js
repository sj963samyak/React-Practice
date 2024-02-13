import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;

//how we desgn the custom hooks that it will return the data and setdata and it has used useState as a function it will return data and since we have usestate is a function so we returned a function hereS
