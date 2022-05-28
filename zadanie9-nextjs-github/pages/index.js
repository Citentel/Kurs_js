import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Main from '@/components/layouts/main';

export default function Home() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();

    if (inputValue.length < 3) {
      return alert('Wystapil blad');
    }

    router.push(`/results/${inputValue}`);
  };

  return (
    <Main>
      <Head>
        <title>index page</title>
      </Head>

      <div className="w-1/3 mx-auto border-2 border-blue-200 rounded-md p-3 shadow-md shadow-blue-200">
        <p className="text-lg text-blue-600 mb-2">Wyszukaj co chcesz</p>
        <input
          className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 focus:border-blue-600 ease-in-out duration-300"
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="button"
          onClick={handleButtonClick}
          className="text-lg w-1/2 mx-auto block rounded-md border-2 border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white ease-in-out duration-300"
        >
          Send
        </button>
      </div>
    </Main>
  );
}
