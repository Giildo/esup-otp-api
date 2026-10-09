const messages = {
  fr: {
    'or': 'ou',
    'You have no registered factors': 'Vous n’avez aucun facteur enregistré',
    'You refused the request': 'Vous avez refusé la demande.',
    'Error': 'Erreur',
    'Authenticate by physical factor (WebAuthn)': 'S’authentifier par facteur physique (WebAuthn)',
    'Open the Esup Auth application on your mobile %TRANSPORT% to validate the authentication.': 'Ouvrez l’application Esup Auth sur votre portable %TRANSPORT% pour valider l’authentification.',
    'Please enter a code:': 'Merci de renseigner un code :',
    'Try another method': 'Essayez une autre méthode',
    'Error, please try again later': 'Erreur, veuillez réessayer ultérieurement',
    'The physical factor you named \'%NAME%\'': 'Le facteur physique que vous avez nommé \'%NAME%\'',
    'You have not given this factor a name. Go to your settings to give it a name.': 'Vous n’avez pas donné de nom à ce facteur. Allez dans vos paramètres pour donner un nom.',
    'unnamed key': 'clé sans nom',
    'A code has been sent to %TRANSPORT%,<br>enter it here to log in.': 'Un code a été envoyé au %TRANSPORT%,<br>saisissez le ici pour vous connecter.',
    'A code has been sent to your email %TRANSPORT%,<br>enter it here to log in.': 'Un code a été envoyé sur votre mél %TRANSPORT%,<br>saisissez le ici pour vous connecter.',
    'Authenticate with your multi-service card on an NFC-compatible smartphone': 'S’authentifier avec votre carte multi-service sur un Smartphone compatible NFC',
    'Enter the code shown on your code grid': 'Saisir le code indiqué sur votre grille de code',
    'Receive a code by mail on %TRANSPORT%': 'Recevoir un code par mél sur %TRANSPORT%',
    'Receive a code by SMS on %TRANSPORT%': 'Recevoir un code par SMS sur %TRANSPORT%',
    'Authentication failed': 'L’authentification a échoué',
    'Authenticate via the Esup Auth application on your %TRANSPORT%': 'S’authentifier via l’application Esup Auth sur votre %TRANSPORT%',
    'Enter the 6-digit code': 'Saisissez le code de 6 chiffres',
    'Enter the code shown in the cell at the intersection of <strong>row %LINE%</strong> and <strong>column %COLUMN%</strong> of your passcode grid.': 'Veuillez saisir le code indiqué au croisement de la <strong>ligne %LINE%</strong> et de la <strong>colonne %COLUMN%</strong> de votre grille de codes.',
    'Enter a TOTP code': 'Saisir un code TOTP',
    'Enter a single-use backup code': 'Saisir un code de secours à usage unique',
    'Other connection method': 'Autre méthode de connexion',
    'Please try again.': 'Veuillez réessayer.',
    'Please enter the code displayed on your TOTP application:': 'Merci de renseigner le code affiché sur votre application TOTP :',
    'Please enter a single-use backup code:': 'Merci de renseigner un code de secours à usage unique:',
    'Please wait': 'Veuillez patienter',
    'Request a new notification': 'Demander une nouvelle notification',
    'Show the code': 'Afficher le code',
    'Use one of the following methods to log in': 'Utilisez une des méthodes suivantes pour vous connecter',
    'Receive a new code': 'Recevoir un nouveau code',

    'esupAuthWebview_nfc_html': /*html*/`
            <a id="esupnfc_deeplink" href="%DEEPLINK%">Cliquez ici</a> pour réessayer de scanner votre carte (étudiante ou professionnelle) en NFC.
        `,
    'nfc_html': /*html*/`
            <ol>
                <li>Télécharger la dernière version de l’application Esup-Auth (pour <a href="%ANDROID_APP_URL%">Android</a> ou <a href="%IOS_APP_URL%">IOS</a>) <b>si ce n’est pas déjà fait</b>.</li>
                ${/iPhone|iPad|iPod|Android|Esup Auth/i.test(navigator.userAgent) ?
      `<li><a id="esupnfc_deeplink" href="%DEEPLINK%">Cliquer ici</a>.</li>` :
      `
                        <li>Lancer l’application Esup-Auth.</li>
                        <li>
                            Configurer l’authentification NFC sur l’application <b>si ce n’est pas déjà fait</b>.
                            <ol style="list-style-type: circle;">
                                <li>Pour cela, sur l’application, cliquer sur le symbole "+" en bas à droite de l’écran.</li>
                                <li>Puis sélectionner <span class="inline-block">"Scanner QR code".</span></li>
                                <li>
                                    Scanner le QR code ci-dessous :
                                    <img class="esupnfc_qrcode" alt="QR Code" title="à scanner via l’application Esup-Auth" aria-describedby="manual_input_instructions" src="%QRCODE_SRC%" role="img" />
                                </li>
                            </ol>
                            <div id="manual_input_instructions">En cas de difficultés pour scanner le QR code, sélectionner "Saisie manuelle", et renseigner l’adresse <span class="inline-block">%API_URL%</span></div>
                        </li>
                    `
    }
                <li>Sur l’application, cliquer sur <span class="inline-block">"%ETABLISSEMENT%".</span></li>
                <li>Suivre les instructions à l’écran.</li>
            </ol>
        `,
    'no_choices_html': /*html*/`
            Veuillez activer l’<a target="_blank">authentification renforcée</a> pour pouvoir accéder à ce service.
        `,
    'activateMoreMethods_html': /*html*/`
            <p>Pour une connexion plus simple et sécurisée, activez une méthode moderne :</p>
            <ul>
                <li>Les notifications via l’application mobile ;</li>
                <li>Un facteur physique (WebAuthn), comme un Smartphone, Windows Hello, TouchID, etc</li>
            </ul>
            <p>Pour cela, accédez à vos paramètres d’<a target="_blank">authentification renforcée</a> puis activez la méthode souhaitée.</p>
        `,
    'webauthn_on_webview': /*html*/`
            <p>
                <p>
                    Le facteur physique Webauthn n’est pas supporté par cette application.<br />
                    Veuillez utiliser une autre méthode de connexion.
                </p>
                <p>
                    Si besoin, vous pouvez accéder à %OTP_MANAGER_URL% depuis votre navigateur pour activer d’autres méthodes.<br />
                    Puis, réessayez de vous connecter à cette application en utilisant une de ces méthodes.
                </p>
            </p>
        `,
  },
  en: {
    'esupAuthWebview_nfc_html': /*html*/`
            <a id="esupnfc_deeplink" href="%DEEPLINK%">Cliquez ici</a> pour réessayer de scanner votre carte (étudiante ou professionnelle) en NFC.
        `,
    'nfc_html': /*html*/`
            <ol>
                <li>Download the latest version of the Esup-Auth app (for <a href="%ANDROID_APP_URL%">Android</a> or <a href="%IOS_APP_URL%">IOS</a>) if you haven't already done so.</li>
                ${/iPhone|iPad|iPod|Android|Esup Auth/i.test(navigator.userAgent) ?
      `<li><a id="esupnfc_deeplink" href="%DEEPLINK%">Click here</a>.</li>` :
      `
                        <li>Launch the Esup-Auth app.</li>
                        <li>
                            Configure NFC authentication on the app if you haven't already done so.
                            <ol style="list-style-type: circle;">
                                <li>To do this, click on the "+" symbol at the bottom right of the screen on the app.</li>
                                <li>Then select <span class="inline-block">"Scanner QR code".</span></li>
                                <li>
                                    Scan the QR code below:
                                    <img class="esupnfc_qrcode" alt="QR code" title="to scan using Esup-Auth app" aria-describedby="manual_input_instructions" src="%QRCODE_SRC%" role="img" />
                                </li>
                            </ol>
                            <div id="manual_input_instructions">If you have trouble scanning the QR code, select <span lang="fr">Saisie manuelle"</span> and enter the address <span class="inline-block">%API_URL%</span></div>
                        </li>
                    `
    } 
                <li>On the app, click on <span class="inline-block">"%ETABLISSEMENT%".</span></li>
                <li>Follow the on-screen instructions.</li>
            </ol>
        `,
    'no_choices_html': /*html*/`
            To access this service, activate <a target="_blank">multi-factor authentication</a>.
        `,
    'activateMoreMethods_html': /*html*/`
            <p>For a faster and more secure login, enable one of the following modern authentication methods:</p>
            <ul>
                <li>Notifications via the mobile app;</li>
                <li>A webAuthn hardware authentication factor (Smartphone, Windows Hello, TouchID, etc).</li>
            </ul>
            <p>To do this, go to your <a target="_blank">multi-factor authentication</a> settings and enable the method you want.</p>
        `,
    'webauthn_on_webview': /*html*/`
            <p>
                <p>
                    The hardware authenticator (Webauthn) is not available in this app.<br />
                    Please use another method.
                </p>
                <p>
                    If needed, go to %OTP_MANAGER_URL% from your browser to enable other methods,<br />
                    then try again to login to this app using one of those methods.
                </p>
            </p>
        `,
  },
}

