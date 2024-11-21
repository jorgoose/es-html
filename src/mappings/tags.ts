export const tagMappings: Record<string, string> = {
    // Full English words translated to Spanish (with accent marks)
    'título': 'title',
    'cuerpo': 'body',
    'cabecera': 'head',          // 'head' is better translated as 'cabecera' in HTML context
    'lienzo': 'canvas',
    'artículo': 'article',
    'sección': 'section',
    'pie': 'footer',
    'formulario': 'form',
    'botón': 'button',
    'etiqueta': 'label',
    'dirección': 'address',
    'aparte': 'aside',
    'figura': 'figure',
    'piefigura': 'figcaption',
    'encabezado': 'header',
    'grupoencabezado': 'hgroup',
    'mapa': 'map',
    'marca': 'mark',
    'medidor': 'meter',
    'objeto': 'object',
    'parámetro': 'param',
    'progreso': 'progress',
    'salida': 'output',
    'resumen': 'summary',
    'estilo': 'style',
    'guion': 'script',
    'tiempo': 'time',
    'enlace': 'link',
    'imagen': 'picture',        // img maps to img equivalent in Spanish -- imagen is a more general term and maps to picture
    'pequeño': 'small',
    'menú': 'menu',
    'seleccionar': 'select',
    'grupoopciones': 'optgroup',
    'opción': 'option',
    'tabla': 'table',
    'subtítulo': 'caption',
    'columna': 'col',
    'grupocolumnas': 'colgroup',
    'entrada': 'input',
    'áreatexto': 'textarea',
    'cita': 'cite',
    'código': 'code',
    'datos': 'data',
    'detalles': 'details',
    'diálogo': 'dialog',
    'plantilla': 'template',
    'leyenda': 'legend',
    'fuente': 'source',

    // Heading tags mapped to t1 - t6
    'e1': 'h1',
    'e2': 'h2',
    'e3': 'h3',
    'e4': 'h4',
    'e5': 'h5',
    'e6': 'h6',

    // Abbreviations adapted to Spanish (for tags that are abbreviations in English)
    'el': 'li',      // 'elemento de lista' -> 'li' (list item)
    'lo': 'ol',      // 'lista ordenada' -> 'ol' (ordered list)
    'ld': 'ul',      // 'lista desordenada' -> 'ul' (unordered list)
    'ct': 'td',      // 'celda de tabla' -> 'td' (table data)
    'et': 'th',      // 'encabezado de tabla' -> 'th' (table header)
    'ft': 'tr',      // 'fila de tabla' -> 'tr' (table row)

    // Tags that remain unchanged in Spanish (common HTML tags):
    'a': 'a',
    'img': 'img',
    'div': 'div',
    'span': 'span',
    'p': 'p',
    'br': 'br',
    'hr': 'hr',
    'b': 'b',
    'i': 'i',
    'u': 'u',
    's': 's',
    'del': 'del',
    'ins': 'ins',
    'kbd': 'kbd',
    'var': 'var',
    'pre': 'pre',
    'samp': 'samp',
    'meta': 'meta',
    'noscript': 'noscript',
    'iframe': 'iframe',
    'embed': 'embed',
    'video': 'video',
    'audio': 'audio',
    'track': 'track',
    'svg': 'svg',
    'math': 'math',
    'blockquote': 'blockquote',
    'q': 'q',
    'abbr': 'abbr',
    'area': 'area',
    'base': 'base',
    'bdi': 'bdi',
    'bdo': 'bdo',
    'datalist': 'datalist',
    'dd': 'dd',
    'dfn': 'dfn',
    'dl': 'dl',
    'dt': 'dt',
    'fieldset': 'fieldset',
    'nav': 'nav',
    'wbr': 'wbr',
    'tbody': 'tbody',
    'tfoot': 'tfoot',
    'thead': 'thead'
};
