import { motion } from "framer-motion";
import { Input } from "../components/ui/input";
import { ChangeEvent, useReducer, useRef } from "react";
import { submitAction } from "../actions/submit.action";

export function Contact() {
  //actually, let's use a reducer here
  const initialFormState = { name: "", email: "", subject: "", message: "" };
  const initialErrorState = { name: "", email: "", subject: "", message: "" };

  const [form, dispatchForm] = useReducer(formReducer, initialFormState);
  const [error, dispatchError] = useReducer(errorReducer, initialErrorState);
  const formContainerRef = useRef<HTMLDivElement>(null);

  function valueChangeDispatcher(e: ChangeEvent<HTMLInputElement>) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    if (fieldValue.length < 1) {
      errorDispatcher("empty_field", fieldName);
    } else {
      errorDispatcher("clear", fieldName);
    }

    dispatchForm({
      type: "value_changed",
      fieldName,
      fieldValue,
    });
  }

  function errorDispatcher(type: string, fieldName: string) {
    dispatchError({
      type,
      fieldName,
    });
  }

  function formReducer(state, action) {
    switch (action.type) {
      case "value_changed":
        return {
          ...state,
          [action.fieldName]: action.fieldValue,
        };
      default:
        return state;
    }
  }

  function errorReducer(state, action) {
    switch (action.type) {
      case "empty_field":
        return {
          ...state,
          [action.fieldName]: `${action.fieldName} is too short.`,
        };
      case "clear":
        return {
          ...state,
          [action.fieldName]: "",
        };
      default:
        return state;
    }
  }

  async function onSubmit() {
    const errorFree = isErrorFree();
    if (errorFree) {
      const response = await submitAction(form);
    }
  }

  function isErrorFree() {
    if (!formContainerRef.current) return;
    const inputs = formContainerRef.current.querySelectorAll<
      HTMLInputElement | HTMLTextAreaElement
    >("input, textarea");
    inputs.forEach((input) => {
      input.focus();
      input.blur();
    });

    return Object.values(error).every((val) => val === "");
  }

  return (
    <section className="flex w-full  justify-between mobile-container lg:container lg:pt-20 font-extralight">
      <div className="w-3/4">
        <div className="flex items-center ">
          <p className="">GET INTO CONTACT</p>
          <motion.h2
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="text-bold text-4xl text-green-600"
          >
            •
          </motion.h2>
        </div>
        <p className=" text-4xl w-full md:text-6xl tracking-wide ">
          READY WHEN YOU ARE
        </p>
      </div>
      <div className="flex flex-col w-3/5">
        <div ref={formContainerRef} className="flex flex-col gap-5  ">
          <Input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={(e) => valueChangeDispatcher(e)}
            onBlur={(e) => valueChangeDispatcher(e)}
          ></Input>
          <small>{error.name}</small>
          <Input
            name="email"
            placeholder="Email"
            onChange={(e) => valueChangeDispatcher(e)}
            onBlur={(e) => valueChangeDispatcher(e)}
          ></Input>
          <small>{error.email}</small>

          <Input
            name="subject"
            placeholder="Subject"
            onChange={(e) => valueChangeDispatcher(e)}
            onBlur={(e) => valueChangeDispatcher(e)}
          ></Input>
          <small>{error.subject}</small>

          <Input
            name="message"
            placeholder="Message"
            onChange={(e) => valueChangeDispatcher(e)}
            onBlur={(e) => valueChangeDispatcher(e)}
            type="text"
            className="pt-14 pb-5"
          ></Input>
          <small>{error.message}</small>
        </div>
        <div className="border">
          <button
            onClick={() => {
              onSubmit();
            }}
          >
            {" "}
            help
          </button>
        </div>
      </div>
    </section>
  );
}
