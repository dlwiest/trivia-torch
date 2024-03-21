import { FireIcon } from '@heroicons/react/24/outline';

const Footer = () => (
    <div className="w-full px-2 sm:px-0 pb-2 pt-8 sm:pb-4 flex justify-center">
        <footer className="w-full max-w-4xl px-2 sm:px-0 text-zinc-500">
            <a href="/" className="flex items-center text-zinc-500 mb-1 -ml-1">
                <FireIcon className="w-7 h-7" />
                <span className="text-xl font-medium">TriviaTorch</span>
            </a>
            <div className="flex gap-1 items-center">
                <span className="text-xs">© 2024 Derrick Wiest</span>
                <span className="text-sm">|</span>
                <span className="text-xs hover:font-medium"><a href="/privacy">Privacy Policy</a></span>
                <span className="text-sm">|</span>
                <span className="text-xs hover:font-medium"><a href="mailto:me@dlwiest.com">Contact Me</a></span>
            </div>
        </footer>
    </div>
);

export default Footer;