const categories = [
  {
    title: "Pizza",
    id: 1,
    icon: (
      <svg
        className="w-7 h-7 group-hover:fill-primary"
        viewBox="-1 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m270.449219 400.128906c0-20.527344-16.703125-37.230468-37.230469-37.230468-20.53125 0-37.230469 16.703124-37.230469 37.230468s16.703125 37.226563 37.230469 37.226563 37.230469-16.699219 37.230469-37.226563zm-59.460938 0c0-12.257812 9.972657-22.230468 22.230469-22.230468s22.230469 9.972656 22.230469 22.230468c0 12.257813-9.972657 22.226563-22.230469 22.226563s-22.230469-9.96875-22.230469-22.226563zm0 0" />
        <path d="m140.527344 315.757812c-20.527344 0-37.226563 16.699219-37.226563 37.226563s16.699219 37.230469 37.226563 37.230469c20.53125 0 37.230468-16.703125 37.230468-37.230469s-16.699218-37.226563-37.230468-37.226563zm0 59.457032c-12.253906 0-22.226563-9.972656-22.226563-22.230469s9.972657-22.226563 22.226563-22.226563c12.257812 0 22.230468 9.96875 22.230468 22.226563s-9.972656 22.230469-22.230468 22.230469zm0 0" />
        <path d="m164.992188 162.625c-20.53125 0-37.230469 16.703125-37.230469 37.230469 0 20.527343 16.699219 37.230469 37.230469 37.230469 20.527343 0 37.226562-16.703126 37.226562-37.230469 0-20.527344-16.699219-37.230469-37.226562-37.230469zm0 59.460938c-12.257813 0-22.230469-9.972657-22.230469-22.230469 0-12.257813 9.972656-22.230469 22.230469-22.230469 12.253906 0 22.226562 9.972656 22.226562 22.230469 0 12.257812-9.96875 22.230469-22.226562 22.230469zm0 0" />
        <path d="m264.640625 99.117188c0-20.527344-16.703125-37.230469-37.230469-37.230469s-37.226562 16.703125-37.226562 37.230469c0 20.527343 16.699218 37.230468 37.226562 37.230468s37.230469-16.703125 37.230469-37.230468zm-59.460937 0c0-12.257813 9.972656-22.230469 22.230468-22.230469 12.257813 0 22.230469 9.972656 22.230469 22.230469 0 12.257812-9.972656 22.230468-22.230469 22.230468-12.257812 0-22.230468-9.972656-22.230468-22.230468zm0 0" />
        <path d="m395.230469 135.914062c0-12.332031-10.03125-22.363281-22.363281-22.363281-12.332032 0-22.367188 10.03125-22.367188 22.363281 0 12.332032 10.035156 22.363282 22.367188 22.363282 12.332031 0 22.363281-10.03125 22.363281-22.363282zm-29.730469 0c0-4.0625 3.304688-7.363281 7.367188-7.363281s7.363281 3.300781 7.363281 7.363281-3.300781 7.363282-7.363281 7.363282-7.367188-3.300782-7.367188-7.363282zm0 0" />
        <path d="m325.027344 190.75c-12.332032 0-22.363282 10.03125-22.363282 22.363281s10.03125 22.367188 22.363282 22.367188c12.332031 0 22.367187-10.035157 22.367187-22.367188s-10.035156-22.363281-22.367187-22.363281zm0 29.730469c-4.058594 0-7.363282-3.304688-7.363282-7.367188 0-4.058593 3.304688-7.363281 7.363282-7.363281 4.0625 0 7.367187 3.304688 7.367187 7.363281 0 4.0625-3.304687 7.367188-7.367187 7.367188zm0 0" />
        <path d="m307.589844 113.683594c12.332031 0 22.363281-10.03125 22.363281-22.363282 0-12.332031-10.03125-22.367187-22.363281-22.367187-12.332032 0-22.363282 10.035156-22.363282 22.367187 0 12.332032 10.03125 22.363282 22.363282 22.363282zm0-29.730469c4.058594 0 7.363281 3.304687 7.363281 7.367187s-3.304687 7.363282-7.363281 7.363282c-4.0625 0-7.363282-3.304688-7.363282-7.363282 0-4.0625 3.300782-7.367187 7.363282-7.367187zm0 0" />
        <path d="m233.164062 173.5625c0 12.332031 10.035157 22.367188 22.367188 22.367188s22.363281-10.035157 22.363281-22.367188-10.03125-22.363281-22.363281-22.363281c-12.335938 0-22.367188 10.03125-22.367188 22.363281zm29.730469 0c0 4.0625-3.304687 7.367188-7.367187 7.367188-4.058594 0-7.363282-3.304688-7.363282-7.367188 0-4.058594 3.304688-7.363281 7.363282-7.363281 4.0625 0 7.367187 3.304687 7.367187 7.363281zm0 0" />
        <path d="m88.960938 196.75c-12.332032 0-22.363282 10.03125-22.363282 22.363281s10.03125 22.367188 22.363282 22.367188c12.332031 0 22.363281-10.035157 22.363281-22.367188s-10.03125-22.363281-22.363281-22.363281zm0 29.730469c-4.0625 0-7.363282-3.304688-7.363282-7.367188 0-4.058593 3.300782-7.363281 7.363282-7.363281 4.058593 0 7.363281 3.304688 7.363281 7.363281 0 4.0625-3.304688 7.367188-7.363281 7.367188zm0 0" />
        <path d="m174.332031 311.992188c12.332031 0 22.363281-10.03125 22.363281-22.363282 0-12.332031-10.035156-22.367187-22.363281-22.367187-12.332031 0-22.367187 10.035156-22.367187 22.367187 0 12.332032 10.035156 22.363282 22.367187 22.363282zm0-29.730469c4.058594 0 7.363281 3.304687 7.363281 7.367187 0 4.058594-3.304687 7.363282-7.363281 7.363282-4.0625 0-7.367187-3.304688-7.367187-7.363282 0-4.0625 3.304687-7.367187 7.367187-7.367187zm0 0" />
        <path d="m140.5 151.222656c2.105469 0 4.226562-.300781 6.304688-.910156 11.835937-3.460938 18.652343-15.902344 15.191406-27.742188-1.675782-5.730468-5.484375-10.472656-10.722656-13.339843-5.242188-2.871094-11.285157-3.527344-17.019532-1.851563-11.835937 3.460938-18.652344 15.902344-15.191406 27.738282 1.675781 5.734374 5.484375 10.476562 10.722656 13.34375 3.339844 1.828124 7.007813 2.761718 10.714844 2.761718zm-2.035156-29.445312c.683594-.199219 1.382812-.300782 2.074218-.300782 1.222657 0 2.429688.308594 3.527344.910157 1.726563.945312 2.980469 2.503906 3.53125 4.394531 1.140625 3.898438-1.105468 7.996094-5 9.132812-1.890625.550782-3.878906.335938-5.605468-.609374-1.722657-.945313-2.976563-2.503907-3.53125-4.394532-1.140626-3.894531 1.105468-7.992187 5.003906-9.132812zm0 0" />
        <path d="m116.679688 300.59375c0-12.332031-10.035157-22.363281-22.367188-22.363281s-22.363281 10.03125-22.363281 22.363281 10.03125 22.367188 22.363281 22.367188c12.332031-.003907 22.367188-10.035157 22.367188-22.367188zm-22.367188 7.363281c-4.058594 0-7.363281-3.304687-7.363281-7.363281 0-4.0625 3.304687-7.367188 7.363281-7.367188 4.0625 0 7.367188 3.304688 7.367188 7.367188 0 4.058594-3.304688 7.363281-7.367188 7.363281zm0 0" />
        <path d="m303.671875 437.355469c12.332031 0 22.363281-10.03125 22.363281-22.363281 0-12.332032-10.03125-22.363282-22.363281-22.363282s-22.363281 10.03125-22.363281 22.363282c0 12.332031 10.03125 22.363281 22.363281 22.363281zm0-29.726563c4.0625 0 7.363281 3.304688 7.363281 7.363282 0 4.0625-3.300781 7.363281-7.363281 7.363281-4.058594 0-7.363281-3.300781-7.363281-7.363281 0-4.058594 3.304687-7.363282 7.363281-7.363282zm0 0" />
        <path d="m255.527344 352.6875c12.332031 0 22.367187-10.03125 22.367187-22.363281s-10.035156-22.363281-22.367187-22.363281c-12.332032 0-22.363282 10.03125-22.363282 22.363281s10.03125 22.363281 22.363282 22.363281zm0-29.730469c4.0625 0 7.367187 3.304688 7.367187 7.367188 0 4.058593-3.304687 7.363281-7.367187 7.363281-4.058594 0-7.363282-3.304688-7.363282-7.363281 0-4.0625 3.304688-7.367188 7.363282-7.367188zm0 0" />
        <path d="m398.128906 164.625c-20.527344 0-37.226562 16.703125-37.226562 37.230469 0 20.527343 16.699218 37.230469 37.226562 37.230469s37.230469-16.703126 37.230469-37.230469c0-20.527344-16.703125-37.230469-37.230469-37.230469zm0 59.460938c-12.257812 0-22.226562-9.972657-22.226562-22.230469 0-12.257813 9.96875-22.230469 22.226562-22.230469 12.257813 0 22.230469 9.972656 22.230469 22.230469 0 12.257812-9.972656 22.230469-22.230469 22.230469zm0 0" />
        <path d="m511.015625 239.636719c-5.050781-79.984375-47.402344-152.574219-113.582031-196.730469-4.96875-3.3125-11.128906-4.484375-16.984375-3.257812-1.851563-5.679688-5.925781-10.441407-11.269531-13.089844-35.503907-17.625-73.742188-26.558594-113.652344-26.558594-39.90625 0-78.144532 8.933594-113.652344 26.558594-5.339844 2.652344-9.414062 7.410156-11.265625 13.089844-5.855469-1.226563-12.019531-.054688-16.988281 3.257812-66.117188 44.117188-108.523438 116.679688-113.5781252 196.730469-.3749998 5.972656 1.6992192 11.902343 5.6914062 16.363281-3.996094 4.460938-6.066406 10.390625-5.6914062 16.363281 5.0507812 79.984375 47.4023432 152.574219 113.5820312 196.730469 4.789062 3.195312 10.890625 4.535156 16.984375 3.257812 1.851563 5.679688 5.925781 10.441407 11.269531 13.09375 35.503906 17.621094 73.742188 26.554688 113.648438 26.554688 39.910156 0 78.148437-8.933594 113.652344-26.558594 11.574218-5.742187 15.839843-20.160156 9.378906-31.351562l-110.039063-190.589844h80.507813v42.5625c0 13.800781 10.878906 26.03125 26.507812 26.03125 14.71875 0 26.695313-11.933594 26.695313-26.601562v-6.878907c0-2.425781 1.972656-4.398437 4.398437-4.398437 2.425782 0 4.398438 1.972656 4.398438 4.398437v53.457031c0 12.171876 9.902344 22.070313 22.074218 22.070313 12.167969 0 22.070313-9.898437 22.070313-22.070313v-88.570312h33.375c12.960937 0 23.28125-10.953125 22.46875-23.863281zm-386.476563 172.480469c-8.359374-7.023438-14.003906-18.105469-22.0625-27.699219-8.046874-9.578125-17.976562-17.03125-23.464843-26.515625-5.429688-9.378906-6.964844-21.714844-11.273438-33.554688-4.25-11.671875-11.023437-22.042968-12.929687-32.945312-1.480469-8.441406.003906-17.851563.660156-27.902344h187.070312l-93.554687 162.035156c-9-4.4375-17.808594-7.84375-24.445313-13.417968zm-69.730468-191.519532c1.90625-10.902344 8.679687-21.273437 12.929687-32.945312 4.3125-11.851563 5.84375-24.171875 11.273438-33.554688 5.484375-9.484375 15.421875-16.941406 23.464843-26.515625 8.066407-9.609375 13.699219-20.671875 22.0625-27.699219 6.636719-5.574218 15.449219-8.984374 24.449219-13.421874l39.464844 68.359374c2.070313 3.585938 6.660156 4.816407 10.246094 2.746094 3.585937-2.070312 4.816406-6.660156 2.746093-10.246094l-39.476562-68.375c8.289062-5.570312 15.613281-11.5 23.84375-14.496093 10.128906-3.6875 22.539062-3.050781 35.003906-5.230469 12.1875-2.136719 23.5625-7.003906 34.710938-7.003906 11.152344 0 22.527344 4.867187 34.714844 7.003906 12.464843 2.179688 24.878906 1.542969 35.003906 5.230469 8.226562 2.996093 15.546875 8.921875 23.84375 14.496093l-93.5625 162.054688-36.582032-63.367188c-2.074218-3.585937-6.660156-4.816406-10.246093-2.746093-3.585938 2.074219-4.816407 6.660156-2.746094 10.246093l36.585937 63.367188h-187.066406c-.660156-10.050781-2.144531-19.460938-.664062-27.902344zm93.738281-180.605468c33.414063-16.582032 69.410156-24.992188 106.980469-24.992188 37.574218 0 73.570312 8.410156 106.984375 24.992188 3.8125 1.890624 5.214843 6.679687 3.054687 10.417968l-8.957031 15.511719c-8.257813-5.621094-16.265625-11.9375-26.234375-15.566406-12.492188-4.546875-25.765625-3.847657-37.546875-5.914063-11.421875-1.996094-23.644531-7.226562-37.300781-7.226562-13.652344 0-25.878906 5.230468-37.296875 7.226562-11.777344 2.066406-25.054688 1.363282-37.550781 5.914063-9.964844 3.628906-17.953126 9.929687-26.230469 15.566406-.066407-.113281-8.953125-15.503906-8.953125-15.503906-.003906-.003907-.003906-.007813-.003906-.007813-2.15625-3.734375-.761719-8.523437 3.054687-10.417968zm-133.53125 200.585937c4.695313-74.421875 44.671875-143.652344 106.933594-185.195313 3.542969-2.363281 8.402343-1.199218 10.566406 2.550782l8.953125 15.507812c-9.015625 4.378906-18.507812 8.179688-26.578125 14.957032-10.285156 8.640624-16.304687 20.496093-23.902344 29.539062-7.574219 9.015625-18.214843 16.988281-24.960937 28.648438-6.6875 11.558593-8.3125 24.746093-12.382813 35.933593-3.996093 10.976563-11.269531 22.109375-13.613281 35.492188-1.800781 10.285156-.316406 20.429687.402344 30.488281h-17.925782c-4.328124 0-7.765624-3.632812-7.492187-7.921875zm106.933594 216.035156c-62.261719-41.539062-102.238281-110.769531-106.933594-185.195312-.273437-4.285157 3.164063-7.917969 7.496094-7.917969h17.921875c-.71875 10.074219-2.203125 20.203125-.402344 30.488281 2.34375 13.382813 9.617188 24.519531 13.613281 35.492188 4.070313 11.183593 5.699219 24.375 12.382813 35.933593 6.746094 11.65625 17.390625 19.632813 24.964844 28.652344 7.597656 9.042969 13.617187 20.898438 23.902343 29.535156 8.0625 6.777344 17.550781 10.574219 26.574219 14.957032l-8.953125 15.503906c-2.152344 3.734375-7.003906 4.929688-10.566406 2.550781zm240.5625 15.394531c-33.414063 16.582032-69.410157 24.992188-106.984375 24.992188-37.574219 0-73.566406-8.410156-106.980469-24.992188-3.8125-1.894531-5.214844-6.679687-3.054687-10.417968l8.957031-15.511719c8.261719 5.625 16.265625 11.9375 26.230469 15.566406 3.886718 1.417969 8.195312-.585937 9.613281-4.484375 1.417969-3.890625-.589844-8.195312-4.480469-9.609375-8.226562-2.996093-15.550781-8.921875-23.84375-14.5l93.558594-162.050781 93.5625 162.050781c-8.296875 5.578125-15.617188 11.503907-23.84375 14.5-10.128906 3.6875-22.539063 3.046875-35.003906 5.230469-12.1875 2.132812-23.5625 7.003906-34.714844 7.003906-11.890625 0-23.566406-5.433594-37.550782-7.457031-4.101562-.589844-7.902343 2.253906-8.496093 6.351563-.589844 4.101562 2.253906 7.90625 6.351562 8.496093 12.925781 1.867188 25.25 7.609375 39.695313 7.609375 13.65625 0 25.875-5.226562 37.300781-7.226562 11.773437-2.0625 25.050781-1.363282 37.550781-5.914063 9.960938-3.625 17.957032-9.929687 26.230469-15.566406l8.957031 15.511719c2.15625 3.734375.761719 8.523437-3.054687 10.417968zm85.160156-223.507812c-4.140625 0-7.5 3.359375-7.5 7.5v96.070312c0 3.898438-3.171875 7.070313-7.070313 7.070313-3.898437 0-7.070312-3.171875-7.070312-7.070313v-53.457031c0-10.699219-8.703125-19.398437-19.402344-19.398437-10.695312 0-19.398437 8.699218-19.398437 19.398437v6.878907c0 5.980468-4.664063 11.601562-12.171875 11.601562-6.097656 0-11.03125-4.933594-11.03125-11.03125l.003906-42.5625h56.714844c4.140625 0 7.5-3.359375 7.5-7.5s-3.359375-7.5-7.5-7.5h-152.226563l93.550781-162.035156c8.988282 4.429687 17.808594 7.839844 24.449219 13.417968 8.363281 7.023438 14 18.101563 22.0625 27.699219 8.046875 9.578125 17.976563 17.027344 23.464844 26.515625 5.429687 9.378906 6.960937 21.714844 11.273437 33.554688 4.25 11.671875 11.019532 22.042968 12.929688 32.945312 1.480469 8.441406-.003906 17.851563-.664062 27.902344zm40.875 0h-17.921875c.71875-10.074219 2.203125-20.203125.402344-30.488281-2.34375-13.382813-9.617188-24.519531-13.613282-35.492188-4.066406-11.179687-5.699218-24.378906-12.382812-35.933593-6.746094-11.660157-17.394531-19.640626-24.964844-28.652344-7.589844-9.039063-13.617187-20.898438-23.898437-29.535156-8.066407-6.773438-17.546875-10.570313-26.578125-14.957032l8.953125-15.507812c2.164062-3.75 7.027343-4.914063 10.566406-2.550782 62.261719 41.542969 102.238281 110.773438 106.933594 185.195313.273437 4.296875-3.171875 7.921875-7.496094 7.921875zm0 0" />
      </svg>
    ),
  },

  {
    title: "Pasta",
    id: 4,
    icon: (
      <svg
        className="w-7 h-7 group-hover:fill-primary"
        enableBackground="new 0 0 512 512"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g>
            <path d="m502 357.995h-16.506c-4.485-44.053-38.272-79.562-81.502-86.688-26.83-28.836-64.534-45.312-103.992-45.312-23.029 0-45.704 5.605-65.953 16.233-16.958-8.926-35.647-14.338-55.117-15.817-.589-2.453-.898-4.992-.898-7.579 0-8.598 3.348-16.682 9.428-22.761 9.857-9.857 15.286-22.963 15.286-36.904s-5.429-27.046-15.286-36.903c-1.92-1.92-3.544-4.027-4.876-6.259h22.088c15.806 0 29.318-9.998 34.554-24h48.168c5.522 0 10-4.477 10-10s-4.478-10-10-10h-45.844v-28h236.45c7.72 0 14 6.28 14 14s-6.28 14-14 14h-100.606c-5.522 0-10 4.477-10 10s4.478 10 10 10h100.606c18.748 0 34-15.252 34-34s-15.252-34-34-34h-238.775c-5.236-14.002-18.747-24-34.554-24h-136.835c-5.523 0-10 4.477-10 10s4.477 10 10 10h19.413c4.431 5.64 6.842 12.549 6.842 19.833 0 2.795-.36 5.533-1.046 8.167h-29.045c-5.523 0-10 4.477-10 10s4.477 10 10 10h15.965c-6.296 8.305-9.773 18.072-10.434 28h-1.695c-5.523 0-10 4.477-10 10s4.477 10 10 10h4.238c2.474 7.461 6.662 14.474 12.589 20.401 6.08 6.08 9.428 14.164 9.428 22.762s-3.348 16.682-9.428 22.761c-9.857 9.857-15.286 22.963-15.286 36.904 0 13.202 4.876 25.652 13.764 35.306-33.292 24.785-53.91 62.481-56.784 103.856h-16.357c-5.523 0-10 4.477-10 10 0 79.402 64.598 144 144 144h224c79.402 0 144-64.598 144-144 0-5.523-4.478-10-10-10zm-36.663 0h-24.28c-4.705-25.012-26.699-44-53.057-44s-48.352 18.988-53.057 44h-24.28c4.927-38.301 37.717-68 77.337-68s72.41 29.7 77.337 68zm-44.84 0h-64.994c4.281-13.882 17.228-24 32.497-24s28.217 10.118 32.497 24zm-235.621 0c-5.113-6.525-7.352-14.58-6.716-22.449 10.666 3.349 19.037 11.83 22.324 22.449zm36.181 0c-3.585-18.947-17.153-34.571-35.138-40.928.493-.567 1.001-1.126 1.54-1.666 5.495-5.496 9.493-11.926 12.02-18.78 24.794 10.984 42.336 34.45 45.861 61.374zm44.424 0c-1.799-17.916-8.416-34.792-19.442-49.286-11.108-14.601-26.314-25.91-43.37-32.39-.403-9.736-3.518-19.373-9.329-27.688 12.435 2.618 24.319 7.156 35.287 13.453.217.138.439.263.665.383 9.501 5.535 18.307 12.39 26.167 20.47 19.935 20.494 31.846 46.844 34.13 75.059h-24.108zm21.881-66.975c4.156-.676 8.376-1.025 12.638-1.025 8.199 0 16.324 1.299 24.055 3.797-8.858 7.644-16.336 16.844-22.009 27.171-3.679-10.504-8.602-20.545-14.684-29.943zm12.638-45.025c26.916 0 52.88 8.929 73.976 25.008-10.627 1.53-20.707 4.769-29.954 9.431-13.589-6.834-28.708-10.439-44.023-10.439-8.851 0-17.567 1.193-26.006 3.511-1.366-1.529-2.761-3.038-4.199-4.516-4.955-5.094-10.234-9.768-15.788-14.009 14.526-5.902 30.16-8.986 45.994-8.986zm-126.683-64.066c-9.857 9.857-15.286 22.963-15.286 36.904s5.429 27.046 15.286 36.903c12.551 12.551 12.551 32.973 0 45.523-15.311 15.312-19.097 37.848-11.366 56.736h-21.402c-9.889-12.62-9.034-30.977 2.583-42.594 20.349-20.349 20.349-53.458 0-73.807-6.08-6.08-9.428-14.164-9.428-22.762s3.348-16.682 9.428-22.761c9.857-9.857 15.286-22.963 15.286-36.904s-5.429-27.046-15.286-36.903c-12.551-12.551-12.551-32.973 0-45.523 15.312-15.312 19.097-37.847 11.366-56.736h21.405c4.431 5.64 6.842 12.549 6.842 19.833 0 8.598-3.348 16.682-9.428 22.761-20.349 20.349-20.349 53.458 0 73.807 6.08 6.08 9.428 14.164 9.428 22.762s-3.348 16.681-9.428 22.761zm48.233-145.045v42.242c0 9.307-7.572 16.879-16.879 16.879h-26.429c.763-7.041 3.831-13.878 9.217-19.264 15.312-15.312 19.097-37.847 11.366-56.736h5.846c9.308 0 16.879 7.572 16.879 16.879zm-122.745 159.187c9.857-9.857 15.286-22.963 15.286-36.904s-5.429-27.046-15.286-36.903c-12.551-12.551-12.551-32.973 0-45.523 15.312-15.312 19.097-37.847 11.366-56.736h21.405c4.431 5.64 6.842 12.549 6.842 19.833 0 8.598-3.348 16.682-9.428 22.761-20.349 20.349-20.349 53.458 0 73.807 6.08 6.08 9.428 14.164 9.428 22.762s-3.348 16.682-9.428 22.761c-9.857 9.857-15.286 22.963-15.286 36.904s5.429 27.046 15.286 36.903c12.551 12.551 12.551 32.973 0 45.523-15.312 15.312-19.097 37.847-11.366 56.736h-21.402c-9.889-12.62-9.034-30.977 2.583-42.594 20.349-20.349 20.349-53.458 0-73.807-6.08-6.08-9.428-14.164-9.428-22.762s3.348-16.681 9.428-22.761zm-5.498 75.45c2.288 10.38-.587 21.68-8.645 29.737-15.312 15.312-19.097 37.847-11.366 56.736h-26.878c2.774-34.247 19.706-65.456 46.889-86.473zm274.693 220.474h-224c-65.006 0-118.49-50.287-123.601-114h471.201c-5.111 63.713-58.594 114-123.6 114z" />
            <circle cx="332.395" cy="82.005" r="10" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    title: "Burger",
    id: 5,
    icon: (
      <svg
        className="w-7 h-7 group-hover:fill-primary"
        viewBox="0 -3 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m294.671875 63.957031c32.839844 5.085938 63.300781 16.640625 88.089844 33.410157 23.972656 16.21875 41.597656 36.539062 50.972656 58.769531 1.609375 3.824219 5.316406 6.121093 9.21875 6.121093 1.296875 0 2.613281-.253906 3.882813-.789062 5.089843-2.148438 7.472656-8.011719 5.328124-13.101562-10.882812-25.808594-31.007812-49.171876-58.195312-67.566407-27.21875-18.414062-60.496094-31.074219-96.238281-36.609375-5.449219-.84375-10.566407 2.894532-11.410157 8.355469-.847656 5.453125 2.890626 10.5625 8.351563 11.410156zm0 0" />
        <path d="m100.351562 138.972656c1.582032 3.796875 5.609376 6.355469 9.71875 6.160156 4.058594-.195312 7.785157-3.066406 9.019532-6.9375 1.25-3.917968-.148438-8.492187-3.429688-10.988281-3.394531-2.578125-8.382812-2.671875-11.867187-.210937-3.707031 2.617187-5.15625 7.792968-3.441407 11.976562zm0 0" />
        <path d="m148.53125 101.734375c1.597656 3.839844 5.695312 6.425781 9.855469 6.160156 4.011719-.261719 7.660156-3.121093 8.890625-6.945312 1.253906-3.890625-.152344-8.421875-3.378906-10.929688-3.410157-2.644531-8.484376-2.753906-11.984376-.21875-3.640624 2.636719-5.117187 7.773438-3.382812 11.933594zm0 0" />
        <path d="m200.289062 138.972656c1.582032 3.796875 5.613282 6.355469 9.722657 6.160156 4.058593-.195312 7.792969-3.066406 9.027343-6.9375 1.25-3.921874-.15625-8.496093-3.441406-10.988281-3.394531-2.578125-8.378906-2.671875-11.867187-.210937-3.703125 2.617187-5.15625 7.792968-3.441407 11.976562zm0 0" />
        <path d="m512 316.9375c0-22.019531-14.148438-40.785156-33.824219-47.71875v-25.023438c3.164063-1.167968 6.210938-2.707031 9.074219-4.628906 11.386719-7.652344 17.917969-19.730468 17.917969-33.148437 0-8.390625-2.59375-16.332031-7.414063-23.011719 2.4375-5.777344 3.171875-12.191406 1.988282-18.511719-8.5625-45.796875-37.96875-87.71875-82.800782-118.050781-44.652344-30.207031-101.808594-46.84375-160.941406-46.84375s-116.289062 16.636719-160.941406 46.84375c-44.832032 30.328125-74.238282 72.253906-82.800782 118.050781-1.484374 7.925781.042969 15.996094 4.175782 22.773438-3.113282 5.710937-4.734375 12.070312-4.734375 18.75 0 13.417969 6.53125 25.503906 17.921875 33.152343 1.359375.914063 2.769531 1.730469 4.203125 2.476563v27.171875c-19.675781 6.933594-33.824219 25.699219-33.824219 47.71875v2.03125c0 14.585938 6.214844 27.742188 16.125 36.984375-2.890625 5.5625-4.425781 11.75-4.425781 18.121094 0 10.011719 3.640625 19.273437 10.214843 26.511719v36.085937c0 38.550781 31.363282 69.917969 69.917969 69.917969h328.335938c38.554687 0 69.917969-31.367188 69.917969-69.917969v-31.550781c9.621093-7.667969 15.082031-18.796875 15.082031-31.050782 0-7.683593-2.164063-14.957031-6.207031-21.246093 8.097656-8.96875 13.039062-20.84375 13.039062-33.855469zm-20 0v2.03125c0 10.324219-5.148438 19.464844-13.007812 25.007812-5.121094 3.609376-11.3125 5.578126-17.578126 5.578126h-155.066406l63.769532-63.203126h91.292968c16.867188 0 30.589844 13.722657 30.589844 30.585938zm-340.433594-30.585938 1.585938 1.589844 10.257812 10.253906-21.472656 21.476563-33.320312-33.320313zm94.417969 66.132813-61.351563-61.347656c0-.003907-.003906-.007813-.007812-.011719l-4.773438-4.773438h161.8125l-66.832031 66.09375c-.003906.003907-.007812.007813-.011719.015626-.007812.007812-.019531.015624-.027343.023437l-14.40625 14.40625zm-214.070313-183.917969c7.574219-40.5 33.980469-77.847656 74.351563-105.160156 41.378906-27.992188 94.554687-43.40625 149.734375-43.40625s108.355469 15.414062 149.734375 43.40625c40.371094 27.3125 66.773437 64.660156 74.351563 105.160156 1.402343 7.511719-4.597657 14.6875-12.222657 14.6875h-423.726562c-7.636719 0-13.625-7.175781-12.222657-14.6875zm.523438 32.511719c3.714844 1.4375 7.71875 2.175781 11.699219 2.175781h423.726562c5.519531 0 11.070313-1.429687 15.882813-4.136718.941406 2.3125 1.421875 4.800781 1.421875 7.296874 0 6.644532-3.304688 12.675782-9.070313 16.546876-5.894531 3.960937-13.402344 4.910156-20.144531 2.777343-3.332031-1.054687-6.476563-2.414062-9.914063-3.148437-3.71875-.796875-7.523437-1.148438-11.324218-1.148438-17.863282 0-27.449219 6.765625-35.148438 12.199219-6.757812 4.773437-12.09375 8.542969-23.609375 8.542969s-16.851562-3.769532-23.609375-8.539063c-7.699218-5.441406-17.28125-12.203125-35.148437-12.203125-17.863281 0-27.445313 6.765625-35.144531 12.203125-6.757813 4.769531-12.09375 8.539063-23.609376 8.539063-11.515624 0-16.855468-3.769532-23.613281-8.542969-7.699219-5.4375-17.28125-12.199219-35.144531-12.199219s-27.449219 6.765625-35.148438 12.199219c-6.757812 4.773437-12.097656 8.542969-23.609374 8.542969-11.519532 0-16.855469-3.769532-23.617188-8.542969-7.699219-5.4375-17.28125-12.199219-35.148438-12.199219-7.066406 0-13.4375 1.199219-19.480468 3.664063-7.136719 2.914062-15.488282 2.175781-21.910156-2.140625-5.765626-3.871094-9.070313-9.902344-9.070313-16.546875-.003906-1.839844.246094-3.628907.734375-5.339844zm23.375 45.738281c5.246094-.253906 10.167969-1.578125 15.050781-3.4375 4.871094-1.859375 10.183594-2.226562 15.34375-1.765625 8.828125.785157 13.65625 4.195313 19.570313 8.367188 7.699218 5.4375 17.28125 12.203125 35.148437 12.203125 17.863281 0 27.445313-6.765625 35.144531-12.203125 6.757813-4.769531 12.097657-8.539063 23.613282-8.539063s16.851562 3.769532 23.609375 8.539063c7.699219 5.4375 17.285156 12.203125 35.148437 12.203125 17.863282 0 27.445313-6.765625 35.144532-12.203125 6.757812-4.769531 12.097656-8.539063 23.609374-8.539063 11.515626 0 16.855469 3.769532 23.613282 8.539063 7.699218 5.4375 17.28125 12.203125 35.144531 12.203125s27.445313-6.765625 35.144531-12.203125c6.761719-4.769531 12.097656-8.539063 23.613282-8.539063 4.085937 0 8.097656.679688 11.90625 2.175782 3.714843 1.460937 7.582031 2.511718 11.554687 2.976562v19.761719h-92.167969c-.003906 0-.003906 0-.007812 0h-.003906-210.253907c-.007812 0-.019531 0-.027343 0-.011719 0-.023438 0-.03125 0h-101.855469v-19.484375c.664062-.003906 1.324219-.023438 1.988281-.054688zm-35.8125 70.121094c0-16.863281 13.722656-30.585938 30.585938-30.585938h29.75l54.53125 54.535157c1.875 1.875 4.417968 2.925781 7.070312 2.925781s5.195312-1.050781 7.070312-2.925781l28.546876-28.546875 37.214843 37.214844h-164.183593c-5.285157 0-10.539063-1.398438-15.125-4.019532-9.226563-5.269531-15.460938-15.199218-15.460938-26.566406zm13.351562 49.589844c5.503907 1.996094 11.378907 3.027344 17.234376 3.027344h184.183593l18.546875 18.546874c3.835938 3.839844 10.261719 3.847657 14.109375.03125l18.746094-18.578124h175.238281c5.640625 0 11.273438-.957032 16.601563-2.800782 1.117187-.386718 2.257812-.777344 3.308593-1.316406.339844-.175781.832032-.566406 1.234376-.539062.554687.039062.699218.746093.898437 1.191406 1.082031 2.386718 1.660156 5 1.707031 7.621094.167969 9.433593-6.625 17.328124-15.496094 19.898437-5.082031 1.476563-10.585937 1.148437-15.484374-.851563-6.03125-2.464843-12.402344-3.664062-19.46875-3.664062-17.863282 0-27.445313 6.765625-35.144532 12.203125-6.761718 4.773437-12.097656 8.542969-23.613281 8.542969-11.511719 0-16.851563-3.769532-23.609375-8.542969-7.699219-5.4375-17.28125-12.203125-35.144531-12.203125s-27.445313 6.765625-35.148438 12.203125c-6.757812 4.773437-12.09375 8.542969-23.609375 8.542969s-16.851562-3.769532-23.613281-8.542969c-7.699219-5.4375-17.28125-12.203125-35.144531-12.203125-17.863282 0-27.445313 6.765625-35.148438 12.203125-6.757812 4.773437-12.09375 8.542969-23.609375 8.542969-11.519531 0-16.855469-3.773438-23.613281-8.542969-7.703125-5.4375-17.285156-12.203125-35.152344-12.203125-7.066406 0-13.4375 1.199219-19.476562 3.667969-6.527344 2.664062-14.136719 2.3125-20.296875-1.15625-5.449219-3.066407-9.507813-8.324219-10.460938-14.570313-.285156-1.847656-.300781-3.738281-.054687-5.59375.070312-.539062.988281-5.09375 1.480468-4.914062zm436.734376 70.144531c0 27.523437-22.394532 49.917969-49.917969 49.917969h-328.335938c-27.523437 0-49.917969-22.394532-49.917969-49.917969v-23.71875c8.210938 2.328125 17.074219 2.164063 25.519532-.644531.171875-.058594.34375-.117188.511718-.171875.769532-.269531 1.539063-.546875 2.296876-.859375 3.59375-1.46875 7.492187-2.179688 11.917968-2.179688 11.519532 0 16.855469 3.765625 23.613282 8.539063 7.703124 5.4375 17.285156 12.203125 35.152343 12.203125 17.863281 0 27.445313-6.765625 35.144531-12.203125 6.757813-4.773438 12.097657-8.539063 23.609376-8.539063 11.515624 0 16.855468 3.765625 23.613281 8.539063 7.699219 5.4375 17.28125 12.203125 35.148437 12.203125 17.863282 0 27.445313-6.765625 35.144532-12.203125 6.757812-4.773438 12.097656-8.539063 23.609374-8.539063 11.515626 0 16.855469 3.765625 23.609376 8.539063 7.699218 5.4375 17.285156 12.203125 35.148437 12.203125s27.445313-6.765625 35.144531-12.203125c6.757813-4.773438 12.097656-8.539063 23.613282-8.539063 2.980468 0 5.96875.332032 8.847656 1.132813 2.738281.761719 5.324218 1.964843 8.0625 2.738281 5.945312 1.675781 12.363281 2.03125 18.460937 1.039062v22.664063zm0 0" />
        <path d="m225.910156 101.734375c1.582032 3.796875 5.613282 6.375 9.726563 6.164063 4.058593-.207032 7.78125-3.066407 9.019531-6.933594 1.257812-3.921875-.152344-8.488282-3.429688-10.992188-3.386718-2.589844-8.382812-2.6875-11.863281-.214844-3.691406 2.617188-5.199219 7.792969-3.453125 11.976563zm0 0" />
        <path d="m271.019531 145.8125c1.582031 3.800781 5.609375 6.355469 9.71875 6.160156 4.0625-.195312 7.777344-3.070312 9.023438-6.933594 1.261719-3.917968-.152344-8.496093-3.433594-10.992187-3.394531-2.582031-8.382813-2.667969-11.867187-.210937-3.703126 2.617187-5.15625 7.792968-3.441407 11.976562zm0 0" />
        <path d="m245.488281 56.023438c3.558594 2.371093 8.5625 2.136718 11.871094-.574219 3.234375-2.648438 4.527344-7.339844 3.035156-11.253907-1.453125-3.800781-5.304687-6.507812-9.386719-6.488281-4.039062.023438-7.878906 2.675781-9.308593 6.457031-1.597657 4.234376.035156 9.335938 3.789062 11.859376zm0 0" />
      </svg>
    ),
  },
  {
    title: "Dessert",
    id: 6,
    icon: (
      <svg
        className="w-7 h-7 group-hover:fill-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 446.96 446.96"
      >
        <path
          d="M370.279,168.929c4.355-8.182,6.361-17.465,5.716-26.904c-1.678-24.58-21.475-44.476-46.049-46.28
      c-4.813-0.353-9.586-0.026-14.239,0.975c-14.696-13.167-43.051-22.531-65.038-28.201c-9.792-2.525-17.018-9.947-19.327-19.853
      c-2.278-9.771,0.862-19.478,8.401-25.965c0.621-0.534,0.914-0.731,0.907-0.731c-0.001,0-0.002,0-0.003,0.001
      c2.251-1.227,3.652-3.585,3.651-6.149c-0.001-2.566-1.405-4.926-3.66-6.15c-14.875-8.076-32.343-11.251-49.188-8.935
      c-17.421,2.393-33.218,10.246-45.684,22.71C126.819,42.396,118.757,69.78,123.832,95.7c-2.894-0.177-5.817-0.103-8.755,0.225
      c-23.918,2.665-42.47,22.053-44.112,46.1c-0.645,9.439,1.36,18.723,5.716,26.905c-24.068,10.797-39.525,35.88-37.652,62.859
      c1.08,15.553,7.893,30.173,19.182,41.166c1.352,1.316,2.757,2.563,4.204,3.746l21.093,149.093c0.405,2.864,2.53,5.185,5.349,5.838
      c44.036,10.219,89.33,15.329,134.625,15.329s90.589-5.109,134.625-15.329c2.818-0.654,4.943-2.974,5.349-5.838l21.093-149.094
      c1.448-1.183,2.853-2.43,4.204-3.746c11.289-10.993,18.102-25.612,19.182-41.166C409.805,204.809,394.348,179.727,370.279,168.929z
       M77.876,286.051c6.929,2.949,14.363,4.67,21.988,5.007c0.827,0.036,1.654,0.055,2.479,0.06l13.118,131.786
      c-6.277-1.182-12.536-2.456-18.768-3.847L77.876,286.051z M310.568,281.541c6.204,3.842,13.02,6.578,20.126,8.118l-13.502,135.757
      c-6.559,1.065-13.138,2.016-19.733,2.855l9.537-143.579C308.202,283.664,309.395,282.618,310.568,281.541z M283.321,429.894
      c-6.478,0.664-12.967,1.231-19.465,1.679l4.116-124.013c8.475-3.11,16.603-7.12,24.27-11.976L283.321,429.894z M249.822,432.362
      c-6.444,0.289-12.892,0.478-19.343,0.554V315.221c7.94-0.422,15.746-1.558,23.343-3.383L249.822,432.362z M216.48,432.917
      c-6.45-0.077-12.899-0.265-19.343-0.554l-4-120.524c7.597,1.825,15.403,2.961,23.343,3.383V432.917z M178.987,307.559l4.116,124.013
      c-6.498-0.448-12.987-1.015-19.465-1.679l-8.92-134.31C162.385,300.44,170.513,304.449,178.987,307.559z M139.964,284.694
      l9.536,143.578c-6.59-0.839-13.165-1.789-19.72-2.853l-13.513-135.76c7.106-1.54,13.921-4.276,20.125-8.117
      C137.565,282.619,138.759,283.665,139.964,284.694z M350.267,419.058c-6.228,1.39-12.482,2.663-18.755,3.845l13.107-131.784
      c0.825-0.004,1.651-0.024,2.478-0.06c7.625-0.337,15.059-2.058,21.988-5.007L350.267,419.058z M393.965,230.818
      c-0.841,12.115-6.162,23.517-14.981,32.105c-8.819,8.587-20.363,13.612-32.507,14.149c-11.811,0.523-23.034-2.968-32.414-10.097
      c-2.789-2.12-6.72-1.85-9.194,0.633c-21.717,21.8-50.621,33.805-81.389,33.805c-30.767,0-59.672-12.005-81.39-33.805
      c-1.358-1.363-3.154-2.06-4.961-2.06c-1.484,0-2.975,0.47-4.233,1.427c-9.379,7.128-20.594,10.619-32.413,10.096
      c-12.144-0.537-23.688-5.562-32.507-14.149c-8.819-8.588-14.141-19.99-14.981-32.105c-1.63-23.47,13.513-45.099,36.035-51.531
      c1.582-0.452,3.042-1.33,4.006-2.664c1.927-2.667,1.741-6.146-0.205-8.551c-5.717-7.062-8.521-15.974-7.899-25.095
      c1.162-17.009,14.788-31.256,31.696-33.14c0.115-0.013,0.231-0.025,0.346-0.037c6.52-0.667,13.053,1.026,18.597,4.522
      c6.709,4.231,18.51,10.793,34.829,16.553c16.792,5.927,40.865,11.771,70.516,11.771c12.469,0,25.929-1.035,40.241-3.53
      c3.798-0.662,6.612-4.151,6.051-7.966c-0.576-3.918-4.264-6.565-8.139-5.881c-45.22,7.95-81.196,0.372-103.416-7.387
      c-19.41-6.777-32.014-14.867-36.289-17.84c-7.349-23.358-1.068-49.323,16.303-66.695c18.219-18.217,45.569-23.963,69.332-15.392
      c-7.427,9.476-10.144,21.656-7.291,33.89c3.464,14.853,14.755,26.437,29.466,30.23c30.259,7.803,52.537,17.642,61.175,27.014
      c1.867,2.026,4.695,2.898,7.329,2.091c4.273-1.309,8.73-1.804,13.244-1.474c17.668,1.298,31.204,15.662,33.107,33.271
      c3.122,28.877-58.137,90.985-186.17,61.365c-3.835-0.887-7.66,1.56-8.442,5.444c-0.755,3.749,1.816,7.396,5.542,8.255
      c24.81,5.721,46.828,8,66.177,8c36.023,0,62.779-7.907,80.955-16.233c22.618-10.361,36-22.933,41.765-29.22
      C382.189,188.291,395.499,208.739,393.965,230.818z"
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    ),
  },
  {
    title: "Cold Drinks",
    id: 3,
    icon: (
      <svg
        className="w-7 h-7 group-hover:fill-primary"
        enableBackground="new 0 0 512 512"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g>
            <path d="m447.34 69.464c3.846-5.109 4.463-11.838 1.608-17.56-2.854-5.723-8.601-9.277-14.996-9.277h-272.997c-3.634-24.093-24.458-42.627-49.548-42.627-27.643 0-50.133 22.489-50.133 50.133 0 27.643 22.489 50.133 50.133 50.133 6.461 0 12.639-1.231 18.316-3.468 0 0 113.999 151.405 114 151.406 6.068 8.058 9.433 18.106 9.433 28.213v142.875c0 3.909-.406 7.818-1.21 11.643-4.715 22.414-22.646 39.609-45.014 43.879-2.777.444-27.457 5.021-32.575 28.052-.494 2.222.047 4.549 1.472 6.325 1.424 1.776 3.578 2.809 5.855 2.809h116.653c4.146 0 7.506-3.36 7.506-7.506s-3.361-7.506-7.506-7.506c0 0-104.199 0-104.198-.001 5.339-5.239 11.211-6.461 18.158-7.942 32.374-6.904 55.872-36.239 55.872-69.753v-142.876c0-2.197-.131-4.388-.367-6.567h20.88c-.236 2.179-.367 4.371-.367 6.567v142.875c0 33.595 23.622 62.957 56.166 69.816 6.544 1.379 12.902 3.013 17.864 7.881h-28.682c-4.146 0-7.506 3.36-7.506 7.506s3.361 7.506 7.506 7.506h41.136c2.277 0 4.43-1.033 5.855-2.809 1.425-1.777 1.966-4.103 1.472-6.325-3.794-17.067-18.816-25.133-34.551-28.449-25.639-5.404-44.247-28.588-44.247-55.125v-142.876c0-10.082 3.368-20.157 9.433-28.212zm-335.933 15.788c-19.365 0-35.12-15.754-35.12-35.12s15.755-35.12 35.12-35.12c16.788 0 30.847 11.844 34.294 27.614h-23.17c-6.395 0-12.141 3.555-14.996 9.278-2.854 5.722-2.238 12.452 1.608 17.56l11.044 14.668c-2.808.728-5.748 1.12-8.78 1.12zm180.783 169.584h-27.903c-1.494-4.031-3.41-7.882-5.715-11.522-.008-.012-.015-.025-.023-.037-3.259-5.235-7.163-9.855-10.85-14.752-5.974-7.935-98.956-131.421-101.875-135.31 11.01.14 21.999 1.108 32.905 2.594 5.135.7 10.254 1.517 15.358 2.421 5.027.89 9.956 1.846 14.913 2.865 4.061.835 8.026-1.794 8.854-5.855.828-4.062-1.794-8.026-5.856-8.854-25.385-5.154-51.391-9.045-77.36-8.019l-13.502-17.932c-.537-.713-.387-1.388-.167-1.829s.67-.967 1.562-.967h311.421c.893 0 1.342.526 1.562.967s.369 1.116-.168 1.829l-20.077 26.665c-7.845 5.108-16.28 9.245-25.102 12.284-20.321 7.002-42.008 8.847-63.376 7.81-27.222-1.321-54.15-7.094-80.53-13.188-4.045-.934-8.071 1.583-9.005 5.621-.934 4.039 1.582 8.07 5.622 9.005 26.711 6.173 53.693 11.913 81.132 13.468 24.013 1.361 48.186-.756 71.047-8.523.124-.042.247-.085.37-.128l-94.66 125.724c-3.539 4.697-6.535 10.154-8.577 15.663z" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    title: "Hot Drinks",
    id: 2,
    icon: (
      <svg
        className="w-7 h-7 group-hover:fill-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 511.988 511.988"
      >
        <g>
          <g>
            <path
              d="M394.655,202.654H95.988c-17.643,0-32,14.357-32,32v21.333c0,76.117,42.048,145.152,109.717,180.16
       c5.227,2.688,11.669,0.661,14.379-4.587c2.688-5.227,0.661-11.669-4.587-14.379c-60.544-31.317-98.176-93.077-98.176-161.195
       v-21.333c0-5.888,4.779-10.667,10.667-10.667h298.667c5.888,0,10.667,4.779,10.667,10.667v21.333
       c0,68.117-37.632,129.877-98.197,161.173c-5.248,2.709-7.275,9.152-4.587,14.379c1.899,3.669,5.632,5.781,9.493,5.781
       c1.664,0,3.328-0.384,4.885-1.195c67.691-34.987,109.739-104,109.739-180.139v-21.333
       C426.655,217.011,412.297,202.654,394.655,202.654z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M489.865,422.558c-1.664-3.989-5.547-6.592-9.856-6.592H10.676c-4.309,0-8.192,2.603-9.856,6.592
       c-1.664,3.989-0.747,8.576,2.304,11.627l23.915,23.936c14.123,14.101,32.853,21.867,52.8,21.867h330.965
       c19.947,0,38.699-7.765,52.843-21.867l23.915-23.936C490.612,431.134,491.529,426.547,489.865,422.558z M448.543,443.038
       c-10.069,10.069-23.488,15.616-37.717,15.616H79.839c-14.229,0-27.648-5.547-37.717-15.616l-5.717-5.717H454.26L448.543,443.038z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M491.359,253.022c-28.736-18.475-74.645,1.579-79.787,3.904c-5.355,2.453-7.744,8.768-5.291,14.144
       c2.453,5.376,8.747,7.744,14.144,5.291c10.283-4.672,43.264-15.744,59.392-5.355c7.275,4.672,10.837,13.739,10.837,27.648
       c0,42.709-86.144,68.523-119.403,74.88l-7.552,1.493c-5.781,1.131-9.536,6.741-8.405,12.523c1.003,5.077,5.461,8.597,10.453,8.597
       c0.683,0,1.365-0.064,2.069-0.213l7.488-1.472c5.589-1.067,136.683-26.773,136.683-95.808
       C511.988,277.193,505.034,261.854,491.359,253.022z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M328.372,113.31c17.344-21.675,17.344-55.616,0-77.291c-3.691-4.608-10.368-5.376-14.997-1.664
       c-4.608,3.691-5.355,10.389-1.664,14.997c10.987,13.717,10.987,36.907-0.021,50.667c-17.365,21.675-17.365,55.616,0,77.291
       c2.112,2.645,5.205,4.011,8.341,4.011c2.325,0,4.693-0.768,6.656-2.347c4.608-3.691,5.355-10.411,1.664-14.997
       C317.343,150.259,317.343,127.07,328.372,113.31z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M264.287,113.31c17.365-21.675,17.365-55.616,0-77.291c-3.669-4.608-10.389-5.355-14.997-1.664
       c-4.608,3.691-5.355,10.411-1.664,14.997c11.008,13.717,11.008,36.907-0.021,50.667c-17.344,21.675-17.344,55.616,0,77.291
       c2.112,2.645,5.205,4.011,8.341,4.011c2.325,0,4.672-0.768,6.656-2.347c4.608-3.691,5.355-10.389,1.664-14.997
       C253.279,150.259,253.279,127.07,264.287,113.31z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M200.372,113.331c17.344-21.675,17.344-55.616,0-77.291c-3.669-4.608-10.368-5.376-14.997-1.664
       c-4.587,3.669-5.333,10.389-1.664,14.976c10.987,13.717,10.987,36.907-0.021,50.667c-17.365,21.675-17.365,55.616,0,77.291
       c2.112,2.645,5.205,4.011,8.341,4.011c2.325,0,4.693-0.768,6.656-2.325c4.608-3.691,5.355-10.411,1.664-14.997
       C189.343,150.259,189.343,127.091,200.372,113.331z"
            />
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    ),
  },
]

export default categories