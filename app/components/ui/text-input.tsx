import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";
type Props = Readonly<{
    type?: string;
    label: string;
    name: keyof FieldValues;
    initialValue?: string;
    placeholder?: string;
    register: UseFormRegister<any>;
    error: FieldErrors<FieldValues>;
}>;
function Input({
    type = "text",
    label,
    name,
    initialValue,
    placeholder,
    register,
    error,
}: Props) {
    return (
        <div>
            <div className="flex flex-col gap-2 w-full">
                {label && (
                    <label
                        htmlFor={name}
                        className="text-sm font-medium text-neutral-700 tracking-wide"
                    >
                        {label}
                    </label>
                )}
                <input
                    id={name}
                    type={type || "text"}
                    defaultValue={initialValue || ""}
                    placeholder={placeholder || ""}
                    {...register(name)} // call the function  dynamically
                    className="styled-input"
                />
                {error?.[name] && (
                    <span className="text-red-500 text-sm">
                        {(error?.[name]?.message as string) ||
                            "something went wrong"}
                    </span>
                )}
            </div>
        </div>
    );
}
export default Input;
