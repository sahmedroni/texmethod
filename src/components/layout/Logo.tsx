import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Image 
        src="https://placehold.co/150x50.png" 
        alt="Tex Method Logo" 
        width={150} 
        height={50}
        data-ai-hint="logo"
      />
    </div>
  );
}
