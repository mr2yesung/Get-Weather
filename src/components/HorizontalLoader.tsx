const loaderElementIndex: Array<number> = [...Array(5).keys()];

function HorizontalLoader(): JSX.Element {
  return (
    <div className="absolute inset-y-1/2 flex w-full items-center justify-center gap-x-1">
      {loaderElementIndex.map((index) => {
        return (
          <div
            key={"loader" + index.toString()}
            className="h-3 w-3 animate-scaling rounded-full border border-slate-900"
            style={{ animationDelay: `${index * 0.2}s` }}
          ></div>
        );
      })}
    </div>
  );
}

export default HorizontalLoader;
