import Head from 'next/head';
import Main from '@/components/layouts/main';
import fetch from 'node-fetch';

export default function ResultsPage({ results }) {
  console.log(results);
  return (
    <Main>
      <Head>
        <title>Repository </title>
      </Head>
    </Main>
  );
}

export async function getServerSideProps(context) {
  return fetch(
    `https://api.github.com/repos/${context.params.query[0]}/${context.params.query[1]}`
  )
    .then((res) => res.json())
    .then((results) => {
      return {
        props: {
          results,
        },
      };
    })
    .catch(() => {
      return {
        props: {
          error: 'Unsuccessful response',
        },
      };
    });
}
