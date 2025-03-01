import React, { useEffect, useState } from "react";

export default function GetCertificateButton(name) {
  const [fullname, setFullname] = useState(null);
  const GetCertificate = async () => {
    try {
      if (
        localStorage.getItem("name") == null ||
        localStorage.getItem("name") == undefined
      ) {
        throw new Error("No FullName Given");
      }

      const response = await fetch(
        "http://localhost:5000/generate-certificate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: localStorage.getItem("name") }),
        }
      );

      //   const data = await response.json();

      const blob = await response.blob();

      const reader = new FileReader();
      reader.onload = function () {
        const link = document.createElement("a");
        link.href = reader.result;
        link.download = "certificate.png"; // Set suggested filename
        link.click();
      };
      reader.readAsDataURL(blob);
      //   if (response.ok) {
      //     // Handle successful response
      //     alert(data.success);
      //   } else {
      //     // Handle error response
      //     throw new Error(data.error || "Something went wrong.");
      //   }
    } catch (error) {
      // Handle any errors
      alert(error.message);
    }
  };
  return (
    <button
      type="button"
      className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-lg px-4 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
      onClick={GetCertificate}
    >
      Get Certificate
    </button>
  );
}
