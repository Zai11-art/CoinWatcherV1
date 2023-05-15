import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsPage from "./Pages/NewsPage";
import AppPage from "./Pages/Appspage";
import ViewPage from "./Pages/ViewPage";
import BlankPage from "./Pages/BlankPage";
import PriceBar from "./components/PriceBar";
import axios from "axios";

import { useEffect, useState } from "react";

import { QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'

// api calls
import {
  getBitcoinPrice,
  getCoinDataList,
  getTrending,
  getMeterData,
  getCurrencyExchangeData,
} from "./utils/utils";

function App() {

   

    // console.log(coinTrending)

  //  const {data : trendingCoin, isLoading, isError } = useQuery(['coinTrending'], () => {
  //   return axios.get("https://api.coingecko.com/api/v3/search/trending")
  //   .then((res) => res.data)
  //   })

  // const [price, setprice] = useState([]); // main price list
  // const [trending, setTrending] = useState([]); // trending list
  // const [usdprice, setUsdPrice] = useState(); // get btc price vs usd
  // const [dataIndex, setdataIndex] = useState([]); // greed fear data
  // const [currencyPrice, setcurrencyPrice] = useState([]); // get all fiat data

  // useEffect(() => {
  //   // get main coin list
  //   getCoinDataList()
  //     .then((data) => {
  //       setprice([...data]);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   // get trending coin list
  //   // getTrending()
  //   //   .then((data) => {
  //   //     setTrending([...data.coins]);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });

  //   // // get btc price
  //   // getBitcoinPrice()
  //   //   .then((data) => {
  //   //     setUsdPrice(data.bitcoin.usd);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });

  //   // // greed fear index
  //   // getMeterData()
  //   //   .then((data) => {
  //   //     setdataIndex([...data.data]);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });

  //   // get currency exchange data
  //   // getCurrencyExchangeData()
  //   // .then(response => response.json())
  //   // .then(data => data.conversion_rates)
  //   // .then(data =>  {
  //   //     const currencyObj = data;
  //   //     const currencyArr = [];

  //   //     for (const key in currencyObj) {
  //   //         if (currencyObj.hasOwnProperty(key)) {
  //   //           currencyArr.push({
  //   //             name: key,
  //   //             price: currencyObj[key]
  //   //           });
  //   //         }
  //   //       }

  //   //       setcurrencyPrice(currencyArr);
  //   // })
  //   // .catch(error => console.log(error));

  
  // }, []);


  
  return (
    
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/Home"
                element={
                  <Home
                    // receivedData={coinList}
                    // receivedTrending={coinTrending}
                    // btcPrice={usdprice}
                    // meterData={dataIndex}
                  />
                }
              ></Route>
              <Route path="/Blank" element={<BlankPage />}></Route>
              <Route path={`/View/:id`} element={<ViewPage
              // receivedData={coinList}
              // receivedTrending={trending}
              // btcPrice={}
               />}></Route>
              <Route path="/News" element={<NewsPage />}></Route>
              <Route path="/Apps" element={<AppPage 
              // fiatData={currencyPrice}
              />}></Route>
            </Routes>
            <PriceBar 
            // receivedData={coinList}
            ></PriceBar>
            <Footer></Footer>
        </BrowserRouter>
    
  );
}

export default App;
