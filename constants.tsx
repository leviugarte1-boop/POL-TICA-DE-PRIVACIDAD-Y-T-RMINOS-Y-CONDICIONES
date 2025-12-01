import React from 'react';
import { Shield, Eye, Share2, Scale, Lock, Clock, FileWarning, RefreshCcw, Mail } from 'lucide-react';
import { PolicySection } from './types';

export const POLICY_SECTIONS: PolicySection[] = [
  {
    id: 'intro',
    title: '1. Introducción',
    icon: <Shield className="w-6 h-6 text-yellow-400" />,
    content: (
      <>
        <p className="mb-4">
          Gracias por usar PopFilmFriends. Tu privacidad y seguridad son muy importantes para nosotros. 
          Esta política describe cómo recopilamos, usamos y protegemos tus datos personales cuando usas nuestra aplicación. 
          Al registrarte o usar PopFilmFriends, aceptas estos términos.
        </p>
        <p className="mb-2 font-semibold text-white">Recopilamos dos tipos de datos:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-slate-300">
          <li>
            <span className="text-yellow-400 font-medium">Datos proporcionados directamente:</span> Nombre, correo electrónico, 
            nombre de usuario, contraseña y cualquier otra información que decidas compartir.
          </li>
          <li>
            <span className="text-yellow-400/80 font-medium">Datos automáticos:</span> Información sobre tu uso de la app 
            (películas vistas, valoraciones, listas, etc.) y detalles técnicos (tipo de dispositivo, dirección IP, etc.).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'usage',
    title: '2. Cómo Usamos tus Datos',
    icon: <Eye className="w-6 h-6 text-yellow-400" />,
    content: (
      <>
        <p className="mb-4">Usamos tus datos para:</p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-yellow-500/50 transition-colors">
            <h4 className="font-bold text-white mb-1">Operar la aplicación</h4>
            <p className="text-sm">Personalizar tu experiencia y mejorar el servicio.</p>
          </li>
          <li className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-yellow-500/50 transition-colors">
            <h4 className="font-bold text-white mb-1">Comunicarte</h4>
            <p className="text-sm">Enviarte actualizaciones importantes y notificaciones sobre tus actividades en la app.</p>
          </li>
          <li className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-yellow-500/50 transition-colors">
            <h4 className="font-bold text-white mb-1">Seguridad</h4>
            <p className="text-sm">Garantizar la protección de tu cuenta y prevenir abusos.</p>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'sharing',
    title: '3. Cómo Compartimos tus Datos',
    icon: <Share2 className="w-6 h-6 text-yellow-400" />,
    content: (
      <>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start">
            <span className="mr-2 text-yellow-500">•</span>
            <span><strong>Con proveedores de servicios:</strong> Utilizamos servicios como Google Cloud (Firebase) para almacenar tus datos.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-yellow-500">•</span>
            <span><strong>Por requisitos legales:</strong> Podemos compartir tus datos si lo exige la ley o para proteger nuestros derechos.</span>
          </li>
        </ul>
        <p className="bg-yellow-500/10 border-l-4 border-yellow-500 p-3 italic text-sm text-slate-300">
          No compartimos tus datos con terceros para marketing sin tu consentimiento.
        </p>
      </>
    ),
  },
  {
    id: 'rights',
    title: '4. Tus Derechos',
    icon: <Scale className="w-6 h-6 text-yellow-400" />,
    content: (
      <>
        <p className="mb-4">Según el GDPR, tienes los siguientes derechos:</p>
        <ul className="space-y-2 mb-4 list-disc list-inside text-slate-300">
            <li>Acceder a tus datos personales.</li>
            <li>Rectificar o borrar tus datos.</li>
            <li>Oponerte al procesamiento de tus datos.</li>
            <li>Revocar tu consentimiento en cualquier momento.</li>
        </ul>
        <p>
          Para ejercer estos derechos, contáctanos a través de la app o por correo electrónico ({' '}
          <a href="mailto:popfilmfriends@gmail.com" className="text-yellow-400 hover:underline">popfilmfriends@gmail.com</a>).
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: '5. Seguridad de tus Datos',
    icon: <Lock className="w-6 h-6 text-yellow-400" />,
    content: (
      <p>
        Tomamos medidas para proteger tu información, pero no podemos garantizar la seguridad total de las transmisiones en línea.
      </p>
    ),
  },
  {
    id: 'retention',
    title: '6. Conservación de Datos',
    icon: <Clock className="w-6 h-6 text-yellow-400" />,
    content: (
      <p>
        Conservamos tus datos mientras tu cuenta esté activa o según sea necesario para cumplir con obligaciones legales.
      </p>
    ),
  },
  {
    id: 'terms',
    title: '7. Términos de Uso',
    icon: <FileWarning className="w-6 h-6 text-yellow-400" />,
    content: (
      <>
        <p className="mb-2">Al usar PopFilmFriends, te comprometes a:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-slate-300">
          <li>No compartir contenido inapropiado ni acosar a otros usuarios.</li>
          <li>No intentar interferir con el funcionamiento de la app o acceder a información sin autorización.</li>
        </ul>
        <p className="mt-4 text-yellow-400 font-medium">
          Nos reservamos el derecho de suspender cuentas que violen estos términos.
        </p>
      </>
    ),
  },
  {
    id: 'mods',
    title: '8. Modificaciones',
    icon: <RefreshCcw className="w-6 h-6 text-yellow-400" />,
    content: (
      <p>
        Podemos actualizar esta Política de Privacidad o los Términos de Servicio. Te notificaremos si hay cambios importantes.
      </p>
    ),
  },
  {
    id: 'contact',
    title: '9. Contacto',
    icon: <Mail className="w-6 h-6 text-slate-200" />,
    content: (
      <p>
        Si tienes preguntas sobre esta política, contáctanos en{' '}
        <a href="mailto:popfilmfriends@gmail.com" className="text-yellow-400 hover:text-yellow-300 font-bold underline transition-colors">
          popfilmfriends@gmail.com
        </a>.
      </p>
    ),
  },
];