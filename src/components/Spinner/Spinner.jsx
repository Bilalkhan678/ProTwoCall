import { HalfCircleSpinner } from "react-epic-spinners";
import colorVariables from "../../styles/colors.module.scss";

const primaryColor = colorVariables.primary;

const Spinner = ({
  size = 40,
  showText = false,
  customText = "Loading...",
}) => {
  return (
    <div className="flex flex-col items-center justify-center my-4">
      <HalfCircleSpinner color={primaryColor} size={size} />
      {showText && (
        <p className="text-xl text-primary-light dark:text-primary-dark">
          {customText}
        </p>
      )}
    </div>
  );
};

export default Spinner;
