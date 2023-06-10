"use client";

import Heading from "@/components/heading";
import { useEffect } from "react";

export default function Error({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Heading>Something went wrong!</Heading>

      <div className="my-10">
        <p>Try reloading the page</p>
      </div>
    </>
  );
}
