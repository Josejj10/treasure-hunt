import piterSol from '@/icons/pitersol.png'

export interface Coupon {
  name: string
  artist: string
  cover: string
}

export const availableCoupons: Coupon[] = [
  {
    name: 'El archivo de los PiterSoles™',
    artist: 'Válido en tiendas selectas',
    cover: piterSol,
  },
  {
    name: 'Un shawarma El Egipcio',
    artist: 'El que ya te debía',
    cover:
      'https://www.elegipcio.pe/assets/img/promos/COMBOPERSONALMIXTO6037fa7858801.jpg',
  },
  {
    name: 'Una carreada en el Brawl',
    artist: 'No hago milagros',
    cover: 'https://i.imgur.com/TGtzdI9.png',
  },
  {
    name: 'Una tuneada a la PiterPage™',
    artist: 'Que tu imaginación no vuele tanto',
    cover:
      'https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1r0fr7i_87d28182.jpeg',
  },
  {
    name: 'Una tacita para el PiterTea™',
    artist: 'Canjeable sólo el 22/12/2023.',
    cover:
      'https://nestasia.in/cdn/shop/products/96.2_1200x1200.jpg?v=1652158941',
  },
  {
    name: 'Una bolsita para la tacita',
    artist: 'Imagen referencial',
    cover:
      'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/1fd536d0f119e8cdc1c65275262eaaf2.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp',
  },
]
