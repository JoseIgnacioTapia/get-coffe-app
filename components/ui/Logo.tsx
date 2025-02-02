import Image from 'next/image';

function Logo() {
  return (
    <div className='flex justify-center mt-5'>
      <div className='relative w-40 h-40'>
        <Image fill alt='Logotipo Fresh Coffee' src='/logo_cafeteria.jpeg' />
      </div>
    </div>
  );
}

export default Logo;
