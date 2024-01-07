import toast from "react-hot-toast";

const successToast = (text) => toast.success(text);
const errorToast = (text) => toast.error(text);

export { successToast, errorToast };
