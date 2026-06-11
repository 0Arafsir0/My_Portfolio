import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const contact = portfolioData?.contact || {};
  const {
    email = "",
    phone = "",
    address = "",
    name = "",
    gender = "",
    country = "",
    age = "",
    imgurl = "",

  } = contact;

  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center gap-5 py-20">
        {/* SIDE - LOTTIE */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full">
            <dotlottie-wc
              src="https://lottie.host/e744af91-d347-435b-a552-11c1bffbe0cd/Vj6iiG9F2D.lottie"
              autoplay
              loop
            ></dotlottie-wc>
          </div>
        </div>
        {/* SIDE - TEXT */}
        <div className="flex flex-col text-sm gap-1 flex-1">
          <p className="text-tertiary">{"{"}</p>

          {Object.keys(contact).map((key) => {
            if (key === "_id" || key === "__v") return null;

            return (
              <p key={key} className="ml-5">
                <span className="text-tertiary">"{key}"</span>
                <span className="text-tertiary"> : </span>
                <span className="text-tertiary">"{contact[key]}"</span>
              </p>
            );
          })}

          <p className="text-tertiary">{"}"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
