/* ============================================================
   servicesData.js — Contenido de las 4 páginas de Servicios
   ============================================================ */
const SERVICES_DATA = {

  'inmigracion': {
    title: 'Inmigración',
    heroMessage: '¿Necesitas ayuda legal y confiable para tu proceso de inmigración en EE.UU.?',
    sectionTitle: 'Sabemos que llegar a un nuevo país puede ser un reto.',
    sectionText: 'Contamos con abogados de inmigración con amplia experiencia, que entienden lo que estás viviendo. Ayudamos a familias, profesionales y emprendedores a construir un futuro sólido en los Estados Unidos, sin importar cuán complejo sea su caso.',
    practiceAreas: [
      'Defensa contra la deportación',
      'Residencia permanente (Green Card)',
      'Ciudadanía',
      'Visados de trabajo',
      'Inmigración para familias'
    ],
    guideTitle: 'Guía Completa para Inmigrar a Estados Unidos: Visas, Residencia y Ciudadanía.',
    guideIntro: 'Somos abogados de inmigración altamente cualificados y experimentados; ofrecemos asesoramiento jurídico integral y representación a particulares, familias y empresas en una amplia gama de asuntos de inmigración.',
    guideSections: [
      {
        number: '01.', title: 'Inmigración Familiar',
        blocks: [
          { title: 'Petición de Familiares Directos (I-130)', text: 'El primer paso para traer a tus padres, hijos o cónyuge a EE.UU. Los ciudadanos pueden peticionar por más categorías de familiares que los residentes permanentes. Requiere documentar la relación, demostrar capacidad económica y enviar la solicitud al USCIS.' },
          { title: 'Visa de Prometido/a (K-1)', text: 'Permite al prometido o prometida extranjera de un ciudadano estadounidense ingresar a EE.UU. para casarse en un plazo de 90 días. Tras el matrimonio, puede solicitar el ajuste de estatus a residente permanente.' },
          { title: 'Casos de Violencia Doméstica (VAWA)', text: 'Protege a cónyuges, hijos y padres víctimas de abuso por parte de ciudadanos o residentes permanentes. Permite solicitar beneficios migratorios sin depender del agresor y acceder a mecanismos de protección legal.' },
          { title: 'Matrimonio del Mismo Sexo y Migración', text: 'Los cónyuges del mismo sexo tienen los mismos derechos migratorios que las parejas heterosexuales. Los ciudadanos estadounidenses pueden patrocinar a sus cónyuges para la obtención de la residencia permanente bajo las mismas condiciones legales.' }
        ]
      },
      {
        number: '02.', title: 'Residencia Permanente (Green Card)',
        blocks: [
          { title: 'Diferentes vías para obtener la Green Card', text: 'Puede obtenerse por familia (cónyuge, hijos, padres), por empleo (H-1B, habilidades excepcionales, programa EB-5 para inversionistas), o a través de asilo o refugio.' },
          { title: 'Proceso de Ajuste de Estatus', text: 'Permite obtener la Green Card sin salir de EE.UU. si ya se tiene un estatus legal vigente y una petición aprobada por el USCIS.' },
          { title: 'Beneficios de la Residencia Permanente', text: 'Vivir y trabajar sin restricciones, patrocinar familiares, viajar libremente, acceder a beneficios como Medicaid y Medicare, y eventualmente solicitar la ciudadanía.' }
        ]
      },
      {
        number: '03.', title: 'Ciudadanía Estadounidense',
        blocks: [
          { title: 'Requisitos para la Naturalización', text: 'Generalmente se requieren 5 años como residente permanente, ser mayor de 18 años, residencia física continua, buen carácter moral, inglés básico y conocimiento de la historia y gobierno de EE.UU.' },
          { title: 'Proceso de Solicitud Formulario N-400', text: 'Reunir documentación, entrevista con oficial del USCIS, examen de ciudadanía y ceremonia de juramento de lealtad.' },
          { title: 'Beneficios de la Ciudadanía', text: 'Derecho a voto, pasaporte estadounidense, protección consular en el exterior, acceso a empleos federales y capacidad de patrocinar a más familiares.' }
        ]
      },
      {
        number: '04.', title: 'Procesos Legales Migratorios',
        blocks: [
          { title: 'Detención Migratoria', text: 'Los detenidos tienen derecho a un abogado, a una audiencia ante un juez, a comunicarse con su consulado y a recibir atención básica. En algunos casos pueden solicitar fianza para salir mientras se resuelve su caso.' },
          { title: 'Defensa de Deportación', text: 'Las defensas más comunes incluyen cancelación de remoción, solicitud de asilo, ajuste de estatus y waivers humanitarios por dificultades extremas a familiares ciudadanos o residentes.' },
          { title: 'Audiencias Migratorias', text: 'Existen audiencias magistrales (iniciales) e individuales (donde se presentan pruebas). Un abogado puede presentar mociones para cambiar la sede, reabrir órdenes anteriores o suspender temporalmente la deportación.' },
          { title: 'Cancelación de Remoción', text: 'Disponible para residentes y no residentes con años de residencia continua y lazos familiares o económicos fuertes en EE.UU. que demuestren que su deportación causaría dificultades extremas a sus familias.' }
        ]
      },
      {
        number: '05.', title: 'Temas Especiales',
        blocks: [
          { title: 'Inmigración para Emprendedores', text: 'Las visas E-2 (inversión con tratado comercial) y EB-5 (inversión significativa que genere empleos) son las principales opciones para empresarios extranjeros que desean operar en EE.UU.' },
          { title: 'Inmigración para Refugiados', text: 'Las personas que huyen de persecución pueden ser reasentadas en EE.UU. a través del ACNUR. Tras un año pueden solicitar residencia permanente y eventualmente la ciudadanía.' },
          { title: 'Impuestos para Inmigrantes', text: 'Los inmigrantes tienen obligaciones fiscales independientemente de su estatus. Quienes no tienen Seguro Social pueden usar un ITIN para presentar su declaración. Los tratados fiscales entre países también pueden afectar sus obligaciones.' }
        ]
      }
    ],
    humanitarian: {
      title: 'Procesos Humanitarios',
      cards: [
        {
          title: 'VAWA', subtitle: 'VAWA (Violence Against Women Act)',
          text: 'Para inmigrantes que han sufrido abuso físico o emocional por parte de un familiar con estatus de ciudadano o residente. Ofrece permiso de trabajo, protección contra deportación y vía hacia la Green Card.',
          benefits: [
            'Estatus de protección temporal que le permite permanecer y trabajar en el país mientras se tramita su caso.',
            'Si cumple ciertos requisitos, puede solicitar la residencia permanente (Green Card).',
            'Puede solicitar un permiso de trabajo para mantenerse a sí mismo y a su familia mientras el caso está pendiente.',
            'Protección contra la deportación mientras el caso está pendiente y, en algunos casos, incluso después de aprobarse.'
          ]
        },
        {
          title: 'U Visa', subtitle: 'U Visa',
          text: 'Para víctimas de delitos violentos que cooperaron con las autoridades. Permite trabajar legalmente por 4 años y solicitar la residencia permanente tras 3 años con el visado.',
          benefits: [
            'Permite trabajar legalmente durante un periodo inicial de cuatro años, con posibilidad de renovación.',
            'Tras tres años con el visado U, puede solicitar la residencia permanente para usted, su cónyuge e hijos solteros menores de 21 años.',
            'Protección contra la deportación mientras su solicitud está en proceso y mientras mantenga el estatus.'
          ]
        },
        {
          title: 'Parole in Place (PIP)', subtitle: 'Parole in Place (PIP)',
          text: 'Para personas que ingresaron sin autorización y tienen razones humanitarias. Ofrece protección contra deportación por 3 años, permiso de trabajo y la posibilidad de solicitar residencia sin salir del país.',
          benefits: [
            'Protección contra la deportación durante tres años.',
            'Derecho a un permiso de trabajo de hasta tres años.',
            'Solicitar un permiso de residencia permanente en un plazo de tres años sin tener que salir primero del país.'
          ]
        }
      ]
    },
    faq: [
      { q: '¿Qué es la suspensión de la deportación?', a: 'La suspensión de la deportación se produce cuando el ciudadano se enfrenta a la deportación y solicita una estancia temporal. Lo primero que hay que tener en cuenta es contratar a un abogado de inmigración profesional para que le ayude con un proceso tan complicado.' },
      { q: '¿Cómo solicitar asilo?', a: 'Las leyes para solicitar asilo cambian constantemente. Generalmente se requiere documentación de confinamiento y médica, un informe de derechos humanos del país de origen, declaraciones juradas de testigos y un escrito legal detallado que explique la ley en relación con las necesidades particulares del individuo.' },
      { q: '¿Qué es un visado de trabajador temporal y cómo puedo obtenerlo?', a: 'Los visados de trabajador temporal son para personas que entran en el país para trabajar temporalmente. El empleador debe presentar primero una petición al USCIS. Cuando se apruebe, la persona podrá solicitar un visado de trabajo.' },
      { q: '¿Cómo se solicita el Programa de reagrupación familiar en libertad condicional?', a: 'Las instrucciones las facilita el Centro Nacional de Visados (NVC). No se puede presentar una solicitud sin una invitación del NVC. Se le enviará una carta invitándole a presentar la solicitud y los pasos a seguir durante el proceso.' },
      { q: '¿Cuánto tiempo tengo para regularizar mi estatus después de recibir un Notice to Appear?', a: 'Los plazos varían según el caso y el tribunal migratorio asignado. Es fundamental contactar a un abogado de inmigración de inmediato para evaluar las opciones disponibles y preparar la defensa correspondiente.' }
    ],
    accent: '#F2B24A'
  },

  'bancarrota': {
    title: 'Bancarrota',
    heroMessage: 'Te ayudamos a encontrar tranquilidad financiera real.',
    sectionTitle: 'Llame a abogados con experiencia en bancarrotas.',
    sectionText: 'Entendemos que las deudas pueden acumularse por razones fuera de nuestro control: pérdida de empleo, enfermedades, gastos imprevistos o simplemente malas rachas financieras. Estamos aquí para ofrecerle soluciones legales claras, sin juicios, solo resultados. Lo guiamos paso a paso para que recupere su tranquilidad financiera y pueda empezar de nuevo con confianza.',
    practiceAreas: [
      'Protección contra embargos y ejecuciones',
      'Eliminación de deudas no garantizadas',
      'Planes de pago personalizados',
      'Asesoría para detener llamadas de cobradores'
    ],
    solutionsTitle: '¿Qué tipo de solución de bancarrota es adecuada para ti?',
    solutions: [
      {
        icon: '⚖️', title: 'Bancarrota por liquidación (Capítulo No. 7)',
        text: 'El Capítulo 7 le permite eliminar la mayor parte de sus deudas no garantizadas, como tarjetas de crédito, facturas médicas y préstamos personales.',
        benefits: ['Proceso rápido de aproximadamente 90 días.', 'Eliminación de deudas.', 'Nuevo comienzo financiero.', 'Ideal para personas con dificultades económicas.', 'Recuperación de estabilidad financiera.']
      },
      {
        icon: '📄', title: 'Reorganización de deudas (Capítulo No. 13)',
        text: 'El Capítulo 13 le permite reestructurar sus deudas y crear un plan de pagos basado en sus ingresos.',
        benefits: ['Plan de pagos de 3 a 5 años.', 'Conservación de activos.', 'Ideal para propietarios de vivienda.', 'Regularización de pagos atrasados.', 'Posible eliminación del saldo restante elegible.']
      },
      {
        icon: '💙', title: 'Recupere el control de su bienestar financiero y emocional',
        text: 'Si enfrenta el acoso constante de acreedores, embargos salariales o una posible ejecución hipotecaria, existen soluciones legales que pueden ayudarle a recuperar la estabilidad y comenzar una nueva etapa financiera con confianza.',
        benefits: ['Protección legal inmediata.', 'Detención de llamadas de acreedores.', 'Suspensión de embargos.', 'Prevención de ejecuciones hipotecarias.', 'Acompañamiento legal personalizado.']
      }
    ],
    faq: [
      { q: '¿Qué tipos de bancarrota existen y cuál es la adecuada para mí?', a: 'Existen principalmente dos tipos de bancarrota: el Capítulo 7 y el Capítulo 13. El Capítulo 7 generalmente cancela la mayoría de las deudas, mientras que el Capítulo 13 permite reorganizar las deudas y realizar pagos a lo largo de un período de tiempo. La opción más adecuada dependerá de sus ingresos, activos y tipo de deudas.' },
      { q: '¿Qué pasa con mi casa si me declaro en bancarrota?', a: 'La posibilidad de conservar su casa depende del tipo de bancarrota que elija y de sus circunstancias específicas. En algunos casos, puede ser posible mantener su casa si está al día con los pagos de la hipoteca o si puede ponerse al día a través de un plan de pago.' },
      { q: '¿Cuánto tiempo permanece una bancarrota en mi historial crediticio?', a: 'Una bancarrota del Capítulo 7 generalmente permanece en su informe crediticio durante 10 años, mientras que una bancarrota del Capítulo 13 permanece durante 7 años.' },
      { q: '¿Puedo declararme en bancarrota si tengo un negocio?', a: 'Sí, es posible. La bancarrota del Capítulo 7 puede liquidar los activos de su negocio para pagar a los acreedores, mientras que el Capítulo 13 puede permitirle reorganizar las deudas de su negocio y continuar operando.' },
      { q: '¿Qué pasa con mis impuestos si me declaro en bancarrota?', a: 'Las deudas tributarias no siempre pueden ser descargadas en un proceso de bancarrota. Sin embargo, existen excepciones y la posibilidad de negociar un acuerdo de pago con el IRS. Es importante consultar con nuestros abogados para determinar cómo se tratarán sus impuestos.' }
    ],
    accent: '#F2B24A'
  },

  'lesiones-personales': {
    title: 'Lesiones Personales',
    heroMessage: 'Abogados de Lesiones Personales, nos encargamos de proteger tus derechos.',
    sectionTitle: 'Peleamos por lo que te mereces.',
    sectionText: 'Muchas personas piensan que, tras un accidente, el seguro se encargará de todo. Pero pronto descubren que la realidad es muy diferente: los pagos tardan, son bajos o simplemente no llegan. Le ayudamos a determinar quién es realmente el responsable, calcular el valor real de sus pérdidas, negociar con aseguradoras y presentar el caso ante tribunales si es necesario.',
    practiceAreas: [
      'Lesiones por accidentes automovilísticos',
      'Caídas y accidentes en propiedades',
      'Lesiones laborales y accidentes en el trabajo'
    ],
    compensationTitle: '¿Qué tipo de compensación puedo recibir?',
    compensation: [
      { number: '01', title: 'Gastos médicos', subtitle: 'Emergencias, cirugías y recuperación.', items: ['Emergencias médicas', 'Hospitalización', 'Cirugías', 'Medicamentos', 'Terapias físicas', 'Tratamientos futuros'] },
      { number: '02', title: 'Pérdida de ingresos', subtitle: 'Protección de su estabilidad financiera.', items: ['Salarios perdidos', 'Incapacidad temporal', 'Incapacidad permanente', 'Pérdida de ingresos futuros', 'Reducción de capacidad laboral'] },
      { number: '03', title: 'Dolor y daños', subtitle: 'Compensación más allá de las facturas.', items: ['Dolor físico', 'Estrés emocional', 'Ansiedad', 'Pérdida de calidad de vida', 'Daños materiales', 'Reparación de vehículos'] }
    ],
    closing: {
      title: '¿Cómo logramos resultados?',
      text: 'Evaluamos las pruebas, presionamos a las aseguradoras y llevamos el caso a tribunales cuando es necesario.',
      message: 'Nuestra prioridad es que reciba el apoyo económico que necesita para recuperarse plenamente y reconstruir su vida con tranquilidad.'
    },
    faq: [
      { q: '¿Por qué necesito un abogado de lesiones personales después de un accidente, aunque tenga seguro?', a: 'Aunque tenga seguro, las compañías aseguradoras suelen buscar minimizar los pagos. Un abogado protege sus derechos, negocia con las aseguradoras y trabaja para obtener la máxima compensación posible por gastos médicos, salarios perdidos, dolor y sufrimiento, y otros daños relacionados con el accidente.' },
      { q: '¿Qué tipo de compensación puedo obtener por mis lesiones?', a: 'La compensación puede incluir gastos médicos actuales y futuros, pérdida de ingresos, dolor y sufrimiento, discapacidad, desfiguración y otros daños. Uno de nuestros abogados evaluará tu caso y te ayudará a determinar la compensación total a la que tienes derecho.' },
      { q: '¿Cuánto tiempo tengo para presentar una demanda por lesiones personales en Florida?', a: 'Florida tiene un estatuto de limitaciones, que establece un plazo máximo para presentar una demanda. Es crucial actuar rápidamente para proteger tus derechos. Nuestros abogados te informarán sobre los plazos específicos que aplican a tu caso.' },
      { q: '¿Qué pasa si la compañía de seguros no quiere pagar mi reclamo?', a: 'Si la compañía de seguros se niega a ofrecer una compensación justa, nuestros abogados están preparados para negociar agresivamente en tu nombre. Si es necesario, iniciaremos un litigio para hacer valer tus derechos en un tribunal.' },
      { q: '¿Qué debo hacer inmediatamente después de sufrir un accidente?', a: 'Es crucial documentar el accidente de inmediato. Tome fotografías de la escena, los daños y sus lesiones. Busque atención médica y guarde todas las facturas. Además, contáctenos lo antes posible para discutir sus opciones legales.' }
    ],
    accent: '#F2B24A'
  },

  'bienes-raices': {
    title: 'Bienes Raíces',
    heroMessage: 'Proteja sus inversiones inmobiliarias con abogados de bienes raíces.',
    sectionTitle: 'Protege tu patrimonio con asesoría confiable.',
    sectionText: 'Si estás pensando en comprar, vender o refinanciar una propiedad, contar con el respaldo de un abogado en bienes raíces es fundamental para asegurar que su inversión esté legalmente protegida. En Héctor Hernández & Associates, P.A., ponemos a tu disposición más de 20 años de experiencia en transacciones inmobiliarias exitosas tanto comerciales como residenciales. Nuestro equipo bilingüe está listo para asistirlo en inglés o español.',
    practiceAreas: [
      'Asesoría en transacciones de compra y venta',
      'Refinanciamiento y revisión de títulos',
      'Representación legal en cierres inmobiliarios'
    ],
    accordionTitle: '¿Por qué necesita un abogado de bienes raíces?',
    accordionPanels: [
      {
        title: 'La importancia de contar con representación legal en bienes raíces',
        text: 'Comprar, vender o refinanciar un inmueble es una inversión financiera importante. Vale la pena proteger sus intereses con un abogado inmobiliario experimentado a su lado. Nuestros abogados de bienes raíces tienen el conocimiento legal y la experiencia que usted necesita para asegurarse de obtener todo lo que espera de su transacción de cierre. Para obtener más información, llámenos ahora o contáctenos en línea para programar una consulta gratuita.',
        open: true
      },
      {
        title: '¿Quién garantiza sus intereses en una transacción inmobiliaria?',
        text: 'No sea la única persona en la transacción sin representación legal experimentada. Si usted está comprando, vendiendo o buscando refinanciar bienes raíces residenciales o comerciales, necesita a alguien para proteger sus intereses. Es probable que las otras partes involucradas no estén velando por usted: a su agente inmobiliario sólo le interesa cerrar la venta y a su prestamista hipotecario, sus beneficios. Nuestros abogados de bienes raíces sí lo harán.',
        open: false
      }
    ],
    faq: [
      { q: '¿Qué particularidades legales tiene el mercado inmobiliario del sur de la Florida que debo conocer?', a: 'El mercado del sur de la Florida presenta características únicas, como regulaciones específicas sobre condominios, asociaciones de propietarios y propiedades frente al mar. Nuestro equipo legal está altamente familiarizado con estas particularidades y puede asesorar en cada paso del proceso.' },
      { q: '¿Cómo puedo asegurarme de que el título de propiedad de una vivienda en Florida esté limpio?', a: 'Para garantizar que el título esté libre de gravámenes, embargos o disputas, es fundamental realizar una búsqueda de títulos exhaustiva. Nuestros abogados se encargarán de este proceso y le proporcionarán un informe detallado sobre el estado del título.' },
      { q: '¿Qué sucede si encuentro problemas con la propiedad después de la compra en Florida?', a: 'Si descubre defectos ocultos, problemas de construcción o incumplimiento de las cláusulas del contrato después de la compra, nuestros abogados pueden ayudarlo a presentar una demanda o iniciar un proceso de mediación para resolver el conflicto.' },
      { q: '¿Qué impuestos debo considerar al comprar una propiedad en Florida?', a: 'Florida tiene un impuesto de transferencia de propiedad que debe pagarse al momento de la venta. Además, es importante considerar los impuestos a la propiedad, los impuestos de asociación de propietarios (si aplica) y otros impuestos relacionados.' },
      { q: '¿Cómo puedo proteger mi inversión en una propiedad de alquiler en Florida?', a: 'Es fundamental contar con un contrato de arrendamiento sólido y cumplir con todas las leyes locales y estatales relacionadas con el alquiler. Nuestros abogados pueden ayudarlo a redactar contratos, resolver disputas con inquilinos y manejar cualquier problema legal relacionado.' }
    ],
    accent: '#F2B24A'
  }
};
