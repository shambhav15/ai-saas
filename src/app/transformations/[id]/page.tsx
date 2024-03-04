import React from "react";

export default function TransformationPage({
  params,
}: {
  params: { id: number };
}) {
  return <div>TransformationPage {params.id}</div>;
}
