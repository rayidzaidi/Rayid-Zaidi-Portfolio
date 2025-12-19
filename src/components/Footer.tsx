export default function Footer() {
    return (
        <footer className="w-full py-8 text-center text-sm text-gray-500 border-t border-gray-900/50 mt-20">
            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </footer>
    );
}
