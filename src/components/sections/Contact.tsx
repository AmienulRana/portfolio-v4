import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { sendEmail } from "../../actions/sendEmail";
import toast from "react-hot-toast";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);


const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);
    const { error } = await sendEmail({senderEmail: form?.email, message: form?.message});

    if (error) {
      toast.error(error);
      return;
    }

    setLoading(false);
    toast.success("Email sent successfully!");

    // emailjs
    //   .send(
    //     emailjsConfig.serviceId,
    //     emailjsConfig.templateId,
    //     {
    //       form_name: form.name,
    //       to_name: config.html.fullName,
    //       from_email: form.email,
    //       to_email: config.html.email,
    //       message: form.message,
    //     },
    //     emailjsConfig.accessToken
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert("Thank you. I will get back to you as soon as possible.");

    //       setForm(INITIAL_STATE);
    //     },
    //     (error) => {
    //       setLoading(false);

    //       console.log(error);
    //       alert("Something went wrong.");
    //     }
    //   );
  };

  return (
    <div
      className={`flex justify-center gap-10 overflow-hidden xl:mt-8 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === "message" && { rows: 4 })}
                />
              </label>
            );
          })}
          <div className="flex justify-end">
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          </div>
        </form>
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");
