import Head from 'next/head';
import Main from '@/components/layouts/main';
import fetch from 'node-fetch';
import Image from 'next/image';
import Link from 'next/link';

export default function ResultsPage({ title, results, error }) {
  return (
    <Main>
      <Head>
        <title>Results page for {title}</title>
      </Head>

      <div className="w-full mx-auto">
        <p className="text-lg text-blue-600 mb-2">
          Search for: <span className="font-bold">{title}</span>
        </p>
      </div>
      <div className="w-full grid grid-cols-3 gap-4">
        {results.map((result) => {
          console.log(result.owner);
          return (
            <div
              key={result.id}
              className="border-2 border-blue-200 rounded-md p-2 relative"
            >
              <div className="flex items-center mb-2">
                <Image
                  width="40px"
                  height="40px"
                  className="rounded-md"
                  src={result.owner.avatar_url}
                  alt="img"
                />
                <p className="text-lg font-bold ml-2">{result.owner.login}</p>
              </div>
              <p>{result.description}</p>
              <p className="absolute top-2 right-2">
                ★ {result.stargazers_count}
              </p>
              <Link href={`/repository/${result.owner.login}/${result.name}`}>
                <span className="w-fit ml-auto block text-blue-600 cursor-pointer hover:text-green-600 ease-in-out duration-300">
                  See details...
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </Main>
  );
}

export async function getServerSideProps(context) {
  // tutaj dodajemy zapytania

  return fetch(
    `https://api.github.com/search/repositories?q=${context.params.query}`
  )
    .then((res) => res.json())
    .then((results) => {
      return {
        props: {
          title: context.params.query,
          results: results.items,
        },
      };
    })
    .catch((error) => {
      return {
        props: {
          error: 'Cannot fetch repositories',
        },
      };
    });
}
