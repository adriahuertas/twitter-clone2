"use client"
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

const ComposePostTextButton = () => {
  const { pending }: { pending: boolean } = useFormStatus()
  return (

    <button disabled={pending} type="submit" className="bg-sky-500 font-bold rounded-full px-5 py-2 self-end">
      {pending ? "Posteando..." : "Postear"}
    </button>
  )
}

export default ComposePostTextButton
