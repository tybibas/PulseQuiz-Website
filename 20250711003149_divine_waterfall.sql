/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `business_name` (text)
      - `contact_name` (text)
      - `email` (text)
      - `website` (text, optional)
      - `business_type` (text)
      - `quiz_goals` (text)
      - `wants_sample` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for service role to insert data
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  website text,
  business_type text NOT NULL,
  quiz_goals text NOT NULL,
  wants_sample boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow service role to insert contact submissions
CREATE POLICY "Allow service role to insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Allow service role to read contact submissions
CREATE POLICY "Allow service role to read contact submissions"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);