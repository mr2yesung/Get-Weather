const loaderElementIndex: Array<number> = [...Array(5).keys()];

function HorizontalLoader(): JSX.Element {
  return (
    <div className="mx-auto my-4 flex items-center justify-center gap-x-1">
      {loaderElementIndex.map((index) => {
        return (
          <div
            key={"loader" + index.toString()}
            className="animate-scaling h-3 w-3 rounded-full border border-slate-900"
            style={{ animationDelay: `${index * 0.2}s` }}
          ></div>
        );
      })}
    </div>
  );
}

export default HorizontalLoader;
