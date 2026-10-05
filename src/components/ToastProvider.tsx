"use client";

import { Toaster } from "react-hot-toast";

const ToastProvider = () => (
  <Toaster
    position="top-center"
    reverseOrder={false}
    containerStyle={{ zIndex: 100000 }}
    toastOptions={{
      duration: 4000,
      style: {
        background: "#fff",
        color: "#1f2937",
        border: "1px solid #e5e7eb",
        padding: "12px 16px",
      },
      success: {
        iconTheme: {
          primary: "#15803d",
          secondary: "#fff",
        },
      },
      error: {
        iconTheme: {
          primary: "#b91c1c",
          secondary: "#fff",
        },
      },
    }}
  />
);

export default ToastProvider;
