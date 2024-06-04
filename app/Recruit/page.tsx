'use client'
import Dev from "../Assets/DEV.jpg";
import Financial from "../Assets/Financial.jpg";
import website from "../Assets/website.jpg";
import admin from "../Assets/Admin.jpg";
import Image from "next/image";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

Link;
const Job = () => {
   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      })
   }, [])
 return (
  <div>
  {/* Announcement */}
  <div className="bg-indigo-600 px-4 py-3 text-white">
  <p className="text-center text-sm font-medium">
  Promo baju diskon 60%?
  <a href="#" className="inline-block underline"> Check out Sekarang..!</a>
  </p>
  </div>
  {/* announcement end */}

  {/* headers */}
     {/* header */}
<header className="bg-white">
<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
<div className="sm:flex sm:items-center sm:justify-between">
<div className="text-center sm:text-left">
  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl"> 3 Second Store</h1>

  <p className="mt-1.5 text-sm text-gray-500">Belanja Murah dan Langka</p>
</div>

<div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
    type="button" href="/">
  
  <span className="text-sm font-medium">Home</span>
  </a>
  <a className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring text-center" type="button"
  href="https://docs.google.com/document/d/11aZBY7x0IJjdLaI3QEstXCjq8nYjQf3H0PDx8XVsQOI/edit?usp=sharing">
  <button>
   Download File Recruitment
  </button>
  </a>
  
</div>
</div>
</div>
</header>
  {/* header end */}

{/* card job vacancies */}
<div>
<div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-W-xl mx-auto sm:px-6 sm:py-12 mt-2">
<article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm" data-aos="fade-up">
<Image
alt="Dev"
src={Dev}
className="h-56 w-full object-cover"
/>

<div className="p-4 sm:p-6">
<a href="#">
<h3 className="text-lg font-medium text-gray-900">
  Development team
</h3>
</a>

<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
Bertanggung jawab atas pengembangan situs website serta memastikan performanya stabil dan baik
</p>
<Link href='/Recruit/Devteam' className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
Apply 
<span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
  &rarr;
</span>
</Link>
</div>
</article>


<article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm" data-aos = "fade-up">
<Image
alt="admin"
src={admin}
className="h-56 w-full object-cover"
/>

<div className="p-4 sm:p-6">
<a href="#">
<h3 className="text-lg font-medium text-gray-900">
 Admin Media Sosial
</h3>
</a>

<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
Bertanggung jawab atas pengelolaan media sosial dengan membuat konten kreatif dan inovatif serta menganalisis performa media sosial
</p>

<Link href="/Recruit/Adminmedsos" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
  Apply

<span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
  &rarr;
</span>
</Link>
</div>
</article>



<article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm" data-aos = "fade-up">
<Image
alt="Financial"
src= {Financial}
className="h-56 w-full object-cover"
/>

<div className="p-4 sm:p-6">
<a href="#">
<h3 className="text-lg font-medium text-gray-900">
Financial Officer
</h3>
</a>

<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
menjalankan tugas dari chief atau CEO. selain itu, financial officer bertanggung jawab atas pengelolaan
keuangan sekaligus mengelola atau mengawasi kinerja para officer.
</p>

<Link href="/Recruit/finanof" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
Apply

<span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
  &rarr;
</span>
</Link>
</div>
</article>

<article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm" data-aos = "fade-up">
<Image
alt="webi"
src= {website}
className="h-56 w-full object-cover"
/>

<div className="p-4 sm:p-6">
<a href="#">
<h3 className="text-lg font-medium text-gray-900">
Admin Website
</h3>
</a>

<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
Bertanggung jawab untuk merespon umpan balik, pertanyaan serta menyortir lamaran kerja yang masuk.
</p>

<Link href="/Recruit/adminweb" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
Apply
<span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
  &rarr;
</span>
</Link>
</div>
</article>
</div>
{/* card job vacancies end */}
</div>

{/* footer  */}
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
{/* footer end */}
</div>
 )

}

export default Job;