'use server'
import { revalidatePath } from 'next/cache'
import {z} from 'zod'

const schema = z.object({

})

export async function createRoom(prevState: any, formData: FormData) {
  try {
    console.log(formData);
    return revalidatePath('/')
  } catch (e) {
    return { message: 'Failed to create' }
  }
}