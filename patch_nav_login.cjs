const fs = require('fs');

let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Ensure Lock icon is imported from lucide-react
if (!content.includes('Lock,')) {
  content = content.replace(/import \{ ([^}]+) \} from 'lucide-react';/, "import { $1, Lock } from 'lucide-react';");
}
if (!content.includes('User,')) {
  content = content.replace(/import \{ ([^}]+) \} from 'lucide-react';/, "import { $1, User } from 'lucide-react';");
}

const desktopInjection = `            {/* Login / Admin Button */}
            <button
              onClick={handleAdminClick}
              className="inline-flex items-center gap-1.5 text-[13px] font-bold px-3.5 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-md group cursor-pointer"
              title="Admin Login"
            >
              <User className="w-3.5 h-3.5" />
              <span>Login</span>
            </button>
            <a`;

content = content.replace(/<a\s+href=\{\(agencyData\.whatsappNumber/, desktopInjection);

const mobileInjection = `
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleAdminClick(e);
              }}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-xl bg-slate-900 text-white shadow-md"
            >
              <User className="w-4 h-4" />
              <span>Admin Login</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
`;

content = content.replace(/<button\s+onClick=\{\(\) => \{\s+setMobileMenuOpen\(false\);\s+onOpenQuote\(\);\s+\}\}/, mobileInjection);

fs.writeFileSync('src/components/Navbar.tsx', content);
