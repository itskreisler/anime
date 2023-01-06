import { useForm } from 'react-hook-form'
export const useHookForm = (defaultValues) => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit
  } = useForm(defaultValues)
  return { register, errors, watch, handleSubmit }
}
