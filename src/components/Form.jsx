import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

export const Form = () => {
 
  const schema = yup.object().shape({
    fullName: yup.string().required("Name is required."),
    email: yup.string().email().required("Email is required."),
    age: yup.number().typeError("Age must be a number.").positive().integer().min(18).required("Age is required."),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required."),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords does not match")
    .required("Passwords does not match."),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      {errors.fullName && <p>{errors.fullName?.message}</p>}
      <input type="email" placeholder="Email..." {...register("email")} />
      {errors.email && <p>{errors.email?.message}</p>}
      <input type="number" placeholder="Age..." {...register("age")} />
      {errors.age && <p>{errors.age?.message}</p>}
      <input type="password" placeholder="Password..." {...register("password")} />
      {errors.password && <p>{errors.password?.message}</p>}
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("confirmPassword")}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};
