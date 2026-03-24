import { Toaster } from "react-hot-toast";

export default function AppToaster() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#0b1220",
          color: "#e5e7eb",
          border: "1px solid #1f2937",
        },
      }}
    />
  );
}
