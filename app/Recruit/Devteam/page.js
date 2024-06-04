'use client'
import Image from "next/image";
import Link from "next/link";
import Development from "../SVG/envelope.svg";
import Swal from "sweetalert2";
import "./Dev.css";
const Dev = () => {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "dffccda4-1ad3-4be6-93b8-f4ad84675aab");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            Swal.fire({
              title: "Good job!",
              text: "Email berhasil terkirim, semoga diterima ya...",
              icon: "success"
            });
            event.target.reset()
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Dokumen gagal terkirim..",
          });
          event.target.reset()
        }
    }
    return(
        <div>
        {/* headers */}
      <header class="bg-white">
   <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
     <div class="sm:flex sm:items-center sm:justify-between">
       <div class="text-center sm:text-left">
         <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl"> 3 Second Store</h1>
 
         <p class="mt-1.5 text-sm text-gray-500">Belanja Murah dan Langka</p>
       </div>
 
       <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
         <Link href="/Recruit" 
         type="button"
         className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-indigo-500 px-5 py-3 text-white-500 transition hover:text-gray-700 focus:outline-none focus:ring text-white">
         <span class="text-sm font-medium">Home</span>
         </Link>
       </div>
     </div>
   </div>
          </header>
        {/* headers */}
 
        {/* Content */}
 
     <div className="div-content">
 <div className="content-image">
 <Image src={Development}  className="gambar"/>
 </div>
 <div class="container-rekrut">
   <form onSubmit={handleSubmit}>
   <div class="row">
     <div class="col-25">
       <label for="fname">Name</label>
     </div>
     <div class="col-75">
       <input type="text" id="fname" name="Name" placeholder="Masukkan Nama anda"/>
     </div>
   </div>
 
   <div class="row">
     <div class="col-25">
       <label for="lname">Email</label>
     </div>
     <div class="col-75">
       <input type="text"  name="email" placeholder="Masukkan Email anda disinii" required/>
     </div>
   </div>
 
   <div class="row">
     <div class="col-25">
       <label for="lname">Kota</label>
     </div>
     <div class="col-75">
       <input type="text" id="lname" name="Kota" placeholder="Masukkan Kota anda disini" required/>
     </div>
   </div>
 
   <div class="row">
     <div class="col-25">
       <label for="country">Job</label>
     </div>
     <div class="col-75">
       <select id="country" name="Job Hire">
         <option value="Development Team">Development team</option>
       </select>
     </div>
   </div>
   <div class="row">
     <div class="col-25">
       <label for="subject">Subject</label>
     </div>
     <div class="col-75">
       <textarea id="subject" name="docs" placeholder="Input Link Gdrive anda disini.." ></textarea>
     </div>
   </div>
   <br></br>
   <div class="row">
     <input type="submit" value="Submit"/>
   </div>
   </form>
 </div>
 
        {/* Content end */}
     </div>
 
     {/* content end */}
     <footer class="bg-white-50">
   <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
     <div class="sm:flex sm:items-center sm:justify-between">
       <div class="flex justify-center text-teal-600 sm:justify-start">
       </div>
 
       <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
         Copyright &copy; 2022. All rights reserved.
       </p>
     </div>
   </div>
 </footer>
     </div>
    )
}

export default Dev;