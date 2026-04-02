import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counnterActions } from "../model/slice/counterSilce";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { useTranslation } from "react-i18next";

export const Counter = () => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counnterActions.increment());
    };
    const decrement = () => {
        dispatch(counnterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={increment} data-testid="increment-btn">
                {t("increment")}
            </Button>
            <Button onClick={decrement} data-testid="decrement-btn ">
                {t("decrement")}
            </Button>
        </div>
    );
};
