import React from 'react';

function Informacion() {
  return (
    <section className="bg-pink-200 p-8 rounded-lg shadow-lg ">
      <div className='flex justify-center '>
      <h1 className="text-2xl font-bold text-black mb-4">INFORMACIÓN</h1>
      </div>
      <div className='flex justify-center gap-7'>
      <div className="text-center w-80">        
        <p className="text-black">( +52 ) 1234456677</p>
        <p className="text-black">estetica@gmail.com</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            {/* Facebook Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            {/* Instagram Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            {/* WhatsApp Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>
          </a>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="-2 -2 24 24"><path fill="currentColor" d="M6 2H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM3.01 8v9.965H5V13a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4.965h6.013V8H15c-.768 0-1.47-.289-2-.764A3 3 0 0 1 11 8H9c-.768 0-1.47-.289-2-.764A3 3 0 0 1 5 8zm-2-.754A3 3 0 0 1 0 5V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2c0 .882-.38 1.676-.987 2.225v10.74a2 2 0 0 1-2 2h-7.64A2 2 0 0 1 9 20H7a2 2 0 0 1-.373-.035H3.011a2 2 0 0 1-2-2V7.245zM9 17.966V13H7v4.965h2zM12 2H8v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm2 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm0 9h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1"/></svg>
          <div>
            <h3 className="text-lg font-semibold text-black">Horario de atención</h3>
            <p className="text-pink-500">8:00 AM - 12:00 PM</p>
          </div>
        </div>
      </div>
      </div>

      <div className="mt-8 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.1189269201012!2d-93.12319772616095!3d16.75299199951788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8f1531681d5%3A0x40d95c198f16ec81!2sHair%20Studio!5e0!3m2!1ses-419!2smx!4v1729913452166!5m2!1ses-419!2smx"
          className="w-full h-64 rounded-lg shadow-lg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Informacion;