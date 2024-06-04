import Link from "next/link";
import Kelompok3 from "../Assets/Kelompok3.jpeg";
import Image from "next/image";
const announce = () => {
return(
    <div>
   {/* headers */}
   <header className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">3 Second Store</h1>

        <p className="mt-1.5 text-sm text-gray-500">Belanja Murah dan Langka 🎉</p>
      </div>

      <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <button
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-sm font-medium"> Cara belanja </span>
        </button>
        
        <Link href="/" className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring text-center">
        <button
          type="button"
        >
        Home
        </button>
        </Link>
      </div>
    </div>
  </div>
</header>
   {/* headers end */}


    {/* content  */}
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
      JOINN USS!!
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
        Ingin Menjadi Bagian dari 3 Second Gank, Tunggu apalagi Apply Cv Kalian dan bergabung bersama kami
        dalam Mengembangkan 3 Second Store <br/>
        WE ARE WAITINGG🤩🤩
      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="/Recruit"
          className="inline-block rounded bg-indigo-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
           JOIN 
        </a>
      </div>
    </div>
  </div>

  <Image
    alt="kelompok3"
    src={Kelompok3}
    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>
    {/* content end */}
  
  {/* footer */}
  <footer className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
      </div>

      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; 2024. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  {/* foooter */}
   </div>
)
}

export default announce;