import Image from "next/image";

export default function Logo({ width, height }) {
  return (
    <Image
      src="/logo.gif"
      alt="logo"
      width={width || "50"}
      height={height || "50"}
    />
  );
}
