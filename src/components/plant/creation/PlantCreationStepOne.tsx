import HeadlessInputForm from '@/components/general/HeadlessInputForm';
import { PlantNameInput } from '../PlantNameInput';

export default function PlanCreationStepOne() {
  return (
    <div className='flex flex-col gap-2'>
      <PlantNameInput />
      <HeadlessInputForm name='height' label='height' />
    </div>
  );
}
