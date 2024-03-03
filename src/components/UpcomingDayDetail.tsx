function UpcomingDayDetail(): JSX.Element {
  return (
    <div className="flex justify-between border-b p-4 transition-colors hover:bg-slate-50">
      <p className="font-semibold">Monday</p>
      <p>
        Max <span className="font-semibold">25oC</span>, Min{" "}
        <span className="font-semibold">10oC</span>, Partly Cloudy
      </p>
    </div>
  );
}

export default UpcomingDayDetail;
