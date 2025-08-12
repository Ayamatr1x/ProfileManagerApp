import { useForm } from "react-hook-form";

function Form({ handleFormSubmitData }) {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };

  return (
    <div className="mt-8 flex justify-center">
      <form
        className="flex gap-4 flex-wrap justify-center bg-gray-100 p-4 rounded-lg shadow-md"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <input
          {...register("name")}
          className="rounded-md px-3 py-2 text-sm outline-none border border-gray-300 focus:border-blue-500"
          type="text"
          placeholder="Name"
        />
        <input
          {...register("email")}
          className="rounded-md px-3 py-2 text-sm outline-none border border-gray-300 focus:border-blue-500"
          type="text"
          placeholder="Email"
        />
        <input
          {...register("image")}
          className="rounded-md px-3 py-2 text-sm outline-none border border-gray-300 focus:border-blue-500"
          type="text"
          placeholder="Image URL"
        />
        <input
          className="rounded-md bg-blue-500 px-5 py-2 text-white text-sm font-semibold cursor-pointer hover:bg-blue-600"
          type="submit"
          value="Save"
        />
      </form>
    </div>
  );
}

export default Form;
