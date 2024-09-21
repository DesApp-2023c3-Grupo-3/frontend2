function ErrorMessage(message: string, condition: boolean) {
  if (!condition) {
    return null;
  }

  return <span className="text-danger text-[12px] ml-3 ">{message}</span>;
}

export default ErrorMessage;
