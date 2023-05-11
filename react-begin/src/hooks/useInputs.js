import { useState, useCallback } from "react";

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });

      console.log(e.target);
      console.log(form);
    },
    [form]
  );

  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
}

export default useInputs;
