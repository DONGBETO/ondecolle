"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import CustomSelect from "./departement";
import AutoTextarea from "./textarea";
import { siteConfig } from "@/src/config/site";

type FormState = {
  prenoms: string;
  nom: string;
  email: string;
  objet: string;
  message: string;
  pays: string;
  departement: string;
  isInBenin: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = {
  prenoms: "",
  nom: "",
  email: "",
  objet: "",
  message: "",
  pays: "",
  departement: "",
  isInBenin: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSuccess(false);
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!form.prenoms.trim()) newErrors.prenoms = "Prénoms requis";
    if (!form.nom.trim()) newErrors.nom = "Nom requis";
    if (!EMAIL_REGEX.test(form.email.trim())) newErrors.email = "Email invalide";
    if (!form.objet.trim()) newErrors.objet = "Objet requis";
    if (!form.message.trim()) newErrors.message = "Message requis";

    if (form.isInBenin === "oui" && !form.departement) {
      newErrors.departement = "Département requis";
    }

    if (form.isInBenin === "non" && !form.pays) {
      newErrors.pays = "Pays requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");
    setSuccess(false);
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
        setForm(EMPTY_FORM);
        setErrors({});
      } else {
        const data = await res.json().catch(() => null);
        setSubmitError(
          data?.error
            ? `L'envoi a échoué : ${data.error}`
            : "L'envoi a échoué. Veuillez réessayer plus tard."
        );
      }
    } catch {
      setSubmitError("Impossible de joindre le serveur. Vérifiez votre connexion.");
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
              <p>{siteConfig.contact.address}</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900">Email</h3>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                {siteConfig.contact.email}
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900">Téléphone</h3>
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="hover:underline">
                {siteConfig.contact.phone}
              </a>
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
          <form onSubmit={handleSubmit} noValidate className="space-y-5">

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
              type="email"
              autoComplete="email"
              placeholder="adresse@gmail.com"
              className={inputClass}
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
                    setForm((prev) => ({ ...prev, departement: value }))
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
            {errors.objet && (
              <p className="text-red-500 text-sm">{errors.objet}</p>
            )}

            {/* MESSAGE */}
            <AutoTextarea
              name="message"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}

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
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Envoi..." : "ENVOYER"}
            </motion.button>

            {success && (
              <p className="text-green-600 text-sm" role="status">
                Message envoyé avec succès
              </p>
            )}
            {submitError && (
              <p className="text-red-500 text-sm" role="alert">
                {submitError}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}