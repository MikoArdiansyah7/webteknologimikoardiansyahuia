export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-slate-200 bg-white text-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <h3 className="text-xl font-bold text-slate-900">MyPortfolio</h3>
            </div>
            <p className="text-sm text-slate-600">
              Web dibuat untuk tujuan UTS oleh mahasiswa Teknik Informatika
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Info Mahasiswa</h4>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Miko Ardiansyah</p>
              <p>NIM: 3420230005</p>
              <p>Teknik Informatika - TFUIA</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-slate-200 pt-6 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} All Rights Reserved. Made with ❤️ for UTS
          </p>
        </div>
      </div>
    </footer>
  );
}