/***
 * INTERNATIONALISATION
 */

/**
 * Returns the list of supported languages.
 * The list is built from the navigator.languages array, with 'en' added as a fallback.
 *
 * @type {string[]} - An array of supported language codes.
 */
const languages = Array.from([...navigator.languages, 'en'].reduce((acc, lang) => {
  if (lang in messages) {
    acc.add(lang)
    return acc
  }

  const langWithoutRegion = lang.split('-')[0]
  if (langWithoutRegion in messages) acc.add(langWithoutRegion)
  return acc
}, new Set()))

/**
 * Translates a key into the user's preferred language, with optional arguments for string replacement.
 *
 * @param {string} key - The key to translate.
 * @param {Object.<string, string>} [args={}] - Optional arguments for string replacement in the translation.
 *
 * @returns {string} - The translated string, or the key itself if no translation is found.
 */
function translate (key, args = {}) {
  let translation = key
  for (const lang of languages) {
    const translated = messages[lang]?.[key]
    if (translated) {
      translation = translated
      break
    }
    if (lang === 'en') break // "en" does not need translation (except for "xxx_html" keys which must have been handled above)
  }

  for (const [placeholder, val] of Object.entries(args)) {
    translation = translation.replace(placeholder, val)
  }
  return translation
}

/**
 * Shorthand function for translating a string with optional arguments.
 *
 * @param {string} key - The key to translate.
 * @param {Object.<string, string>} [args={}] - Optional arguments for string replacement in the translation.
 *
 * @returns {string} - The translated string, or the key itself if no translation is found.
 */
