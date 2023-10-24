import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { Size } from '@prisma/client';

const RoomIconColorRadioGroup = () => {
  const [selectedColor, setSelectedColor] = useState('green');

  const handleColorChange = (color: string) => {
    console.log(selectedColor);
    setSelectedColor(color);
  };

  return (
    <div className='flex items-center justify-between'>
      <div>Room Icon Color:</div>
      <div className='flex gap-2.5'>
        <input
          type='radio'
          name='roomIconColor'
          value='green'
          checked={selectedColor === 'green'}
          onChange={() => handleColorChange('green')}
          className='h-5 w-5 rounded-sm border-none bg-primary text-primary focus:ring-2 focus:ring-primary'
        />
        <input
          type='radio'
          name='roomIconColor'
          value='green-500'
          checked={selectedColor === 'green-500'}
          onChange={() => handleColorChange('green-500')}
          className='h-5 w-5 rounded-sm border-none bg-green-500 text-green-500 focus:ring-2 focus:ring-primary'
        />
        <input
          type='radio'
          name='roomIconColor'
          value='primary-light'
          checked={selectedColor === 'primary-light'}
          onChange={() => handleColorChange('primary-light')}
          className='h-5 w-5 rounded-sm border-none bg-primary-light text-primary-light focus:ring-2 focus:ring-primary'
        />
      </div>
    </div>
  );
};


const RadioButtonGroup = () => {
  const [selectedSize, setSelectedSize] = useState<Size>(Size.S); 

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value as Size); 
  };

  return (
    <div className='mx-10 my-3  flex flex-row gap-8'>
      {/* Element "S" */}
      <label className={`flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border border-background-grey transition-all hover:outline outline-primary outline-2 ${selectedSize === Size.S ? 'outline outline-primary' : ''}`}>
        <input
          type='radio'
          name='roomSize'
          value={Size.S}
          checked={selectedSize === Size.S}
          onChange={handleSizeChange}
          style={{ display: 'none' }} 
        />
        <div className='text-lg font-medium'>{Size.S}</div>
        <div className='w-3/4 text-center text-xs font-light text-foreground-grey'>
          Cozy, perfect for small spaces. 5m<sup>2</sup>
        </div>
      </label>

      {/* Element "M" */}
      <label className={`flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border border-background-grey transition-all hover:outline outline-primary outline-2 ${selectedSize === Size.M ? 'outline outline-primary' : ''}`}>
        <input
          type='radio'
          name='roomSize'
          value={Size.M}
          checked={selectedSize === Size.M}
          onChange={handleSizeChange}
          style={{ display: 'none' }} 
        />
        <div className='text-lg font-medium'>{Size.M}</div>
        <div className='w-3/4 text-center text-xs font-light text-foreground-grey'>
          A standard, comfortable size. Up to 40m<sup>2</sup>
        </div>
      </label>

      {/* Element "L" */}
      <label className={`flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border border-background-grey transition-all hover:outline outline-primary outline-2 ${selectedSize === Size.L ? 'outline outline-primary' : ''}`}>
        <input
          type='radio'
          name='roomSize'
          value={Size.L}
          checked={selectedSize === Size.L}
          onChange={handleSizeChange}
          style={{ display: 'none' }} 
        />
        <div className='text-lg font-medium'>{Size.L}</div>
        <div className='w-3/4 text-center text-xs font-light text-foreground-grey'>
          Generous for abundant growth. Up to 75m<sup>2</sup>
        </div>
      </label>
    </div>
  );
}





const RoomCreationStepTwo = () => (
  <div className='w-full'>
    <Dialog.Title className='text-2xl'>Room Personalization</Dialog.Title>
    <div className='mt-4 flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <div>Roomname*</div>
        <input
          name='roomName'
          className='focus:border-1 w-full rounded-md border border-background-grey px-2 py-1 transition-all focus:border-background-grey focus:outline-2 focus:outline-primary focus:ring-0'
        />
      </div>
      <RoomIconColorRadioGroup />
      <div className='flex flex-col gap-1'>
        <div>Room Size:</div>
        <p className='text-sm font-light text-foreground-grey'>
          Tailor your room's ambiance for healthier plants. Begin by entering
          your room dimensions.
        </p>
          <RadioButtonGroup/>
        </div>
    </div>
  </div>
);

export default RoomCreationStepTwo;