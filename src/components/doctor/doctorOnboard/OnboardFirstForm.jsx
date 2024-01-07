import { useDispatch } from "react-redux";
import { closeOnboardSection } from "../../../store/features/doctorModuleSlices/onboardSlice";
import { CheckmarkRoundedSvg, RupeesSvg } from "../../../assets/svgs";
import { successToast } from "../../../utils/toastMsgs";

const OnboardFirstForm = () => {
  const dispatch = useDispatch();

  const planDetails = [
    {
      name: "Standard plan",
      price: "1500",
      service: [
        {
          dis: "2 team members",
          available: true,
        },
        {
          dis: "20GB Cloud storage",
          available: true,
        },
        {
          dis: "Integration help",
          available: false,
        },
        {
          dis: "Sketch Files",
          available: false,
        },
      ],
    },
    {
      name: "Premium plan",
      price: "3000",
      service: [
        {
          dis: "2 team members",
          available: true,
        },
        {
          dis: "20GB Cloud storage",
          available: true,
        },
        {
          dis: "Integration help",
          available: false,
        },
        {
          dis: "Sketch Files",
          available: false,
        },
      ],
    },
    {
      name: "Free plan",
      price: "0",
      service: [
        {
          dis: "2 team members",
          available: true,
        },
        {
          dis: "20GB Cloud storage",
          available: true,
        },
        {
          dis: "Integration help",
          available: false,
        },
        {
          dis: "Sketch Files",
          available: false,
        },
      ],
    },
  ];

  const handleChoosePlan = (index) => {
    switch (index) {
      case 0:
        successToast("You have selected Standard plan");
        dispatch(closeOnboardSection());
        break;
      case 1:
        successToast("You have selected Premium plan");
        dispatch(closeOnboardSection());
        break;
      case 2:
        successToast("You have selected Free plan");
        dispatch(closeOnboardSection());
        break;
    }
  };

  return (
    <div className="flex gap-4 px-4">
      {planDetails.map((plan, index) => (
        <div
          key={index}
          className="w-full rounded-lg border border-black-5 p-4 shadow "
        >
          <h5 className="dark:text-gray-400 mb-4 text-xl font-medium text-black-3">
            {plan.name}
          </h5>
          <div className="text-gray-900 flex items-baseline dark:text-white">
            <span className="text-3xl font-semibold">
              <RupeesSvg />
            </span>
            <span className="text-4xl font-extrabold tracking-tight">
              {plan.price}
            </span>
            <span className="text-gray-500 dark:text-gray-400 ms-1 text-xl font-normal">
              /month
            </span>
          </div>
          <ul role="list" className="my-7 space-y-5">
            {plan.service.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-black-3">
                  <CheckmarkRoundedSvg />
                </span>
                <span
                  className={`dark:text-gray-400 ms-3 text-base font-normal leading-tight text-black-2 ${
                    item.available ? "" : "text-black-3 line-through"
                  }`}
                >
                  {item.dis}
                </span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => handleChoosePlan(index)}
            className={`inline-flex w-full justify-center rounded-lg ${
              index === 2 ? "bg-black-3" : "bg-primary"
            } px-5 py-2.5 text-center  font-medium text-white transition-three-all hover:bg-black-2`}
          >
            {index === 2 ? "Free Trial" : "Choose plan"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default OnboardFirstForm;
