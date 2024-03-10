type BoxProps = {
  className?: string;
  children: React.ReactNode;
};

function Box({ className = "", children }: BoxProps): JSX.Element {
  return (
    <div
      className={`relative mx-auto w-full max-w-96 rounded-lg border shadow-sm md:max-w-xl lg:max-w-2xl xl:max-w-md ${className}`}
    >
      {children}
    </div>
  );
}

export default Box;
