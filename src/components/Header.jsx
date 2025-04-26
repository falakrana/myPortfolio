import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"


function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white"><a href='#'>FR</a></h1>
        <Button variant="ghost" size="icon" onClick={() => window.location.href = 'mailto:ranafalak18@gmail.com'}>
          <Mail className="h-6 w-6 text-white" />
        </Button>
      </div>
    </header>
  )
}

export default Header;