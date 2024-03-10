type MessageDisplayProps = {
  message: string;
  className?: string;
};

function MessageDisplay({
  message,
  className = "",
}: MessageDisplayProps): JSX.Element {
  return (
    <p
      className={`absolute inset-y-1/2 w-full text-ellipsis text-nowrap px-5 text-center font-semibold md:text-xl lg:text-2xl xl:text-base ${className}`}
    >
      {message}
    </p>
  );
}

export default MessageDisplay;
