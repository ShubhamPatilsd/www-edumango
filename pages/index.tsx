import Head from 'next/head'


export default function Home() {
  return (
    <div className="bg-yellow-300 flex h-screen justify-center items-center">
      <button className="bg-white p-5 shadow-lg duration-200 hover:bg-yellow-200 transform hover:-skew-x-12">
        Hello tailwind next
      </button>
    </div>
  )
}
