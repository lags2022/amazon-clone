const ErrorForm = ({ formError }) => {
    console.log(formError)
  return (
    <p className="absolute w-fit inline-block m-0 p-0 text-rose-500 text-xs font-medium border-2 border-rose-500 bg-white">
      {formError}
    </p>
  );
};

export default ErrorForm;
