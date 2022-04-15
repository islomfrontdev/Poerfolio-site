import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function AutoRoute() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);
  return <div>Loading</div>;
}
