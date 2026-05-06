"use client";

import { useState } from "react";
import CustomSelect from "./departement";
import CustomSelectAdresse from "./residence";
import AutoTextarea from "./textarea";

export default function ContactSection() {
  const [form, setForm] = useState({
    prenoms: "",
    nom: "",
    email: "",
    objet: "",
    message: "",
    pays: "",
    departement: "",
    isInBenin: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors: any = {};

    if (!form.prenoms) newErrors.prenoms = "Prénoms requis";
    if (!form.nom) newErrors.nom = "Nom requis";
    if (!form.email.includes("@")) newErrors.email = "Email invalide";
    if (!form.objet) newErrors.objet = "Objet requis";
    if (!form.message) newErrors.message = "Message requis";

    if (form.isInBenin === "oui" && !form.departement) {
      newErrors.departement = "Département requis";
    }

    if (form.isInBenin === "non" && !form.pays) {
      newErrors.pays = "Pays requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({
          prenoms: "",
          nom: "",
          email: "",
          objet: "",
          message: "",
          pays: "",
          departement: "",
          isInBenin: "",
        });
      }

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Prénoms */}
            <input
              name="prenoms"
              value={form.prenoms}
              onChange={handleChange}
              placeholder="Prénoms"
              className="w-full border placeholder:text-gray-400 border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            {errors.prenoms && <p className="text-red-500 text-sm">{errors.prenoms}</p>}

            {/* Nom */}
            <input
              name="nom"
              value={form.nom}
              onChange={handleChange}
              placeholder="Nom"
              className="w-full border placeholder:text-gray-400 border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}

            {/* Email */}
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="adresse@gmail.com"
              className="w-full border placeholder:text-gray-400 border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            {/* Adresse */}
            <CustomSelectAdresse />

            {/* Question */}
            <div>
              <label className="text-sm text-gray-500">Êtes-vous au Bénin ?</label>
              <select
                name="isInBenin"
                value={form.isInBenin}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
              >
                <option value="">-- Choisir --</option>
                <option value="oui">Oui</option>
                <option value="non">Non</option>
              </select>
            </div>

            {/* Condition */}
            {form.isInBenin === "oui" && (
              <>
                <CustomSelect />
                {errors.departement && <p className="text-red-500 text-sm">{errors.departement}</p>}
              </>
            )}

            {form.isInBenin === "non" && (
              <>
                <input
                  name="pays"
                  value={form.pays}
                  onChange={handleChange}
                  placeholder="Pays de résidence"
                  className="w-full border placeholder:text-gray-400 border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                {errors.pays && <p className="text-red-500 text-sm">{errors.pays}</p>}
              </>
            )}

            {/* Objet */}
            <input
              name="objet"
              value={form.objet}
              onChange={handleChange}
              placeholder="Objet"
              className="w-full border placeholder:text-gray-400 border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            {errors.objet && <p className="text-red-500 text-sm">{errors.objet}</p>}

            {/* Message */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full border placeholder:text-gray-400 border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transition cursor-pointer active:scale-95 shadow-md hover:shadow-lg"
            >
              {loading ? "Envoi..." : "ENVOYER"}
            </button>

            {success && (
              <p className="text-green-600">Message envoyé avec succès 🎉</p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}