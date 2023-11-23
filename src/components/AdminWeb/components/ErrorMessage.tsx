function ErrorMessage(message: string, condition: boolean) {
  if (!condition) {
    return null;
  }

  return (
    <span className="text-[red] text-[12px] ml-3 relative">{message}</span>
  );
}

export default ErrorMessage;
