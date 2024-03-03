import { useState } from "react";

function useInputChangeState(
  initialValue: string,
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState<string>(initialValue);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
  }

  return [value, handleInputChange];
}

export { useInputChangeState };
