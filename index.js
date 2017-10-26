/**
 * Return an icon
 * @param {string} code
 */
function getIcon(code) {
    return iconList[code.toLowerCase()];
}

const sizes = ['fa-lg', 'fa-2x', 'fa-3x', 'fa-4x', 'fa-5x']
/**
 * Return an icon
 * @param {string} code
 */
// function getIcons(code, size="fa-lg") {
//     if(!sizes.includes(size)) {
//         size = "fa-lg";
//     }

//     let str = code.split(" ");
//     for(let i = 0; i<str.length; i++) {
//         if(iconList[str[i].toLowerCase()]) {
//             return iconList[str[i].toLowerCase()] + ' ' + size;
//         } else if(mappings[str[i]] && iconList[mappings[str[i]]]) {
//             return iconList[mappings[str[i]]] + ' ' + size;;
//         }
//     }
//     return null;
// }

function getIcons(code) {
    let str = code.split(" ");
    for(let i = 0; i<str.length; i++) {
        if(iconList[str[i].toLowerCase()]) {
            return iconList[str[i].toLowerCase()];
        } else if(mappings[str[i]] && iconList[mappings[str[i]]]) {
            return iconList[mappings[str[i]]];
        }
    }
    return null;
}


const iconList = {
    'address-book': {
        name: 'address',
        class: 'fa fa-address-book',
        iconType: 'fa',
        iconName: 'fa-address-book'
    },
    'bandcamp': {
        name: 'bandcamp',
        class: 'fa fa-bandcamp',
        iconType: 'fa',
        iconName: 'fa-bandcamp'
    },
    'bath': {
        name: 'bath',
        class: 'fa fa-bath',
        iconType: 'fa',
        iconName: 'fa-bath'
    },
    'id-card': {
        name: 'id-card',
        class: 'fa fa-id-card',
        iconType: 'fa',
        iconName: 'fa-id-card'
    },
    'eercast': {
        name: 'eercast',
        class: 'fa fa-eercast',
        iconType: 'fa',
        iconName: 'fa-eercast'
    },
    'imdb': {
        name: 'imdb',
        class: 'fa fa-imdb',
        iconType: 'fa',
        iconName: 'fa-imdb'
    },
    'envelope-open': {
        name: 'envelope-open',
        class: 'fa fa-envelope-open',
        iconType: 'fa',
        iconName: 'fa-envelope-open'
    },
    'etsy': {
        name: 'etsy',
        class: 'fa fa-etsy',
        iconType: 'fa',
        iconName: 'fa-etsy'
    },
    'free-code-camp': {
        name: 'free-code-camp',
        class: 'fa fa-free-code-camp',
        iconType: 'fa',
        iconName: 'fa-free-code-camp'
    },
    'grav': {
        name: 'grav',
        class: 'fa fa-grav',
        iconType: 'fa',
        iconName: 'fa-grav'
    },
    'handshake-o': {
        name: 'handshake-o',
        class: 'fa fa-handshake-o',
        iconType: 'fa',
        iconName: 'fa-handshake-o'
    },
    'linode': {
        name: 'linode',
        class: 'fa fa-linode',
        iconType: 'fa',
        iconName: 'fa-linode'
    },
    'meetup': {
        name: 'meetup',
        class: 'fa fa-meetup',
        iconType: 'fa',
        iconName: 'fa-meetup'
    },
    'microchip': {
        name: 'microchip',
        class: 'fa fa-microchip',
        iconType: 'fa',
        iconName: 'fa-microchip'
    },
    'podcast': {
        name: 'podcast',
        class: 'fa fa-podcast',
        iconType: 'fa',
        iconName: 'fa-podcast'
    },
    'quora': {
        name: 'quora',
        class: 'fa fa-quora',
        iconType: 'fa',
        iconName: 'fa-quora'
    },
    'ravelry': {
        name: 'ravelry',
        class: 'fa fa-ravelry',
        iconType: 'fa',
        iconName: 'fa-ravelry'
    },
    'shower': {
        name: 'shower',
        class: 'fa fa-shower',
        iconType: 'fa',
        iconName: 'fa-shower'
    },
    'snowflake-o': {
        name: 'snowflake-o',
        class: 'fa fa-snowflake-o',
        iconType: 'fa',
        iconName: 'fa-snowflake-o'
    },
    'superpowers': {
        name: 'superpowers',
        class: 'fa fa-superpowers',
        iconType: 'fa',
        iconName: 'fa-superpowers'
    },
    'telegram': {
        name: 'telegram',
        class: 'fa fa-telegram',
        iconType: 'fa',
        iconName: 'fa-telegram'
    },
    'thermometer-full': {
        name: 'thermometer-full',
        class: 'fa fa-thermometer-full',
        iconType: 'fa',
        iconName: 'fa-thermometer-full'
    },
    'window-close': {
        name: 'window-close',
        class: 'fa fa-window-close',
        iconType: 'fa',
        iconName: 'fa-window-close'
    },
    'user-circle': {
        name: 'user-circle',
        class: 'fa fa-user-circle',
        iconType: 'fa',
        iconName: 'fa-user-circle'
    },
    'user-circle-o': {
        name: 'user-circle-o',
        class: 'fa fa-user-circle-o',
        iconType: 'fa',
        iconName: 'fa-user-circle-o'
    },
    'user-o': {
        name: 'user-o',
        class: 'fa fa-user-o',
        iconType: 'fa',
        iconName: 'fa-user-o'
    },
    'vcard': {
        name: 'vcard',
        class: 'fa fa-vcard',
        iconType: 'fa',
        iconName: 'fa-vcard'
    },
    'window-close': {
        name: 'window-close',
        class: 'fa fa-window-close',
        iconType: 'fa',
        iconName: 'fa-window-close'
    },
    'window-maximize': {
        name: 'window-maximize',
        class: 'fa fa-window-maximize',
        iconType: 'fa',
        iconName: 'fa-window-maximize'
    },
    'window-minimize': {
        name: 'window-minimize',
        class: 'fa fa-window-minimize',
        iconType: 'fa',
        iconName: 'fa-window-minimize'
    },
    'window-restore': {
        name: 'window-restore',
        class: 'fa fa-window-restore',
        iconType: 'fa',
        iconName: 'fa-window-restore'
    },
    'wpexplorer': {
        name: 'wpexplorer',
        class: 'fa fa-wpexplorer',
        iconType: 'fa',
        iconName: 'fa-wpexplorer'
    },
    'adjust': {
        name: 'adjust',
        class: 'fa fa-adjust',
        iconType: 'fa',
        iconName: 'fa-adjust'
    },
    'american-sign-language-interpreting': {
        name: 'american-sign-language-interpreting',
        class: 'fa fa-american-sign-language-interpreting',
        iconType: 'fa',
        iconName: 'fa-american-sign-language-interpreting'
    },
    'anchor': {
        name: 'anchor',
        class: 'fa fa-anchor',
        iconType: 'fa',
        iconName: 'fa-anchor'
    },
    'archive': {
        name: 'archive',
        class: 'fa fa-archive',
        iconType: 'fa',
        iconName: 'fa-archive'
    },
    'area-chart': {
        name: 'area-chart',
        class: 'fa fa-area-chart',
        iconType: 'fa',
        iconName: 'fa-area-chart'
    },
    'arrows': {
        name: 'arrows',
        class: 'fa fa-arrows',
        iconType: 'fa',
        iconName: 'fa-arrows'
    },
    'arrows-h': {
        name: 'arrows-h',
        class: 'fa fa-arrows-h',
        iconType: 'fa',
        iconName: 'fa-arrows-h'
    },
    'arrows-v': {
        name: 'arrows-v',
        class: 'fa fa-arrows-v',
        iconType: 'fa',
        iconName: 'fa-arrows-v'
    },
    'assistive-listening-systems': {
        name: 'assistive-listening-systems',
        class: 'fa fa-assistive-listening-systems',
        iconType: 'fa',
        iconName: 'fa-assistive-listening-systems'
    },
    'asterisk': {
        name: 'asterisk',
        class: 'fa fa-asterisk',
        iconType: 'fa',
        iconName: 'fa-asterisk'
    },
    'at': {
        name: 'at',
        class: 'fa fa-at',
        iconType: 'fa',
        iconName: 'fa-at'
    },
    'audio-description': {
        name: 'audio-description',
        class: 'fa fa-audio-description',
        iconType: 'fa',
        iconName: 'fa-audio-description'
    },
    'car': {
        name: 'car',
        class: 'fa fa-car',
        iconType: 'fa',
        iconName: 'fa-car'
    },
    'balance-scale': {
        name: 'balance-scale',
        class: 'fa fa-balance-scale',
        iconType: 'fa',
        iconName: 'fa-balance-scale'
    },
    'ban': {
        name: 'ban',
        class: 'fa fa-ban',
        iconType: 'fa',
        iconName: 'fa-ban'
    },
    'university': {
        name: 'university',
        class: 'fa fa-university',
        iconType: 'fa',
        iconName: 'fa-university'
    },
    'bar-chart': {
        name: 'bar-chart',
        class: 'fa fa-bar-chart',
        iconType: 'fa',
        iconName: 'fa-bar-chart'
    },
    'barcode': {
        name: 'barcode',
        class: 'fa fa-barcode',
        iconType: 'fa',
        iconName: 'fa-barcode'
    },
    'bars': {
        name: 'bars',
        class: 'fa fa-bars',
        iconType: 'fa',
        iconName: 'fa-bars'
    },
    'battery-full': {
        name: 'battery-full',
        class: 'fa fa-battery-full',
        iconType: 'fa',
        iconName: 'fa-battery-full'
    },
    'bed': {
        name: 'bed',
        class: 'fa fa-bed',
        iconType: 'fa',
        iconName: 'fa-bed'
    },
    'beer': {
        name: 'beer',
        class: 'fa fa-beer',
        iconType: 'fa',
        iconName: 'fa-beer'
    },
    'bell': {
        name: 'bell',
        class: 'fa fa-bell',
        iconType: 'fa',
        iconName: 'fa-bell'
    },
    'bicycle': {
        name: 'bicycle',
        class: 'fa fa-bicycle',
        iconType: 'fa',
        iconName: 'fa-bicycle'
    },
    'binoculars': {
        name: 'binoculars',
        class: 'fa fa-binoculars',
        iconType: 'fa',
        iconName: 'fa-binoculars'
    },
    'birthday-cake': {
        name: 'birthday-cake',
        class: 'fa fa-birthday-cake',
        iconType: 'fa',
        iconName: 'fa-birthday-cake'
    },
    'blind': {
        name: 'blind',
        class: 'fa fa-blind',
        iconType: 'fa',
        iconName: 'fa-blind'
    },
    'bluetooth': {
        name: 'bluetooth',
        class: 'fa fa-bluetooth',
        iconType: 'fa',
        iconName: 'fa-bluetooth'
    },
    'bolt': {
        name: 'bolt',
        class: 'fa fa-bolt',
        iconType: 'fa',
        iconName: 'fa-bolt'
    },
    'bomb': {
        name: 'bomb',
        class: 'fa fa-bomb',
        iconType: 'fa',
        iconName: 'fa-bomb'
    },
    'book': {
        name: 'book',
        class: 'fa fa-book',
        iconType: 'fa',
        iconName: 'fa-book'
    },
    'bookmark': {
        name: 'bookmark',
        class: 'fa fa-bookmark',
        iconType: 'fa',
        iconName: 'fa-bookmark'
    },
    'braille': {
        name: 'braille',
        class: 'fa fa-braille',
        iconType: 'fa',
        iconName: 'fa-braille'
    },
    'briefcase': {
        name: 'briefcase',
        class: 'fa fa-briefcase',
        iconType: 'fa',
        iconName: 'fa-briefcase'
    },
    'bug': {
        name: 'bug',
        class: 'fa fa-bug',
        iconType: 'fa',
        iconName: 'fa-bug'
    },
    'building': {
        name: 'building',
        class: 'fa fa-building',
        iconType: 'fa',
        iconName: 'fa-building'
    },
    'bullhorn': {
        name: 'bullhorn',
        class: 'fa fa-bullhorn',
        iconType: 'fa',
        iconName: 'fa-bullhorn'
    },
    'bullseye': {
        name: 'bullseye',
        class: 'fa fa-bullseye',
        iconType: 'fa',
        iconName: 'fa-bullseye'
    },
    'bus': {
        name: 'bus',
        class: 'fa fa-bus',
        iconType: 'fa',
        iconName: 'fa-bus'
    },
    'calculator': {
        name: 'calculator',
        class: 'fa fa-calculator',
        iconType: 'fa',
        iconName: 'fa-calculator'
    },
    'car': {
        name: 'car',
        class: 'fa fa-car',
        iconType: 'fa',
        iconName: 'fa-car'
    },
    'camera': {
        name: 'camera',
        class: 'fa fa-camera',
        iconType: 'fa',
        iconName: 'fa-camera'
    },
    'fa-cart-plus': {
        name: 'fa-cart-plus',
        class: 'fa fa-fa-cart-plus',
        iconType: 'fa',
        iconName: 'fa-fa-cart-plus'
    },
    'car': {
        name: 'car',
        class: 'fa fa-car',
        iconType: 'fa',
        iconName: 'fa-car'
    },
    'car': {
        name: 'car',
        class: 'fa fa-car',
        iconType: 'fa',
        iconName: 'fa-car'
    },
    'car': {
        name: 'car',
        class: 'fa fa-car',
        iconType: 'fa',
        iconName: 'fa-car'
    },
    'car': {
        name: 'car',
        class: 'fa fa-car',
        iconType: 'fa',
        iconName: 'fa-car'
    },
    'car': {
        name: 'car',
        class: 'fa fa-car',
        iconType: 'fa',
        iconName: 'fa-car'
    },
    'car': {
        name: 'car',
        class: 'fa fa-car',
        iconType: 'fa',
        iconName: 'fa-car'
    },
    'car': {
        name: 'car',
        class: 'fa fa-car',
        iconType: 'fa',
        iconName: 'fa-car'
    },
}

const mappings = {
    address: 'address-book',
    whereabouts: 'address-book',
    residence: 'address-book',
    number: 'address-book',
    bank: 'university',
    person: 'user-circle',
    cab: 'car',
    taxi: 'car',
    cart: 'fa-cart-plus'
}
