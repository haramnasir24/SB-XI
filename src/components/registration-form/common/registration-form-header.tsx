import {
  FaClipboardList,
  FaMoneyCheckAlt,
  FaPuzzlePiece,
  FaUser,
} from "react-icons/fa";

interface RegistrationHeaderProps {
  currStep: number;
}

const RegistrationHeader: React.FC<RegistrationHeaderProps> = ({
  currStep,
}) => {
  const steps = [
    { label: "User Data", icon: FaUser },
    { label: "Modules", icon: FaPuzzlePiece },
    { label: "Additional Details", icon: FaClipboardList },
    { label: "Payment Proof", icon: FaMoneyCheckAlt },
  ];

  return (
    <div className="mb-12 bg-white p-6">
      <h2 className="mb-6 text-center text-3xl font-extrabold text-indigo-600">
        Science Bee Registration Form
      </h2>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-1 flex-col items-center">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full border-4 ${
                index < currStep
                  ? "border-indigo-500 bg-indigo-500 text-white"
                  : index === currStep
                    ? "border-indigo-500 bg-white text-indigo-500"
                    : "border-gray-300 bg-white text-gray-300"
              }`}
            >
              <step.icon className="h-6 w-6" />
            </div>
            <div className="mt-2 h-1 w-full bg-gray-200">
              <div
                className={`h-full ${
                  index < currStep ? "bg-indigo-500" : "bg-gray-200"
                }`}
                style={{
                  width:
                    index < currStep
                      ? "100%"
                      : index === currStep
                        ? "50%"
                        : "0%",
                }}
              />
            </div>
            <span
              className={`mt-2 text-xs font-medium ${
                index <= currStep ? "text-indigo-600" : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationHeader;