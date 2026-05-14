"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import CustomSelect from "./departement";
import AutoTextarea from "./textarea";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

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
        headers: { "Content-Type": "application/json" },
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
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-white placeholder:text-gray-300 text-gray-500";

  return (
    <section className="bg-white py-16 sm:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-[40%]"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-8">
            CONTACTEZ-NOUS ICI
          </h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-blue-900">Adresse</h3>
              <p>Cotonou - Fidjrossè (Bénin)</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900">Email</h3>
              <p>contact@ondecolle.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900">Phone</h3>
              <p>+229 01 61 93 93 10</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-[60%] bg-white rounded-2xl shadow-xl p-6 sm:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Prénoms */}
            <motion.input
              whileFocus={{ scale: 1.01 }}
              name="prenoms"
              value={form.prenoms}
              onChange={handleChange}
              placeholder="Prénoms"
              className={inputClass}
            />
            {errors.prenoms && (
              <p className="text-red-500 text-sm">{errors.prenoms}</p>
            )}

            {/* Nom */}
            <motion.input
              whileFocus={{ scale: 1.01 }}
              name="nom"
              value={form.nom}
              onChange={handleChange}
              placeholder="Nom"
              className={inputClass}
            />
            {errors.nom && (
              <p className="text-red-500 text-sm">{errors.nom}</p>
            )}

            {/* Email */}
            <motion.input
              whileFocus={{ scale: 1.01 }}
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="adresse@gmail.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-white placeholder:text-gray-300 text-gray-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            {/* BENIN */}
            <select
              name="isInBenin"
              value={form.isInBenin}
              onChange={handleChange}
              className={inputClass}
            >
            <option value="" className="text-gray-700 hover:bg-blue-900">Êtes-vous au Bénin ?</option>
            <option value="oui" className="text-gray-700 hover:bg-blue-900">Oui</option>
            <option value="non" className="text-gray-700 hover:bg-blue-900">Non</option>
            </select>

            {/* CONDITIONAL */}
            {form.isInBenin === "oui" && (
              <>
                <CustomSelect
                  value={form.departement}
                  onChange={(value: string) =>
                    setForm({ ...form, departement: value })
                  }
                />
                {errors.departement && (
                  <p className="text-red-500 text-sm">
                    {errors.departement}
                  </p>
                )}
              </>
            )}

            {form.isInBenin === "non" && (
              <>
                <input
                  name="pays"
                  value={form.pays}
                  onChange={handleChange}
                  placeholder="Pays"
                  className={inputClass}
                />
                {errors.pays && (
                  <p className="text-red-500 text-sm">{errors.pays}</p>
                )}
              </>
            )}

            {/* OBJET */}
            <input
              name="objet"
              value={form.objet}
              onChange={handleChange}
              placeholder="Objet"
              className={inputClass}
            />

            {/* MESSAGE */}
            <AutoTextarea
              name="message"
              value={form.message}
              onChange={handleChange}
            />

            {/* BUTTON */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-full
                bg-yellow-400
                text-black
                py-3
                rounded-lg
                font-semibold
                transition
                shadow-md
                hover:shadow-xl
              "
            >
              {loading ? "Envoi..." : "ENVOYER"}
            </motion.button>

            {success && (
              <p className="text-green-600 text-sm">
                Message envoyé avec succès
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}