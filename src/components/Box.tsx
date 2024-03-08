type BoxProps = {
  children: React.ReactNode;
};

function Box({ children }: BoxProps): JSX.Element {
  return (
    <div className="relative mx-auto max-w-96 rounded-lg border shadow-sm">
      {children}
    </div>
  );
}

export default Box;
