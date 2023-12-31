import { useState } from "react";
import {
  ArrowUpSvg,
  CloseEyeSvg,
  DashboardCardAttendedPatientIconSvg,
  DashboardCardPatientIconSvg,
  DashboardCardRevenueIconSvg,
  DownArrowSvg,
  OpenEyeSvg,
} from "../../assets/svgs";

const DoctorCards = () => {
  const [cards, setCards] = useState([
    {
      label: "Total Patients",
      count: 46,
      up: false,
      percentage: 12.5,
      icon: DashboardCardPatientIconSvg,
      accentColor: "before:bg-[#1C62DD]",
    },
    {
      label: "Attended Patients",
      count: 32,
      up: true,
      percentage: 8.2,
      icon: DashboardCardAttendedPatientIconSvg,
      accentColor: "before:bg-[#e57710]",
    },
    {
      label: "Total Revenue",
      count: 3200,
      up: true,
      percentage: 6.4,
      icon: DashboardCardRevenueIconSvg,
      accentColor: "before:bg-[#00b83a]",
    },
  ]);
  const [selectedCard, setSelectedCard] = useState(0);

  const [showRevenue, setShowRevenue] = useState(false);
  return (
    <>
      {cards.map((card, index) => (
        <div
          key={index}
          className={`dark:border-black-3 dark:bg-black ${
            card.accentColor
          } relative  cursor-pointer overflow-hidden rounded-3xl border border-black-5 bg-white px-9  py-6 shadow-default before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full  ${
            selectedCard === index
              ? "before:translate-y-0"
              : "before:translate-y-full"
          }   before:transition-three-all hover:before:translate-y-0`}
        >
          {<card.icon />}
          <div className="mt-4 flex select-none items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black dark:text-white">
                <span className="flex gap-4">
                  {index === 2
                    ? showRevenue
                      ? card.count
                      : "XXXX"
                    : card.count}
                  <div
                    className=" px-2"
                    onClick={() => setShowRevenue(!showRevenue)}
                  >
                    {index === 2 && (
                      <div className="mt-1.5">
                        {showRevenue ? <OpenEyeSvg /> : <CloseEyeSvg />}
                      </div>
                    )}
                  </div>
                </span>
              </h4>
              <span className=" font-medium text-black-3">{card.label}</span>
            </div>
            <span
              className={`flex items-center gap-1 text-sm font-medium ${
                card.up ? "text-success" : "text-danger"
              } dark:text-[#70ffa2]`}
            >
              {card.percentage}%{card.up ? <ArrowUpSvg /> : <DownArrowSvg />}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default DoctorCards;
