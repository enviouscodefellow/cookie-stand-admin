import Head from 'next/head';
import { useState } from 'react';
import Header from './Header';
import StandForm from './StandForm';
import Table from './Table';
import Footer from './Footer';

export default function Home() {
  const [cookieStands, setStands] = useState([]);
  const tableHeaders = [
    'Location',
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    'Totals',
  ];

  const tableData = [
    ['Calexico', 48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 516],
    ['Barcelona', 95, 95, 60, 95, 90, 50, 100, 55, 65, 80, 90, 95, 50, 70, 1090],
    ['Vancouver', 30, 20, 30, 20, 20, 25, 30, 35, 40, 20, 20, 45, 35, 30, 400],
    ['Milano', 19, 9, 25, 25, 28, 19, 28, 19, 9, 9, 22, 19, 9, 25, 265],
    ['Detroit', 51, 33, 25, 66, 51, 66, 37, 40, 29, 66, 18, 33, 55, 22, 592],
    ['Addis Ababa', 51, 33, 25, 66, 51, 66, 37, 40, 29, 66, 18, 33, 55, 22, 592],
    ['Dublin', 30, 13, 57, 13, 54, 34, 57, 17, 64, 64, 17, 27, 27, 57, 531],
    ['Tacoma', 33, 44, 14, 33, 44, 18, 25, 40, 44, 29, 37, 25, 25, 37, 448],
    ['Totals', 376, 333, 303, 357, 421, 313, 375, 336, 378, 386, 317, 378, 291, 365, 4929]
  ];

  function newCookieStandHandler(event) {
    event.preventDefault();
    const cookieStand = {
      id: cookieStands.length,
      name: event.target.name.value,
      minCusts: event.target.minCusts.value,
      maxCusts: event.target.maxCusts.value,
      avgCookies: event.target.avgSale.value,
    };
    setStands([...cookieStands, cookieStand]);
  }
  return (
    <>
      <Head>
        <title>Cookie Stand Admin Page</title>
        <meta name="description" content="First NextJS Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="">
        <StandForm newCookieStandHandler={newCookieStandHandler} />

        <Table cookieStands={cookieStands} tableHeaders={tableHeaders} tableData={tableData}/>
      </main>
      <Footer cookieStands={cookieStands} />
    </>
  );
}
