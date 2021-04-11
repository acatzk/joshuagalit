import EmailItem from './EmailItem'

export default function EmailList ({ emails, ...props }) {
  return (
    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700 transition ease-in-out duration-700">
      {emails.map((mail) => <EmailItem key={mail.id} {...mail} {...props} /> )}
    </tbody>
  )
}