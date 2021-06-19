export const LogoIcon = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 30">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M5.65177 9.77559V0H0.00041008V15H5.65177L18.3067 9.27318H23.9997V0H18.3067V4.0481L5.65177 9.77559ZM24 30V15H18.3486L5.69368 20.7268H0V30H5.69368V25.9519L18.3486 20.2244V30H24Z">
      </path>
    </svg>
  )
}

export const SoundIcon = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 55 80" fill="currentColor">
      <g transform="matrix(1 0 0 -1 0 80)">
        <rect width="10" height="20" rx="3">
          <animate attributeName="height" begin="0s" dur="4.3s"
            values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear"
            repeatCount='indefinite'></animate>
        </rect>
        <rect x="15" width="10" height="80" rx="3">
          <animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear"
            repeatCount='indefinite'></animate>
        </rect>
        <rect x="30" width="10" height="50" rx="3">
          <animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50"
            calcMode="linear" repeatCount='indefinite'></animate>
        </rect>
        <rect x="45" width="10" height="30" rx="3">
          <animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear"
            repeatCount='indefinite'></animate>
        </rect>
      </g>
    </svg>
  )
}

export const VerifiedIcon = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <g>
        <path
          d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z">
        </path>
      </g>
    </svg>
  )
}

export const AnimatedLoadingIcon = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="#000000">
      <g transform="translate(1 1)" strokeWidth="2" fill="none" fillRule="evenodd"><circle strokeOpacity=".5" cx="18" cy="18" r="18"></circle>
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform>
        </path>
      </g>
    </svg>
  )
}