import axios from "axios";
import { useEffect, useState } from "react";

export const ContactUs = () => {
  const [error, setError] = useState(false);

  const callAPI = async () => {

  };

  useEffect(() => {
    callAPI();
  }, []);

  // 💥 Artificially throw an error during render
  if (error) {
    throw new Error("This is a render error!");
  }

  return <h1 onClick={() => setError(true)}>Click to trigger render error in Contact us page</h1>;
};
