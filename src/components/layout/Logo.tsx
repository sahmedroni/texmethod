import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Image 
        src="https://drive.google.com/uc?export=view&id=1z00lCKXuyQnXZTbdOkJpcYuQdvflvUy1" 
        alt="Tex Method Logo" 
        width={150} 
        height={50}
        data-ai-hint="logo"
      />
    </div>
  );
}
