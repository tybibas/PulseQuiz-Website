import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error('Missing VITE_SUPABASE_URL environment variable')
}

if (!supabaseAnonKey) {
  throw new Error('Missing VITE_SUPABASE_ANON_KEY environment variable')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactSubmission = {
  business_name: string
  contact_name: string
  email: string
  website?: string
  business_type: string
  quiz_goal: string
  wants_sample_quiz: boolean
}

export async function submitContactForm(data: ContactSubmission) {
  try {
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([{
        business_name: data.business_name,
        contact_name: data.contact_name,
        email: data.email,
        website: data.website || null,
        business_type: data.business_type,
        quiz_goal: data.quiz_goal,
        wants_sample_quiz: data.wants_sample_quiz,
        created_at: new Date().toISOString()
      }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      throw new Error(`Database error: ${error.message}`)
    }

    console.log('Form submitted successfully:', result)
    return result
  } catch (error) {
    console.error('Error submitting form:', error)
    throw error
  }
}