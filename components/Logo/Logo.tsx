import Image from 'next/image';

interface LogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function Logo({ src, alt, width, height }: LogoProps) {
  return (
    <div data-testid='logo'>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
