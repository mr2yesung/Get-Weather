import UpcomingDayDetail from "./UpcomingDayDetail";

function UpcomingDisplay(): JSX.Element {
  return (
    <div className="relative w-full caption-bottom overflow-auto text-sm">
      <UpcomingDayDetail />
      <UpcomingDayDetail />
      <UpcomingDayDetail />
      <UpcomingDayDetail />
      <UpcomingDayDetail />
      <UpcomingDayDetail />
    </div>
  );
}

export default UpcomingDisplay;
