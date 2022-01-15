import React, { useEffect, useState } from "react";

const useTyped = (job: string) => {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTyped(job.slice(0, typed.length + 1));
    }, 110);
    return () => clearTimeout(timeout);
  }, [job, typed]);

  return typed;
};

export default useTyped;