function _ (key, args = {}) {
  return translate(key, args)
}

/**
 * Converts an array of strings into a human-readable list with "or" before the last item.
 *
 * @param {string[]} spans - The array of strings to convert.
 *
 * @returns {string} - A human-readable string representation of the list.
 */
function orListToString (spans) {
  if (spans.length === 1) return spans[0]
  if (spans.length === 2) return spans.join(' ' + _('or') + ' ')
  return spans.slice(0, -1).join(', ') + ', ' + _('or') + ' ' + spans.slice(-1)
}

/**
 * Init the HTML template for the login page.
 *
 * @returns {void}
 *
 * @TODO Delete no used parts for a11y
 */
function addHtmlTemplate () {
  document.querySelector('form')?.insertAdjacentHTML(
    'beforeend',
    `<div class="main1">
        <div id="no-choices" class="d-none">${_('no_choices_html')}</div>

        <div id="choices">
            <h2>${_('Use one of the following methods to log in')}</h2>
            <div id="activateMoreMethods" class="d-none">${_('activateMoreMethods_html')}</div>

            <ul id="methodChoices">
                <li>${_('Please wait')}</li>
            </ul>
        </div>
               
        <div id="code" class="d-none">
          <div>
            <p>
              <label for="token">
                <div id="code_label"></div>
                <input type="text" id="token" class="obfuscated" required
                minlength="6" maxlength="6" pattern="[0-9]{6}" inputmode="numeric"
                placeholder="${_('Enter the 6-digit code')}"
                accesskey="m" autocomplete="one-time-code" name="token" value="">
              </label>
            </p>
            <p>
              <label id="toggle_code_visibility-LABEL" for="toggle_code_visibility">
                ${_('Show the code')}
                <input id="toggle_code_visibility" type="checkbox"
                  onchange="document.getElementById('token').classList.toggle('obfuscated', !this.checked)" />
              </label>
            </p>

            <ul>
                <li id="retry"><a></a></li>
                <li id="back_to_choices"><a>${_('Other connection method')}</a></li>
            </ul>
          </div>
          <img alt="" id="page_icon">
        </div>
      </div>
    `,
  )
}

/**
 * Like "element.onclick = func", but makes it accessible from the keyboard
 * @param {String|Element} element an HTML element, or a selector to get it
 */
function onclick (element, func) {
  if (typeof element === 'string' || element instanceof String) {
    element = document.querySelector(element)
  }

  element.onclick = func
  element.onkeydown = function (event) {
    if (event.key === 'Enter') {
      element.click()
    }
  }
  element.tabIndex = 0
}

/**
 * Returns a promise that resolves after the next two animation frames, allowing for DOM updates to be rendered before proceeding.
 *
 * @returns {Promise<void>} A promise that resolves after the next two animation frames.
 */
const afterNextPaint = () => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))

/***
 * BASE64URL HELPER FUNCTIONS
 **/
