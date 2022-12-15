import Image from 'next/image';

interface LogoProps {
  src: string;
  alt: string;
}

export default function Logo({ src, alt }: LogoProps) {
  return <Image src={src} alt={alt} width='100px' height='100px' />;
}
