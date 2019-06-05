export type Choice = Readonly<{
  /** "Swift" */
  choice: string
  /** "/questions/1/choices/1" */
  url: string
  /** "1024" */
  votes: number
}>

export type Question = Readonly<{
  /** "Favourite programming language?" */
  question: string
  /** "2014-11-11T08:40:51.620Z" */
  published_at: string
  /** "/questions/1" */
  ur: string
  choices: Choice[]
}>

export type Questions = readonly Question[]