/**
 * Converts a Base64URL-encoded string into an ArrayBuffer.
 *
 * Handles standard Base64 conversion, padding calculation, and byte extraction.
 * Useful for binary WebAuthn credentials (e.g. allowCredentials, excludeCredentials).
 *
 * @param {string} base64URLString - The Base64URL encoded input string.
 * @returns {ArrayBuffer} The decoded binary data as an ArrayBuffer.
 */
const base64URLStringToBuffer = (base64URLString) => {
  // Convert from Base64URL to Base64
  const base64 = base64URLString.replaceAll('-', '+').replaceAll('_', '/')
  /**
   * Pad with '=' until it's a multiple of four
   * (4 - (85 % 4 = 1) = 3) % 4 = 3 padding
   * (4 - (86 % 4 = 2) = 2) % 4 = 2 padding
   * (4 - (87 % 4 = 3) = 1) % 4 = 1 padding
   * (4 - (88 % 4 = 0) = 4) % 4 = 0 padding
   */
  const padLength = (4 - (base64.length % 4)) % 4
  const padded = base64.padEnd(base64.length + padLength, '=')

  // Convert to a binary string
  const binary = atob(padded)

  // Convert binary string to buffer
  const buffer = new ArrayBuffer(binary.length)
  const bytes = new Uint8Array(buffer)

  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.codePointAt(i)
  }

  return buffer
}

/**
 * Converts an ArrayBuffer into a Base64URL-encoded string.
 *
 * Encodes binary data into Base64 and strips standard padding and URL-unsafe characters.
 * Useful for serializing WebAuthn credential responses to JSON.
 *
 * @see https://github.com/MasterKale/SimpleWebAuthn/blob/master/packages/browser/src/helpers/bufferToBase64URLString.ts
 *
 * @param {ArrayBuffer} buffer - The binary buffer to encode.
 * @returns {string} The resulting Base64URL encoded string.
 */
const bufferToBase64URLString = (buffer) => {
  const bytes = new Uint8Array(buffer)
  let str = ''

  for (const charCode of bytes) {
    str += String.fromCodePoint(charCode)
  }

  const base64String = btoa(str)

  return base64String.replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '')
}


/**
 * Automatically submits the authentication form if the input passes HTML5 validation.
 *
 * Marks the form as `inert` upon submission to freeze user interactions and prevent
 * duplicate submissions (e.g. password managers appending an automatic Enter key
 * concurrently with a manual Enter press, which invalidates single-use TOTP codes).
 *
 * @param {HTMLInputElement} input - The OTP/token input element to validate.
 *
 * @returns {void}
 */
const autoSubmitIfValid = (input) => {
  if (!input.validationMessage) {
    const form = document.getElementById('fm1')
    form.submit()
    form.inert = true
  }
}

/**
 * Removes any existing error messages from the DOM.
 *
 * @returns {void}
 */
const clearErrors = () => {
  document.querySelector('#errors')?.remove()
}

const setGlobalClassForMethod = (() => {
  let previousClass
  return (method) => {
    const elt = document.getElementById('fm1').parentElement
    if (previousClass) elt.classList.remove(previousClass)
    elt.classList.add(method)
    previousClass = method
  }
})()

function show (idToShow, method) {
  ['no-choices', 'choices', 'code'].forEach(function (id) {
    document.querySelector('#' + id)?.classList.toggle('d-none', id !== idToShow)
  })
  // focus on first focusable element
  let elt = document.getElementById(idToShow).querySelector('button, [href], input, select, [tabindex]')
  if (elt) elt.focus()

  switch (idToShow) {
    case 'choices':
      setGlobalClassForMethod('show-choices')
      mayDisconnectSocket()
      break
    case 'no-choices':
      setGlobalClassForMethod('no-choices')
      break
    default:
      setGlobalClassForMethod('method-' + method)
      break
  }
}

async function showMethod (params, chosen) {
  show('code', chosen.method)

  for (const elt of document.querySelectorAll('#token, #submitCode, #toggle_code_visibility-LABEL')) {
    elt.classList.toggle('d-none', chosen.opts.hideSubmitCode === true)
  }
  document.querySelector('#token')?.focus()
  updateCodeLabel(chosen.opts.codeLabel && await chosen.opts.codeLabel(params, chosen) || _('Please enter a code:'))

  const pageIcon = document.querySelector('#page_icon')
  if (pageIcon) {
    pageIcon.src = params.apiUrl + 'public/images/page-' + (chosen.opts.overrideIcon || chosen.transport || chosen.method) + '.svg'
  }

  document.querySelector('#back_to_choices')?.classList.toggle('d-none', document.querySelectorAll('#methodChoices > li').length <= 1)

  document.querySelector('#retry')?.classList.toggle('d-none', !(chosen.transport || chosen.opts.retryText))
  const retryElement = document.querySelector('#retry a')
  retryElement.text = chosen.opts.retryText || _('Receive a new code')
  onclick(retryElement, async () => {
    clearErrors()
    await displayMethod(params, chosen, {})
  })

  return false
}

