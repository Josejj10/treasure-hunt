import { ThemeToggle } from '@/lib/components/theme-toggle'

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-base-100/80 backdrop-blur-md">
      <section className="flex items-center justify-between py-2 mx-auto wrapper">
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </section>
    </header>
  )
}

export default Header
