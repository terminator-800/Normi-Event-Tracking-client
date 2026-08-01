import toast, { type ToastOptions } from "react-hot-toast";

/** One visible toast at a time; each notify gets a fresh pop (even same message). */
let toastSeq = 0;

function showToast(
  type: "success" | "error",
  message: string,
  options?: ToastOptions,
): string {
  toast.remove();
  toast.dismiss();

  toastSeq += 1;
  const id = `app-toast-${toastSeq}`;
  const notify = type === "success" ? toast.success : toast.error;
  return notify(message, { ...options, id });
}

export function notifySuccess(message: string, options?: ToastOptions): string {
  return showToast("success", message, options);
}

export function notifyError(message: string, options?: ToastOptions): string {
  return showToast("error", message, options);
}

export function dismissAppToast(): void {
  toast.remove();
  toast.dismiss();
}