function updateCodeLabel (codeLabel) {
  const codeLabelElt = document.querySelector('#code_label')
  if (codeLabelElt) codeLabelElt.innerHTML = codeLabel
}

async function initializeWebauthn (params, _chosen, _opts) {

  function displayTitle ({ title, desc = '' }) {
    updateCodeLabel('<h2><b>' + 'WebAuthn' + '</b><br>' + title + '</h2>' + desc)
  }

  // PublicKeyCredential can not be serialized
  // because it contains some ArrayBuffers, which
  // can not be serialized.
  // This just translates the buffer to its' 'safe'
  // version.
  // This is only for the AUTHENTICATION part
  // It is slightly different from what is
  // used for registration
  const SerializePKC = PKC => {
    return {
      id: PKC.id,
      type: PKC.type,
      rawId: bufferToBase64URLString(PKC.rawId),
      response: {
        authenticatorData: bufferToBase64URLString(PKC.response.authenticatorData),
        clientDataJSON: bufferToBase64URLString(PKC.response.clientDataJSON),
        signature: bufferToBase64URLString(PKC.response.signature),
        userHandle: PKC.response.userHandle ? bufferToBase64URLString(PKC.response.userHandle) : undefined,
      },
    }
  }


  const webauthnData = await (fetch(`${params.apiUrl}users/${params.uid}/methods/webauthn/secret/${params.userHash}`, { method: 'POST' })
      .then(res => res.json())
  )

  // afficher le titre
  if (webauthnData.auths.length === 0) {
    displayTitle({
      title: _('You have no registered factors'),
      desc: _('Try another method'),
    })
  } else {
    let spans = webauthnData.auths.map(function authToSpan (authenticator) {
      const name = authenticator.name || _('unnamed key')
      const title = authenticator.name ?
        _('The physical factor you named \'%NAME%\'', { '%NAME%': authenticator.name }) :
        _('You have not given this factor a name. Go to your settings to give it a name.')
      return `<span class="factor" title="${title}">${name}</span>`
    })
    displayTitle({
      title: _('Utilisez %FACTORS% pour vous authentifier.', { '%FACTORS%': orListToString(spans) }),
    })
  }

  const publicKeyCredentialRequestOptions = {
    challenge: base64URLStringToBuffer(webauthnData.nonce),
    rp: webauthnData.rp,
    rpId: webauthnData.rp.id,
    pubKeyCredParams: webauthnData.pubKeyTypes,
    // user has 3 * 60 seconds to register
    timeout: 3 * 60000,
    // leaks data about the user if in direct mode.
    attestation: 'none',
    // Use registered credentials
    allowCredentials: webauthnData.auths.map(a => ({
      id: base64URLStringToBuffer(a.credentialID),
      type: 'public-key',
    })),
  }

  await afterNextPaint()

  function displayWebauthnOnWebViewTitle () {
    displayTitle({
      title: _('Authentication failed'),
      desc: _('webauthn_on_webview', { '%OTP_MANAGER_URL%': params.otpManagerUrl }),
    })
  }

  /** MicrosoftOffice on Android/IOS/MacOS */
  const isMicrosoftOffice = window.navigator.userAgent.endsWith('PKeyAuth/1.0')
  const isWebView = (window.webkit || {}).messageHandlers || window.android || isMicrosoftOffice

  // On Android, there is no error, but nothing happens.
  if (isWebView && window.navigator.userAgent.includes('Android')) {
    displayWebauthnOnWebViewTitle()
  }

  let assertion
  try {
    // authenticate
    assertion = await navigator.credentials.get({
      publicKey: publicKeyCredentialRequestOptions,
    })
  } catch (e) {
    if (e.name === 'NotAllowedError') {
      if (e.message === 'CredentialContainer request is not allowed.') {
        displayTitle({
          title: _('Authentication failed'),
          desc: _('Please try again.'),
        })
        // There is a firefox bug where if you have your console opened when you try to call this, it fails
        console.info('If the authentication crashed and you had your firefox console open when you tried to login, please close it and try again, as it may be due to a firefox bug. You can ignore this message otherwise.')
      } else if (isWebView) {
        // if webauthn fail in WebView
        displayWebauthnOnWebViewTitle()
      } else {
        displayTitle({
          title: _('Authentication failed'),
          desc: _('You refused the request'),
        })
      }
    }
    return
  }

  if (assertion === undefined) {
    displayTitle({
      title: _('Authentication failed'),
      desc: _('Please try again.'),
    })
    return
  }

  const res = await fetch(`${params.apiUrl}users/${params.uid}/webauthn/login/${params.userHash}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      //note: credID is contained in response, as response.id
      //note: response.id and response.rawId are the same when sending
      // because rawId is an arraybuffer, and serializePKC converts it to
      // a string, causing to equal id.
      //=> 3x the same id is sent, redundant
      response: SerializePKC(assertion),
      credID: assertion.id,
    }),
  })

  const verifdata = await res.json()

  // Success response
  if (200 <= res.status && res.status < 300) {
    const token = document.querySelector('#token')
    if (token) token.value = verifdata.token
    document.querySelector('#fm1')?.submit()
  }
  // failed
  else {
    if (typeof verifdata.message === 'object') {
      displayTitle({
        title: _('Authentication failed'),
        desc: verifdata.message.title + '<br>' + verifdata.message.desc,
      })
    }
  }
}

function configureLinkToOtpManager (element, params) {
  for (const elt of document.querySelectorAll(element)) {
    elt.href = params.otpManagerUrl
  }
  onclick(element, function () {
    const otpManagerWindow = window.open(params.otpManagerUrl)

    window.addEventListener('message', (event) => {
      if (event.data === 'closeOtpManagerWindow') {
        otpManagerWindow && otpManagerWindow.close()
        location.reload()
      }
    })

    return false
  })
}

export function getUserOtpMethods_and_displayChoices (params) {
  if (!params.apiUrl) throw 'missing params.apiUrl'
  // ensure esup-otp-api base url has a trailing slash
  if (!params.apiUrl.match(/[/]$/)) params.apiUrl += '/'

  addHtmlTemplate()

  document.getElementById('token').oninput = function () {
    autoSubmitIfValid(this)
  }
  onclick('#back_to_choices', () => {
    clearErrors()
    show('choices')
  })

  configureLinkToOtpManager('#no-choices a', params)
  configureLinkToOtpManager('#activateMoreMethods a', params)

  fetch(params.apiUrl + 'users/' + params.uid + '/' + params.userHash).then(response => (
    response.json()
  )).then(async function (data) {
    if (data.code != 'Ok') {
      alert(_('Error, please try again later'))
      return
    }
    try {
      await displayChoices(params, data.user)
    } catch (e) {
      alert(_('Error') + ' ' + e)
    }
  })
}

const methods = {
  // l'ordre est utilisé pour choisir dans quel ordre afficher les méthodes
  webauthn: {
    label: {
      '': _('Authenticate by physical factor (WebAuthn)'),
    },
    overrideIcon: 'cle',
    hideSubmitCode: true,
    retryText: 'Réessayer',
    initialise: initializeWebauthn,
  },
  push: {
    label: {
      push: _('Authenticate via the Esup Auth application on your %TRANSPORT%'),
    },
    hideSubmitCode: true,
    retryText: _('Request a new notification'),
    codeLabelAfterSubmit: _('Open the Esup Auth application on your mobile %TRANSPORT% to validate the authentication.'),
  },
  totp: {
    label: {
      '': _('Enter a TOTP code'),
    },
    codeLabel: (_params, _chosen) => {
      return _('Please enter the code displayed on your TOTP application:')
    },
    overrideIcon: 'no_transport',
  },
  random_code_mail: {
    label: {
      sms: _('Receive a code by SMS on %TRANSPORT%'),
      mail: _('Receive a code by mail on %TRANSPORT%'),
    },
  },
  random_code: {
    label: {
      sms: _('Receive a code by SMS on %TRANSPORT%'),
      mail: _('Receive a code by mail on %TRANSPORT%'),
    },
  },
  passcode_grid: {
    label: {
      '': _('Enter the code shown on your code grid'),
    },
  },
  esupnfc: {
    label: {
      '': _('Authenticate with your multi-service card on an NFC-compatible smartphone'),
    },
    overrideIcon: 'carte',
    hideSubmitCode: true,
    codeLabel: async (params, _chosen) => {
      const esupNfcSecret = await (fetch(`${params.apiUrl}esupnfc/infos?requireDeepLink=true`, { method: 'GET' })
          .then(res => res.json())
      )
      if (esupNfcSecret.code !== 'Ok') {
        return _('Authenticate with your multi-service card on an NFC-compatible smartphone')
      }

      const esupnfcValues = {
        '%ANDROID_APP_URL%': 'https://play.google.com/store/apps/details?id=org.esupportail.esupAuth',
        '%IOS_APP_URL%': 'https://apps.apple.com/fr/app/esup-auth/id1563904941',
        '%QRCODE_SRC%': `${params.apiUrl}esupnfc/infos.svg`,
        '%DEEPLINK%': esupNfcSecret.server_infos.deepLink,
        '%ETABLISSEMENT%': esupNfcSecret.server_infos.etablissement,
        '%API_URL%': params.apiUrl,
      }

      if (/Esup Auth/i.test(navigator.userAgent)) {
        return _('esupAuthWebview_nfc_html', esupnfcValues)
      } else {
        return _('nfc_html', esupnfcValues)
      }
    },
  },
  bypass: {
    label: {
      '': _('Enter a single-use backup code'),
    },
    codeLabel: (_params, _chosen) => {
      return _('Please enter a single-use backup code:')
    },
    overrideIcon: 'no_transport',
  },
}

const transports = {
  mail: {
    codeLabelAfterSubmit: _('A code has been sent to your email %TRANSPORT%,<br>enter it here to log in.'),
  },
  sms: {
    codeLabelAfterSubmit: _('A code has been sent to %TRANSPORT%,<br>enter it here to log in.'),
  },
}

async function displayMethod (params, chosen, opts) {
  try {
    localStorage.setItem('lastLocalAttempt', JSON.stringify({
      method: chosen.method,
      time: Date.now(),
    }))
  } catch (error) {
    // setItem() may throw an exception if the storage location is full. In particular, for Safari Mobile (since iOS 5), it will throw an exception if the user switches to private browsing (unlike other browsers, which allow storage even in private browsing by using a separate data container, Safari sets its storage quota to 0 bytes).
  }
  if (chosen.method == 'passcode_grid') {
    chosen.transport = 'passcode_grid'
  }

  if (chosen.method === 'push' || chosen.method === 'esupnfc') {
    mayInitializeSocket(params)
  }

  if (chosen.transport) {
    submitCodeRequest(params, chosen, opts)
  }
  await showMethod(params, chosen)
  if (chosen.opts.initialise) chosen.opts.initialise(params, chosen, opts)
}

/**
 * @returns {[{method: String, transport: String, transportText: ?String, text: String, opts: any}]}
 */
function computeChoices (_params, methodsAndTransports) {
  let choices = []
  Object.entries(methods).forEach(function ([method, opts]) {

    if (!(methodsAndTransports.methods[method] || {}).active) {
      return
    }

    var params = methodsAndTransports.methods[method];

    (params.transports.length ? params.transports : ['']).forEach(function (transport) {
      //if (transport !== '') return;
      var transportText = transport && methodsAndTransports.transports[transport]
      if (opts.label[transport]) {
        var text = opts.label[transport].replace('%TRANSPORT%', transportText)
        choices.push({
          method: method,
          transport: transport,
          transportText: transportText,
          text: text,
          // to replace with { ... } when old Edge compatibility is not needed (cf neededObjectExpression > SpreadElement in eslint.config.js)
          opts: Object.assign({}, opts, transports[transport]),
        })
      } else {
        console.error('weird transport', transport, 'for (pseudo) method', method)
      }
    })
  })
  return choices
}

function serverLog (vals) {
  fetch('log?' + new URLSearchParams(vals))
}

async function displayChoices (params, userParams) {
  let choices = computeChoices(params, userParams)
  const service = new URLSearchParams(location.search).get('service')
  if (choices.length === 0) {
    show('no-choices')
    try {
      serverLog({ warn: 'no-choices', uid: params.uid, service: service })
    } catch (_e) {
    }
    return
  }

  document.querySelector('#methodChoices')?.replaceChildren(...choices.map(function (choice) {
    const li = document.createElement('li')
    const button = document.createElement('a')
    button.classList.add('large')
    onclick(button, async () => {
      clearErrors()
      await displayMethod(params, choice, {})
      return false
    })
    const span = document.createElement('span')
    span.innerHTML = choice.text

    const img = document.createElement('img')
    img.src = params.apiUrl + 'public/images/liste-' + (choice.opts.overrideIcon || choice.transport || choice.method) + '.svg'
    img.alt = ''

    button.append(span, img)
    li.append(button)
    return li
  }))
  // focus the first method choice
  document.querySelector('#methodChoices li a')?.focus()

  function getChoiceFromMethod (method) {
    return choices.find(choice => choice.method === method)
  }

  const methodsRequiringExplicitChoice = ['bypass' /*, "random_code"*/ /*, "esupnfc"*/]

  const isOtpManager = service && (new URL(service).hostname == new URL(params.otpManagerUrl).hostname)
  document.querySelector('#activateMoreMethods').classList.toggle('d-none', isOtpManager || choices.some(choice => !methodsRequiringExplicitChoice.includes(choice.method)))

  /** @type {{method: ?String, time: ?number, auto: ?Boolean, verified: ?Boolean}} */
  const lastSendMessage = userParams.last_send_message || {}
  /** @type {{method: ?String, time: ?number}} */
  const lastValidated = userParams.last_validated || {}
  /** @type {{method: ?String, time: ?number}} */
  const lastLocalAttempt = JSON.parse(localStorage.getItem('lastLocalAttempt') || '{}')

  if (lastValidated.method && !document.hidden) {
    // otherwise it means that lastLocalAttempt has failed
    if (lastLocalAttempt.time && lastLocalAttempt.time <= lastValidated.time) {
      const method = lastLocalAttempt.method
      if (!methodsRequiringExplicitChoice.includes(method)) {
        const chosen = getChoiceFromMethod(method)
        if (chosen) {
          return displayMethod(params, chosen, { auto: true })
        }
      }
    }
    const lastValidatedMethodRecentlyFailed = lastSendMessage.method == lastValidated.method && lastSendMessage.time > lastValidated.time
    if (!lastValidatedMethodRecentlyFailed) {
      const method = lastValidated.method
      if (!methodsRequiringExplicitChoice.includes(method)) {
        const chosen = getChoiceFromMethod(method)
        if (chosen) {
          return displayMethod(params, chosen, { auto: true })
        }
      }
    }

  }
  show('choices')
}

async function submitCodeRequest (params, chosen, opts) {
  const url = params.apiUrl + 'users/' + params.uid + '/methods/' + chosen.method + '/transports/' + chosen.transport + '/' + params.userHash + (opts.auto ? '?auto' : '')

  const response = await fetch(url, { method: 'POST' })
  const data = await response.json()

  if (data.code !== 'Ok') {
    alert(_('Error, please try again later'))
    show('choices')
    console.log('Something is broken : ', data)
  } else {
    console.log(chosen)
    let codeLabel = chosen.opts.codeLabelAfterSubmit || _('A code has been sent to %TRANSPORT%,<br>enter it here to log in.')
    if (chosen.method == 'passcode_grid') {
      const challenge = data.message.challenge
      codeLabel = _('Enter the code shown in the cell at the intersection of <strong>row %LINE%</strong> and <strong>column %COLUMN%</strong> of your passcode grid.',
        {
          '%LINE%': String.fromCharCode(challenge[0] + 'A'.charCodeAt(0)),
          '%COLUMN%': challenge[1] + 1,
        })
    }
    updateCodeLabel(codeLabel.replace('%TRANSPORT%', chosen.transportText))
  }
}

import { io } from '/js/socket.io.esm.js'

let socket

async function mayInitializeSocket (params) {
  if (socket) return // already in place (NB: socket.io will handle reconnect in case of WebSocket breakage)

  socket = io.connect(params.apiUrl, {
    reconnect: true,
    path: '/sockets',
    query: 'uid=' + params.uid + '&hash=' + params.userHash + '&app=cas',
  })
  socket.on('userAuth', function (data) {
    if (data.code == 'Ok') {
      const tokenElt = document.querySelector('#token')
      if (tokenElt) tokenElt.value = data.otp
      document.querySelector('#fm1')?.submit()
    }
  })
}

function mayDisconnectSocket () {
  if (socket) {
    socket.disconnect()
    socket = undefined
  }
}

function millisecondsToDaysHoursMinutes (ms) {
  const minutes = Math.round(ms / 60 / 1000)
  return {
    days: Math.floor(minutes / 60 / 24),
    hours: Math.floor(minutes / 60) % 24,
    minutes: minutes % 60,
  }
}

export function millisecondsToFrenchText (ms) {
  const translate = {
    days: ['jour', 'jours'],
    hours: ['heure', 'heures'],
    minutes: ['minute', 'minutes'],
  }
  const dhm = millisecondsToDaysHoursMinutes(ms)
  const toText = (field) => {
    const val = dhm[field]
    return val === 0 ? '' : val + ' ' + translate[field][val > 1 ? 1 : 0]
  }

  const d = toText('days')
  const h = toText('hours')
  const m = toText('minutes')

  return (
    dhm.days >= 7 ? [d] : dhm.days >= 1 ? [d, h] :
      dhm.hours >= 10 ? [h] : [h, m]
  ).filter(s => s).join(' et ')
}
