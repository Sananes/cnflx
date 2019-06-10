// @flow
const ICONS = {
  TWITTER: {
    path:
      "M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",
    viewBox: "0 0 26 28"
  },
  FACEBOOK: {
    path:
      "M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",
    viewBox: "0 0 16 28"
  },
  TELEGRAM: {
    path:
      "M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z",
    viewBox: "0 0 28 28"
  },
  VKONTAKTE: {
    path:
      "M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z",
    viewBox: "0 0 31 28"
  },
  GITHUB: {
    path:
      "M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",
    viewBox: "0 0 26 28"
  },
  EMAIL: {
    path:
      "M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",
    viewBox: "0 0 28 28"
  },
  RSS: {
    path:
      "M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",
    viewBox: "0 0 22 28"
  },
  STRIPE: {
    path:
      "M5.45757 12.557C5.45757 11.7468 6.27621 11.3418 7.36772 11.3418C9.00499 11.3418 11.188 11.8819 12.8253 12.827V7.6962C11.0516 7.0211 9.14143 6.61603 7.36772 6.61603C3.00166 6.61603 0 8.91139 0 12.827C0 18.7679 8.18636 17.6878 8.18636 20.3882C8.18636 21.3333 7.36772 21.7384 6.13977 21.7384C4.36606 21.7384 2.04659 20.9283 0.272879 19.9831V25.1139C2.31947 25.924 4.22962 26.3291 6.13977 26.3291C10.6423 26.3291 13.6439 24.1688 13.6439 20.2532C13.7804 13.7722 5.45757 14.9873 5.45757 12.557ZM39.431 25.9241H44.8885V7.0211H39.431V25.9241ZM20.8752 2.5654L15.5541 3.64557V20.6582C15.5541 23.8987 18.01 26.1941 21.1481 26.1941C22.9218 26.1941 24.2862 25.9241 24.9684 25.519V21.1983C24.2862 21.4684 20.8752 22.4135 20.8752 19.308V11.6118H24.9684V7.0211H20.8752V2.5654ZM32.3361 8.64135L32.1997 7.0211H27.2879V25.9241H32.7454V13.097C34.1098 11.4768 36.4293 11.7468 37.1115 12.0169V7.0211C36.4293 6.75105 33.7005 6.34599 32.3361 8.64135ZM39.431 5.53586L44.8885 4.4557V1.60958e-08L39.431 1.08017V5.53586ZM82 16.4726C82 10.9367 79.2712 6.61603 74.0865 6.61603C68.9018 6.61603 65.7637 10.9367 65.7637 16.4726C65.7637 22.9536 69.4476 26.1941 74.7687 26.1941C77.3611 26.1941 79.2712 25.654 80.772 24.7089V20.5232C79.2712 21.3333 77.6339 21.7384 75.4509 21.7384C73.2679 21.7384 71.4942 20.9283 71.2213 18.3629H81.8636C82 18.0928 82 17.0127 82 16.4726ZM71.2213 14.4473C71.2213 12.0169 72.7221 11.0717 74.0865 11.0717C75.4509 11.0717 76.8153 12.0169 76.8153 14.4473H71.2213ZM56.8952 6.61603C54.7122 6.61603 53.4842 7.56118 52.6656 8.37131L52.5291 7.0211H47.6173V32L53.0749 31.0549V24.9789C53.8935 25.519 54.985 26.3291 56.8952 26.3291C60.8519 26.3291 64.3993 23.2236 64.3993 16.3376C64.2629 10.1266 60.7155 6.61603 56.8952 6.61603ZM55.5308 21.4684C54.3028 21.4684 53.4842 21.0633 52.9384 20.3882V12.4219C53.4842 11.7468 54.3028 11.3418 55.5308 11.3418C57.5774 11.3418 58.9418 13.5021 58.9418 16.3376C58.9418 19.308 57.5774 21.4684 55.5308 21.4684Z",
    viewBox: "0 0 82 32"
  },
  MARVEL: {
    path:
      "M62.8354 20.7032C35.9181 18.6231 13.6629 25.0981 8.68576 27.4982C5.91073 28.7782 5.71621 30.3783 6.11476 31.2626C6.47525 31.9399 7.79775 32.3357 9.25029 31.6199C19.9339 25.8608 41.5506 21.2675 62.8449 22.5849C63.3555 22.5828 63.7678 22.1593 63.7657 21.6387C63.7636 21.1192 63.347 20.7 62.8364 20.7021L62.8354 20.7032ZM69.505 12.6282C68.377 13.9083 66.7299 14.8683 66.2119 14.3883C65.6939 13.9083 66.2119 12.3935 66.2119 12.3935C68.8569 10.6708 74 6.27595 74 2.91688C74 -0.197915 71.225 -1.15795 68.2924 1.72216C65.9202 4.29614 64.2086 7.4248 63.3069 10.8319C61.7803 12.3466 59.3669 14.2667 57.2018 14.2667C56.0738 14.2667 55.7588 13.4666 55.9163 12.3839C57.7663 12.3562 62.8999 10.9161 62.8999 6.58636C62.8925 5.86313 62.5891 5.17617 62.0615 4.68975C61.5351 4.2044 60.8331 3.96332 60.1248 4.02626C57.7938 4.02626 54.8243 6.42636 53.3728 9.78543C52.9763 9.71076 52.5905 9.58382 52.2258 9.40888C52.6053 8.58431 52.915 7.72774 53.1508 6.84877C53.4743 5.0887 52.7533 3.96866 51.3008 4.12866C50.3757 4.2044 49.2932 5.00443 49.0532 6.84877C48.956 7.78321 49.123 8.72725 49.5342 9.56888C48.8957 11.5636 46.3247 14.0491 45.4367 13.9637C44.5487 13.8795 45.5572 10.3497 46.4452 7.71494C46.9315 7.20932 47.3153 6.6109 47.5732 5.95487C47.8217 5.44178 47.6493 4.82096 47.1757 4.51481C45.8532 4.02732 44.3848 4.65348 43.7992 5.95487C43.4461 6.59703 43.1363 7.26372 42.8742 7.94962C42.1532 8.82539 41.0242 9.94437 40.7007 9.83236C40.2197 9.51235 41.8286 7.35759 41.6257 6.15221C41.4819 5.16017 40.5992 4.45614 39.6181 4.55215C38.1656 4.75909 36.2416 7.52613 36.2416 7.52613C36.4678 7.02158 36.6021 6.47969 36.6391 5.92607C36.5556 4.89136 34.6315 4.41134 33.6695 6.32182C33.0109 8.15229 32.5267 10.0436 32.2265 11.969C31.829 12.8448 30.219 15.4038 28.9335 15.4891C27.8879 15.5649 29.1734 10.9343 29.331 10.6889C29.8955 9.81316 30.6165 7.96882 30.4589 7.16879C30.4727 6.7805 30.3004 6.40929 29.998 6.17141C29.6957 5.9346 29.2982 5.85993 28.9324 5.973C28.2854 6.14474 27.7346 6.5757 27.4059 7.16772C26.9439 6.5853 26.2039 6.31115 25.4818 6.45196C21.2088 6.91278 18.4983 14.3477 18.8038 17.8775C19.0438 19.7602 19.9318 20.9176 21.5788 20.7011C23.4289 20.4653 24.9554 17.7463 24.9554 17.7463C24.9554 17.7463 25.3529 19.9864 27.3699 19.741C28.8637 19.2759 30.1809 18.3564 31.144 17.1063C31.0975 17.2332 31.0689 17.3665 31.0605 17.502C30.737 19.3848 33.8355 19.1767 34.1125 17.7378C35.0375 10.6228 37.4055 7.66801 38.1265 7.66801C38.691 7.66801 36.6 11.0281 37.803 12.3082C38.728 13.4282 40.374 12.5439 41.743 11.3674C41.5041 12.2549 41.3709 13.168 41.3455 14.0875C41.262 16.0822 41.984 17.6823 43.9165 17.6076C46.4875 17.5319 49.2171 14.3328 50.9836 11.2927C51.4488 11.601 51.9657 11.8186 52.5101 11.9327C52.3262 12.6442 52.2575 13.3824 52.3072 14.1163C52.4647 16.431 54.0737 17.3164 55.9237 17.2311C58.0972 17.1553 60.6598 15.471 62.3988 13.9563C62.4072 14.0437 62.3766 14.1301 62.3153 14.192C62.1577 15.3121 62.3988 17.3921 63.9983 17.4668C65.8483 17.6268 69.0578 15.7067 70.6678 13.7024C71.8244 12.8362 70.4649 11.5562 69.5029 12.5919V12.6293L69.505 12.6282ZM71.225 3.00008C71.4205 3.02035 71.5643 3.19529 71.5485 3.39583C71.5485 5.39058 66.5629 9.63502 66.5629 9.63502C66.5629 9.63502 69.8189 3.00008 71.225 3.00008ZM59.1998 7.15065C59.3658 7.13572 59.5286 7.20079 59.6396 7.32666C59.7506 7.45253 59.7971 7.62427 59.7643 7.79068C59.7643 8.91072 58.2378 9.78543 56.5548 9.78543C57.4523 8.46804 58.4968 7.15065 59.1998 7.15065ZM25.9005 10.275C25.743 11.4698 23.653 16.8631 22.5239 16.8631C21.0809 16.9388 23.2449 9.26807 25.5759 9.33421C26.0295 9.31501 26.0295 9.63502 25.8994 10.275H25.9005ZM7.79881 11.7151C9.16783 11.7151 6.67082 18.8301 6.99431 21.9449C7.3178 25.0597 10.7684 24.1849 10.5273 22.3406C10.1298 19.3005 12.2103 9.62649 14.3014 9.62649C15.8279 9.62649 12.6184 16.2614 13.2558 20.4216C13.6533 23.1417 17.3534 22.3043 16.9559 20.5816C15.8279 15.151 19.6104 9.87183 19.1199 6.04127C18.8799 4.44121 17.9919 3.56651 16.9464 3.56651C13.4874 3.56651 10.6753 10.5972 10.6753 10.5972C10.6753 10.5972 11.0083 6.5885 8.1963 6.43702C4.09877 6.19275 -0.0822845 16.4321 0.00123076 25.7018C0.084746 28.6566 3.77528 28.1766 3.53424 25.7775C3.29427 21.6462 5.70776 11.7172 7.79881 11.7172V11.7151Z",
    viewBox: "0 0 74 32"
  },
  SILVERFIN: {
    path:
      "M5.94377 9.31373C6.29178 9.51518 6.68343 9.62899 7.08507 9.64539C6.09884 9.65651 5.12555 9.87154 4.2262 10.277C3.32686 10.6825 2.52087 11.2696 1.85877 12.0016C1.68845 11.8134 1.52815 11.6164 1.37852 11.4113C0.710976 10.4955 0.269537 9.43445 0.090349 8.31495C-0.0888392 7.19545 -0.000681383 6.04936 0.347604 4.97054C0.695888 3.89173 1.2944 2.91086 2.09412 2.10826C2.89383 1.30566 3.87202 0.704151 4.94858 0.352995C6.02513 0.00183903 7.16944 -0.0889808 8.2878 0.0879727C9.40615 0.264926 10.4667 0.704621 11.3827 1.37105C12.2987 2.03748 13.0441 2.91169 13.5577 3.9221C14.0713 4.93251 14.3387 6.05038 14.3378 7.18417H14.3315C14.3316 8.0933 14.1592 8.99416 13.8233 9.83878C12.6374 8.71604 11.1876 7.91127 9.60833 7.49906C9.6589 7.10806 9.61483 6.71061 9.47983 6.34024C9.34483 5.96987 9.12286 5.63744 8.83265 5.371C8.54244 5.10455 8.1925 4.9119 7.81234 4.8093C7.43218 4.7067 7.03295 4.69715 6.64833 4.78146C6.26371 4.86577 5.90498 5.04147 5.6024 5.29374C5.29982 5.54601 5.06225 5.86744 4.90975 6.23094C4.75725 6.59443 4.69428 6.98932 4.72615 7.38229C4.75803 7.77527 4.88381 8.15481 5.09289 8.48889H5.08717C5.30181 8.82923 5.59577 9.11228 5.94377 9.31373ZM13.6866 13.8356C14.0911 14.7191 14.312 15.6757 14.3358 16.6473C14.3665 17.9228 14.0571 19.1835 13.4394 20.2994C12.8217 21.4153 11.918 22.3461 10.8216 22.996C9.74136 23.6387 8.51102 23.9848 7.25461 23.9995C5.9982 24.0141 4.76016 23.6967 3.66533 23.0793C2.95968 22.6809 2.32579 22.1668 1.79004 21.5583C0.636679 20.2512 0.00220792 18.5659 0.00686135 16.8216C0.00793951 15.9353 0.173594 15.0569 0.495377 14.2313C1.68427 15.3607 3.13931 16.1704 4.72495 16.585C4.6878 16.9738 4.74368 17.3658 4.88796 17.7287C5.03224 18.0915 5.26077 18.4148 5.55463 18.6716C5.84848 18.9284 6.19921 19.1114 6.57776 19.2055C6.95631 19.2995 7.35179 19.3019 7.73145 19.2125C8.11111 19.123 8.46402 18.9443 8.76097 18.691C9.05791 18.4378 9.29034 18.1174 9.439 17.7563C9.58767 17.3952 9.64829 17.0039 9.61585 16.6147C9.58341 16.2255 9.45884 15.8496 9.25246 15.5182H9.25627C9.0409 15.1747 8.7447 14.8893 8.39363 14.687C8.05761 14.4934 7.68113 14.3815 7.29453 14.3602L7.28284 14.3605H7.16659C6.16907 14.3556 5.18336 14.144 4.27154 13.7389C3.35971 13.3338 2.54153 12.7441 1.86851 12.0068L1.86279 12.0004C2.52483 11.2692 3.33051 10.6827 4.22938 10.2777C5.12824 9.87266 6.10094 9.65786 7.08655 9.64672H7.20725C9.22547 9.63018 11.1243 10.5042 12.4761 12.0004C12.4759 12.0004 12.476 12.0016 12.4762 12.0031L12.4767 12.0066L12.4774 12.01C12.0545 12.4759 11.5733 12.8832 11.0467 13.2221C11.5749 12.8827 12.0575 12.4745 12.4815 12.0073C12.8131 12.3736 13.1063 12.7731 13.3562 13.1994C13.4769 13.4068 13.5871 13.6189 13.6866 13.8356ZM42.1313 6.6333H45.5313V19.9699H42.1313V6.6333ZM52.2539 0.0102539H48.854V19.9697H52.2539V0.0102539ZM58.2425 6.60742L61.1889 15.8073L64.0723 6.60869H67.532L62.7967 19.9453H59.4533L54.6724 6.63605L58.2425 6.60742ZM79.5708 8.37947C78.5645 7.15745 77.0532 6.53467 75.0775 6.53467C73.8604 6.53467 72.7576 6.82538 71.799 7.39791C70.8364 7.97499 70.0565 8.81305 69.5495 9.81523C69.0197 10.8388 68.751 12.0239 68.751 13.3375C68.751 14.6512 69.0159 15.8325 69.5381 16.8471C70.0414 17.8471 70.8237 18.6793 71.7901 19.2428C72.755 19.8071 73.8864 20.0927 75.1442 20.0927C76.2172 20.0927 77.2101 19.8917 78.095 19.4953C78.9688 19.1067 79.7434 18.5251 80.361 17.7943L80.4995 17.6296L78.6083 15.5112L78.4235 15.716C78.0417 16.1437 77.5741 16.4858 77.0511 16.7199C76.5281 16.9539 75.9616 17.0747 75.3888 17.0742C74.563 17.0742 73.889 16.8388 73.3268 16.3541C72.8344 15.9304 72.4844 15.3554 72.2843 14.641H81.028L81.0446 14.4113C81.0598 14.195 81.0674 13.8738 81.0674 13.4571C81.0674 11.2943 80.5637 9.58749 79.5695 8.37883L79.5708 8.37947ZM77.8994 12.0583H72.196C72.3472 11.2904 72.6629 10.6715 73.1368 10.2135C73.6673 9.70454 74.3095 9.45454 75.0998 9.45454C75.9472 9.45454 76.606 9.70518 77.1142 10.2211C77.5659 10.6842 77.8314 11.3006 77.8994 12.0583ZM87.3711 8.44438C87.7098 7.96309 88.139 7.55255 88.6347 7.23572C89.3633 6.77452 90.2222 6.63139 91.1852 6.6123L91.4393 6.61612V9.7332H91.1763C90.0303 9.72429 89.2261 9.94058 88.4002 10.7676C87.5071 11.6588 87.3711 12.6429 87.3711 13.7663V19.9699H83.9712V6.6333H87.3711V8.44438ZM95.3332 5.04147V6.614H93.5342V9.71518H95.3332V20.0372H99.0127V9.71518H102.062V6.614H99.0127V5.45178C99.0127 3.93968 100.083 3.41614 100.907 3.41614L102.06 3.3926V0.0102539H100.248C97.2555 0.0102539 95.3332 1.98992 95.3332 5.04147ZM119.498 6.51367C120.94 6.51367 122.093 6.9895 122.928 7.92844C123.756 8.85911 124.175 10.1301 124.174 11.7052V19.9699H120.752V12.6174C120.752 11.7898 120.534 11.1314 120.102 10.6607C119.67 10.1899 119.093 9.9609 118.339 9.9609C117.446 9.97554 116.763 10.286 116.243 10.9253C115.723 11.5646 115.46 12.4011 115.46 13.4094V19.9699H112.061V6.63327H115.457V8.39728C116.356 7.17462 117.711 6.54166 119.498 6.51367ZM35.4423 11.9909L33.6445 11.6048C32.9514 11.4776 32.4896 11.0908 32.4896 10.4738C32.4896 9.75364 33.208 9.21356 34.1069 9.21356C35.5452 9.21356 36.0845 10.1678 36.1874 10.9108L39.0372 10.2676C38.8835 8.90504 37.6765 6.61621 34.0822 6.61621C31.3601 6.61621 29.3571 8.49345 29.3571 10.7562C29.3571 12.531 30.4612 13.9967 32.9006 14.5368L34.57 14.9223C35.5458 15.1277 35.9308 15.5908 35.9308 16.1564C35.9308 16.825 35.3914 17.4166 34.262 17.4166C32.7723 17.4166 32.0277 16.491 31.9509 15.4878L29.0229 16.1309C29.1773 17.5711 30.4841 20.0394 34.2874 20.0394C37.6002 20.0394 39.1922 17.9312 39.1922 15.8739C39.1916 14.0202 37.9331 12.503 35.4423 11.9909ZM42.6695 0.354867C43.0053 0.130181 43.4001 0.0102543 43.8039 0.0102543C44.0721 0.0100871 44.3376 0.0628357 44.5853 0.165485C44.8331 0.268134 45.0582 0.418671 45.2478 0.608491C45.4374 0.79831 45.5878 1.02369 45.6904 1.27175C45.793 1.51981 45.8457 1.78568 45.8457 2.05417C45.8458 2.45857 45.7262 2.85392 45.5019 3.19023C45.2776 3.52654 44.9588 3.78869 44.5857 3.94354C44.2126 4.09838 43.8021 4.13896 43.406 4.06014C43.0099 3.98132 42.646 3.78665 42.3604 3.50074C42.0748 3.21483 41.8803 2.85053 41.8015 2.45391C41.7227 2.05729 41.7631 1.64616 41.9176 1.27253C42.0721 0.898905 42.3338 0.579553 42.6695 0.354867ZM108.718 6.6333H105.318V19.9699H108.718V6.6333ZM109.06 2.05431C109.06 3.18349 108.145 4.09886 107.018 4.09886C105.89 4.09886 104.976 3.18349 104.976 2.05431C104.976 0.925141 105.89 0.00976563 107.018 0.00976563C108.145 0.00976563 109.06 0.925141 109.06 2.05431Z",
    viewBox: "0 0 125 24"
  },
  HOPPER: {
    path:
      "M34.5432 8.37875C35.0771 10.0605 35.611 11.7422 35.7789 12.6858L34.8038 12.9808C34.4923 12.2599 34.0636 10.9832 33.5877 9.56589C32.7976 7.21296 31.8775 4.47264 31.1473 3.2452C30.5622 2.26181 29.0508 0.737545 28.3683 0.983394C26.9057 1.57343 26.9057 5.80202 29.6359 9.58809C31.2448 11.8007 32.5124 13.6692 32.6586 14.21C32.6586 14.21 31.9761 14.9968 31.2935 14.3084C21.594 4.84304 14.4249 7.88217 12.0026 8.90905C11.4175 9.15708 11.1093 9.28771 11.1093 9.09639C11.1093 6.73625 10.8656 5.60535 10.0855 5.60535C7.11151 5.70368 2.72364 8.89972 5.11259 12.2924C5.84837 13.2818 7.01065 13.3495 7.67992 13.3885C8.20801 13.4193 8.42915 13.4321 7.89157 13.8659C-2.05426 21.6838 -0.494128 27.2892 1.40728 25.6174C17.1061 11.9974 30.416 22.6672 35.2426 28.5184C35.6966 29.0526 36.1507 29.6579 36.6061 30.2651C37.618 31.6141 38.637 32.9726 39.6792 33.5829C40.9956 34.3696 42.702 34.2221 42.2144 31.5669C41.8493 29.3854 39.9787 27.2855 38.692 25.841C37.7456 24.7786 37.115 24.0707 37.6316 23.9456C47.912 21.6045 40.9572 15.7442 38.6138 13.7696C38.2011 13.4218 37.9314 13.1946 37.9241 13.1283C38.1191 11.309 38.1191 9.44058 38.0216 7.6213C37.5828 1.47509 34.8038 0 33.5362 0C32.6586 0 32.8537 2.1143 33.2924 3.98275C33.441 4.90682 33.9921 6.64278 34.5432 8.37875ZM68.9317 20.2581C67.5666 20.2581 66.3965 18.8322 66.3965 17.1604C66.3965 15.4887 67.5666 14.0627 68.9317 14.0627C70.2968 14.0627 71.4669 15.4395 71.4669 17.1604C71.5157 18.8814 70.2968 20.2581 68.9317 20.2581ZM68.9317 11.4567C65.5677 11.4567 62.8374 14.0136 62.8374 17.1604C62.8374 17.898 62.9837 18.5863 63.2762 19.2747C62.6912 19.9631 62.1061 20.4056 61.6186 20.4056C60.668 20.4056 60.6459 18.8068 60.6203 16.9645C60.5856 14.4602 60.5447 11.5059 58.1571 11.5059C55.3293 11.5059 53.2816 15.3411 52.2091 17.8488C52.2481 17.0212 52.2892 16.2034 52.3298 15.3935V15.3934V15.3933V15.3932C52.492 12.1616 52.6478 9.05567 52.6478 5.94973C52.6478 3.09789 52.5503 1.27861 52.4528 1.03276C52.1115 0.639403 51.624 0.393555 51.1365 0.393555C50.5514 0.491894 49.9664 0.737743 49.5276 1.1311C49.3326 1.6228 49.04 5.75305 49.04 9.34244C49.04 19.2255 49.6738 22.4216 49.7226 22.4708C49.8201 22.9133 50.8439 22.9133 50.8439 22.9133C50.8439 22.9133 51.8678 22.9133 52.014 22.4708V22.4216C52.2091 21.7824 54.6468 15.0461 56.5969 15.0461C57.3305 15.0461 57.3673 16.1594 57.4132 17.5484C57.4893 19.8517 57.5905 22.9133 60.936 22.9133C62.3499 22.9133 63.52 22.0282 64.3976 20.9465C65.6164 22.2249 67.2741 22.9133 69.0292 22.9133C72.442 22.9133 75.1722 20.3565 75.1722 17.2096C75.1722 14.0627 72.3445 11.4567 68.9317 11.4567ZM81.9977 20.2581C79.8525 20.2581 78.9262 18.8322 78.9262 17.1604C78.9262 15.4887 79.9013 14.0627 81.9977 14.0627C83.4116 14.0627 84.5329 15.4395 84.5329 17.1604C84.5817 18.8814 83.4603 20.2581 81.9977 20.2581ZM81.9977 11.4567C80.7788 11.4567 79.56 11.8501 78.5362 12.5876C78.4874 12.0959 78.4874 11.8501 78.4874 11.8501C78.3411 11.3584 77.3173 11.3584 77.3173 11.3584C77.3173 11.3584 76.3422 11.4076 76.2447 11.8501C76.196 11.8993 75.6597 16.2754 75.6597 24.3392C75.6597 24.7701 75.6712 24.6998 75.6831 24.6278C75.6956 24.5518 75.7084 24.4738 75.7084 24.9784C75.7572 28.617 76.0009 32.6489 76.2935 33.1897C76.781 33.5831 77.3661 33.8289 77.9999 33.9273H78.0486C78.5362 33.8781 79.0237 33.6814 79.3162 33.2881C79.4137 32.3047 79.4625 31.2721 79.4137 30.2887V28.3711C79.3811 26.791 79.3266 25.828 79.2503 24.4788C79.2126 23.8127 79.1695 23.0525 79.1212 22.0774C79.9988 22.5691 81.0226 22.8149 82.0465 22.8149C85.4592 22.8149 88.1895 20.2581 88.1895 17.1113C88.1895 14.0627 85.4105 11.4567 81.9977 11.4567ZM92.0409 17.1604C92.0409 18.8322 92.9673 20.2581 95.1124 20.2581C96.5263 20.2581 97.6477 18.8814 97.6477 17.1604C97.6477 15.4395 96.5263 14.0627 95.1124 14.0627C93.016 14.0627 92.0409 15.4887 92.0409 17.1604ZM91.6509 12.5876C92.6747 11.8501 93.8936 11.4567 95.1124 11.4567C98.4765 11.4567 101.255 14.0627 101.304 17.1113C101.304 20.2581 98.574 22.8149 95.1612 22.8149C94.1374 22.8149 93.1135 22.5691 92.2359 22.0774C92.2842 23.0516 92.3272 23.8113 92.3649 24.477L92.365 24.4789C92.4413 25.8281 92.4958 26.7911 92.5285 28.3711V30.2887C92.5772 31.2721 92.5285 32.3047 92.431 33.2881C92.1384 33.6814 91.6509 33.8781 91.1634 33.9273H91.1146C90.4808 33.8289 89.8958 33.5831 89.4082 33.1897C89.1157 32.6489 88.8719 28.617 88.8232 24.9784C88.8232 24.4738 88.8103 24.5518 88.7978 24.6278C88.786 24.6998 88.7744 24.7701 88.7744 24.3392C88.7744 16.2754 89.3107 11.8993 89.3595 11.8501C89.457 11.4076 90.4321 11.3584 90.4321 11.3584C90.4321 11.3584 91.4559 11.3584 91.6021 11.8501C91.6021 11.8501 91.6021 12.0959 91.6509 12.5876ZM108.033 14.0625C108.861 14.0625 109.69 14.4067 109.69 15.4392C109.69 16.4718 108.033 16.9143 106.765 16.9143C106.375 16.9143 105.936 16.8652 105.546 16.7668C105.644 15.2426 106.765 14.0625 108.033 14.0625ZM125.828 15.5867C125.73 15.5867 125.633 15.6359 125.535 15.9309C124.365 18.1927 122.805 20.4545 121.684 20.4545C121.44 20.4545 121.294 20.2579 121.294 19.9628C121.294 19.4935 121.693 18.5203 122.111 17.5028C122.569 16.3881 123.049 15.2203 123.049 14.6033C123.049 13.4233 122.269 12.7349 120.709 12.7349C119.734 12.7349 117.637 12.6366 117.052 12.194C117.052 10.7189 116.467 9.63721 115.248 9.63721C114.273 9.63721 113.834 10.8664 113.834 11.604C113.737 12.6857 114.224 13.7183 115.102 14.3083C114.712 15.5376 114.127 16.6685 113.444 17.7502C112.274 19.422 110.86 20.4054 108.569 20.4054C107.155 20.4054 105.936 19.717 105.595 18.2419C106.375 18.5369 107.155 18.6844 107.935 18.6844C110.324 18.6844 112.42 17.4552 112.42 15.1442C112.42 12.9807 110.47 11.604 107.935 11.604C104.571 11.604 101.841 14.1608 101.841 17.3077C101.841 19.5695 103.596 23.0114 108.52 23.0114C112.128 23.0114 114.273 19.8645 115.004 18.3894C115.004 18.3648 115.017 18.3525 115.029 18.3402C115.041 18.328 115.053 18.3157 115.053 18.2911C115.589 17.2585 116.077 16.1768 116.418 15.095C117.247 15.3409 118.125 15.5376 118.954 15.5867C119.149 15.5867 119.392 15.6851 119.392 15.9309C119.392 15.9885 119.376 16.0461 119.362 16.0939C119.352 16.1276 119.344 16.1564 119.344 16.1768C118.856 17.2093 118.027 19.0778 118.027 20.2579C117.978 21.7821 119.149 23.0605 120.66 23.1097H120.952C123.783 23.1097 125.481 19.6808 126.045 18.541L126.072 18.4878C126.218 18.0944 126.315 17.701 126.267 17.3077C126.364 16.3243 126.072 15.5867 125.828 15.5867Z",
    viewBox: "0 0 127 34"
  },
  LIGHTSPEED: {
    path:
      "M16.4 0l2.3 4c.4.7.4 1.7 0 2.5L5.3 29.8l6.3 11c1 1.7 2.8 2.8 4.8 2.8s3.9-1 4.8-2.8l6.4-11-1.7-3-7.1 12.6a2.6 2.6 0 0 1-4.5 0l-5.5-9.6L21.2 8.2l2.2 4c.5.7.5 1.7 0 2.5l-8.6 15.1 1.7 3L26 16.4l6.2 10.8a5 5 0 0 1 0 5.3l-6.4 11.1c-1 1.6-4 5.4-9.4 5.4A11 11 0 0 1 7 43.6l-6.4-11a5.5 5.5 0 0 1 0-5.3L16.4 0zM45.8 11.7h4.4v25.8h-4.4V11.7zM56 16.5a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2zM53.8 19.6h4.4v18h-4.4v-18zm16-.5c-5 0-9 3.6-9 9.1 0 5.6 3.5 9 9 9 2.3 0 4.6 1.2 4.6 3.7 0 2.4-2 3.8-4.5 3.8-2.6 0-4.7-1.5-4.7-3.8h-4.4c0 4.8 3.8 8 9 8s9-3 9-8a6 6 0 0 0-3.7-6c3-1.3 3.8-4.5 3.8-6.7 0-5.5-4-9-9-9l-.1-.1zm0 14.5c-2.5 0-4.6-2.2-4.6-5.4 0-3 2-5.4 4.7-5.4 2.5 0 4.6 2.4 4.6 5.4 0 3.2-2.1 5.4-4.6 5.4h-.1zm22-14.5a7 7 0 0 0-5.7 2.7V11.7h-4.3v25.8h4.4v-9.1c0-2.7 1.8-4.9 4.4-4.9 2.4 0 4 1.4 4 4.7v9.3H99v-9.7c0-5.2-2.2-8.7-7.3-8.7zm18 15.4c-.6 0-1-.2-1.3-.6-.3-.3-.4-.9-.4-1.7v-8.8h3.7l.4-3.9h-4v-4.9l-4.4.5v4.5h-3.4v3.8h3.4v9c0 1.8.4 3.2 1.3 4.1.9 1 2.2 1.5 3.8 1.5 1.5 0 3-.5 4.3-1.3l-1.6-2.8c-.6.4-1.2.6-1.8.6zm18-6.6a12.3 12.3 0 0 0-6-1.4c-1.2-.1-3-.4-3-2 0-1 1-1.7 3.3-1.7 1.7 0 3.2.4 4.4 1.6l2.5-3a9.7 9.7 0 0 0-7-2.3c-3.3 0-7.6 1.5-7.6 5.6a5 5 0 0 0 2.3 4.2c1.7 1 3.9 1.2 5.7 1.4 1.3.1 3.4.5 3 2.2-.2 1.2-1.7 1.6-2.8 1.6-1 0-2.2 0-3.3-.3-1.2-.3-2.1-.8-3.2-1.5l-2.2 2.8.2.3c3 2.3 7 3.1 10.6 2.3 2.7-.6 5-2.6 5-5.6.2-1.7-.4-3.3-2-4.2zm14.6-8.8c-2 0-4.4.9-5.8 2.9l-.2-2.5h-4.2v25.9l4.4-.5v-9.5c1.2 2 4 2.6 5.9 2.6 5.7 0 9-4.3 9-9.5 0-5.3-3.6-9.4-9.1-9.4zm-.4 15c-3 0-5-2.7-5-5.5s1.9-5.8 5-5.8c3.2 0 5 3 5 5.8s-2 5.5-5 5.5zm15.3-4c.5 2.2 2.4 4 5.6 4 1.6 0 3.8-.8 4.8-1.8l2.8 2.7c-2 2-5 3-7.7 3a9.2 9.2 0 0 1-9.6-9.5c0-5.4 4.2-9.4 9.3-9.4 5.4 0 10 3.7 9.5 11h-14.7zm10.5-3.2c-.5-2.2-2.6-4-5.2-4a5.4 5.4 0 0 0-5.2 4h10.4zm10 3.3c.5 2.2 2.5 4 5.6 4 1.7 0 3.8-.8 4.9-1.8l2.8 2.7c-2 2-5 3-7.7 3-5.6 0-9.7-3.8-9.7-9.5 0-5.4 4.2-9.4 9.4-9.4 5.4 0 9.9 3.7 9.4 11h-14.7zm10.5-3.3c-.5-2.2-2.6-4-5.2-4a5.4 5.4 0 0 0-5.2 4h10.4zm15 11.2a7 7 0 0 0 5.7-2.9l.2 2.4h4.2V11.7H209v10c-1.2-2-4-2.5-6-2.5-5.6 0-9 4.2-9 9.4 0 5.3 3.7 9.4 9.2 9.4v.1zm.2-15c3 0 5 2.7 5 5.5s-1.8 5.8-5 5.8-5-3-5-5.8 2-5.5 5-5.5z",
    viewBox: "0 0 214 49"
  }
};

export default ICONS;
