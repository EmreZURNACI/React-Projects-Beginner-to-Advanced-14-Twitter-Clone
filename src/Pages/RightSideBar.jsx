import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import React from 'react'
import axios from 'axios';
function RightSideBar() {
  const [trends, setTrends] = useState();
  const getTrends = async () => {
    const options = {
      method: 'GET',
      url: 'https://twitter154.p.rapidapi.com/trends/',
      params: { woeid: '23424969' },
      headers: {
        'X-RapidAPI-Key': '9aae0c9ab2msh42e25af86e888b0p1a76afjsn5fa18553dfa5',
        'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setTrends(response.data[0].trends)
    } catch (error) {
      console.error(error);
    }
  }
  const segmentation = (sayi) => {
    if (sayi > 1000 && sayi < 1000000) {
      return String(sayi).substring(0, 2) + "k"
    }
    else if (sayi === null) {
      return "???"
    }
    else {
      return sayi
    }
  }
  useEffect(() => {
    getTrends()
  }, [])
  return (
    <div className='px-4 fixed top-0 bottom-0 w-[calc(20%)] overflow-y-auto'>
      <div className='relative flex w-full bg-primary mt-1 rounded-3xl mb-2'>
        <div className='w-[calc(20%)] flex items-center justify-center'>
          <button><FiSearch className='text-black font-bold text-xl' /></button>
        </div>
        <form action="" className='w-[calc(80%)]' autoComplete='off'>
          <input type="text" className='bg-transparent text-white py-2 px-4 rounded-r-3xl outline-none  w-full ' placeholder='Ara' />
        </form>
      </div>
      <div className='bg-primary text-white p-4 rounded-3xl flex flex-col gap-y-2 mb-3'>
        <p className='leading-tight text-xl font-bold'>Premium'a Abone Ol</p>
        <p className='leading-tight font-semibold'>Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.</p>
        <div className='w-full'>
          <button className='bg-blue-500 px-4 py-2 rounded-3xl font-semibold'>Abone ol</button>
        </div>
      </div>
      <div className='bg-primary rounded-3xl py-4'>
        <p className='leading-tight text-xl font-bold text-white mb-3 px-4'>İlgini çekebilecek gündemler</p>
        <ul className=' text-white flex flex-col'>
          {
            trends && trends.filter((item, index) => index < 15).map((trend, index) => (
              <li key={index} className='py-1 hover:bg-primary px-4  cursor-pointer'>
                <div>
                  <p className='text-lg text-white font-semibold'>{trend.name}</p>
                  <p className='text-base text-white'>{`${segmentation(trend.tweet_volume)} posts`}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default RightSideBar