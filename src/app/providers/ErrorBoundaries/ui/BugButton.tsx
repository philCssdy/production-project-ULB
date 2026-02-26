import { Button } from "shared/ui/Button/Button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

//Компонент для Тестировния ErrorBoundaries

export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const onThorow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThorow}> {t("Throw error")}</Button>;
};
