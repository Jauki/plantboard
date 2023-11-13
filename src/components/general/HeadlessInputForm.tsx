export default function HeadlessInputForm() {
  return (
    <div className='flex flex-col gap-1'>
      <div>Roomname*</div>
      <input
        name='roomName'
        className='focus:border-1 w-full rounded-md border border-background-grey px-2 py-1 transition-all focus:border-background-grey focus:outline-2 focus:outline-primary focus:ring-0'
      />
    </div>
  );
}
