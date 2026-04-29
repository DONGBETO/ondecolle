"use client";
import { useState } from "react";
import CustomSelect from "./departement";
import CustomSelectAdresse from "./residence";
import AutoTextarea from "./textarea";

export default function ContactSection() {
const [value, setValue] = useState("");
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10">

        {/* LEFT - Infos */}
        <div className="w-full lg:w-[40%]">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-8">
            CONTACTEZ-NOUS ICI
          </h2>

          <div className="space-y-6 text-gray-700 text-sm sm:text-base">
            
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Adresse</h3>
              <p>Cotonou - Fidjrossè (République du Bénin)</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Email</h3>
              <p>contact@ondecolle.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Phone</h3>
              <p>+229 01 61 93 93 10</p>
            </div>

          </div>
        </div>

        {/* RIGHT - Formulaire */}
        <div className="w-full lg:w-[60%] bg-white rounded-xl shadow-lg p-6 sm:p-8">

          <form className="space-y-5">

            {/* Prénoms */}
            {/* <label className="text-sm font-medium text-gray-400">Prénoms</label> */}
              <input
                type="text"
                placeholder="Prénoms"
                className="w-full border placeholder:text-gray-400 border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            {/* Nom */}
            {/* <label className="text-sm font-medium text-gray-400">Nom</label> */}
              <input
                type="text"
                placeholder="Nom"
                className="w-full border placeholder:text-gray-400 border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
              />

            {/* Email */}
            {/* <label className="text-sm font-medium text-gray-400">Email</label> */}
            <input
              type="email"
              placeholder="adresse@gmail.com"
              className="w-full border placeholder:text-gray-400 border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
            />

            {/* Adresse */}
            <CustomSelectAdresse />

            {/* Département  */}
            <CustomSelect />

            <input
              type="text"
              placeholder="Pays de résidence"
              className="w-full border placeholder:text-gray-400 border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
            />

            {/* Objet */}
            <input
              type="text"
              placeholder="Objet"
              className="w-full border placeholder:text-gray-400 border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
            />

            {/* Message */}
            <AutoTextarea />

            {/* Button */}
            <button
              type="submit"
              className="bg-yellow-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transition cursor-pointer active:scale-95 shadow-md hover:shadow-lg"
            >
              ENVOYER
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}