const Footer = () => {
  return (
    <footer className="w-fullh-700 wrapper">
      <div className="flex items-center justify-center h-6 bg-white text-slate-700 dark:bg-slate-900 dark:text-white">
        <p className="mr-1 text-xs text-slate-500 dark:text-slate-200">
          {' '}
          ☃️ Made with 💙 by{' '}
        </p>{' '}
        <a
          className="text-xs font-semibold text-blue-700 dark:text-blue-200"
          href="https://github.com/josejj10"
          target="_blank"
          rel="noreferrer"
        >
          Josejj ☃️
        </a>
      </div>
    </footer>
  )
}

export default Footer
